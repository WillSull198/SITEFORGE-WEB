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

  // Send email helper
  async function sendLeadEmail(subject: string, bodyLines: string[]) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
      <div style="font-family:sans-serif;max-width:600px;padding:24px">
        <h2 style="color:#D97706">${subject}</h2>
        <table style="width:100%;border-collapse:collapse">
          ${bodyLines.map(line => `<tr><td style="padding:8px 0;border-bottom:1px solid #eee">${line}</td></tr>`).join("")}
        </table>
        <p style="color:#888;font-size:12px;margin-top:24px">Sent from SiteForge website</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"SiteForge Website" <${process.env.EMAIL_USER}>`,
      to: "william@sullvan.net.au",
      replyTo: undefined,
      subject,
      html,
    });
  }

  // API Route for contact/demo/pilot forms
  app.post("/api/contact", async (req, res) => {
    try {
      const { formType, name, email, company, message, selectedTime, scale, activeProjects, source, painPoint } = req.body;

      let subject = "";
      let lines: string[] = [];

      if (formType === "demo") {
        subject = `🗓 New Demo Booking — ${name}`;
        lines = [
          `<b>Type:</b> Demo Booking`,
          `<b>Name:</b> ${name || "—"}`,
          `<b>Email:</b> <a href="mailto:${email}">${email || "—"}</a>`,
          `<b>Selected Time:</b> ${selectedTime || "—"}`,
          `<b>Construction Scale:</b> ${scale || "—"}`,
        ];
      } else if (formType === "pilot") {
        subject = `🚀 New Pilot Application — ${company || name}`;
        lines = [
          `<b>Type:</b> Pilot Application`,
          `<b>Company:</b> ${company || "—"}`,
          `<b>Name:</b> ${name || "—"}`,
          `<b>Email:</b> <a href="mailto:${email}">${email || "—"}</a>`,
          `<b>Active Projects:</b> ${activeProjects || "—"}`,
          `<b>Lead Source:</b> ${source || "—"}`,
          `<b>Pain Point:</b> ${painPoint || "—"}`,
        ];
      } else {
        subject = `📩 New Contact — ${name}`;
        lines = [
          `<b>Name:</b> ${name || "—"}`,
          `<b>Email:</b> <a href="mailto:${email}">${email || "—"}</a>`,
          `<b>Company:</b> ${company || "—"}`,
          `<b>Message:</b> ${message || "—"}`,
        ];
      }

      await sendLeadEmail(subject, lines);
      console.log(`[SiteForge] Email sent for ${formType}: ${name} <${email}>`);
      res.json({ success: true });
    } catch (error) {
      console.error("Email send error:", error);
      res.status(500).json({ error: "Failed to send email" });
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
