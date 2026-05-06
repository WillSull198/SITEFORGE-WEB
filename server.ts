import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(cors({ origin: process.env.APP_URL || "http://localhost:3000" }));
  app.use(express.json());

  // API Route for contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const { 
        name, 
        email, 
        company, 
        message, 
        formType, 
        selectedTime, 
        scale, 
        activeProjects, 
        source, 
        painPoint 
      } = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const subject = formType === "pilot"
        ? `New Pilot Application — ${company || name}`
        : formType === "demo"
        ? `New Demo Booking — ${name} (${selectedTime})`
        : `New Contact Form Submission — ${name}`;

      const html = `
        <h2>New ${formType || "contact"} submission from SiteForge</h2>
        <table border="1" style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px;"><b>Name:</b></td><td style="padding: 8px;">${name || "—"}</td></tr>
          <tr><td style="padding: 8px;"><b>Email:</b></td><td style="padding: 8px;">${email || "—"}</td></tr>
          <tr><td style="padding: 8px;"><b>Company:</b></td><td style="padding: 8px;">${company || "—"}</td></tr>
          ${selectedTime ? `<tr><td style="padding: 8px;"><b>Selected Time:</b></td><td style="padding: 8px;">${selectedTime}</td></tr>` : ""}
          ${scale ? `<tr><td style="padding: 8px;"><b>Construction Scale:</b></td><td style="padding: 8px;">${scale}</td></tr>` : ""}
          ${activeProjects ? `<tr><td style="padding: 8px;"><b>Active Projects:</b></td><td style="padding: 8px;">${activeProjects}</td></tr>` : ""}
          ${source ? `<tr><td style="padding: 8px;"><b>Lead Source:</b></td><td style="padding: 8px;">${source}</td></tr>` : ""}
          ${painPoint ? `<tr><td style="padding: 8px;"><b>Pain Point:</b></td><td style="padding: 8px;">${painPoint}</td></tr>` : ""}
          ${message ? `<tr><td style="padding: 8px;"><b>Message:</b></td><td style="padding: 8px;">${message}</td></tr>` : ""}
        </table>
      `;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "william@sullivan.net.au",
        replyTo: email,
        subject,
        html,
      });

      res.json({ success: true, message: "Lead captured successfully" });
    } catch (error) {
      console.error("Contact API error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
