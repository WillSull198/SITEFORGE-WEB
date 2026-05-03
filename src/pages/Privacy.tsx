import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Eye, HandIcon, ShieldCheck, Database, Lock, Mail } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto border-b border-border-light">
        <div className="max-w-4xl">
          <div className="eyebrow text-semantic-green font-bold">DATA PRIVACY</div>
          <h1 className="text-balance text-text-primary mb-8">
            Your Privacy & <br/>
            <span className="text-amber-base">Data Rights.</span>
          </h1>
          <p className="lead-text">
            We adhere to the Australian Privacy Principles. In construction, data integrity is everything. We treat your workforce and client data with the highest level of security and transparency.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Eye,
                title: "Transparency",
                desc: "We are clear about what we collect. For workers on site, we enforce disclosed-only monitoring, ensuring all parties are aware of verification gates."
              },
              {
                icon: HandIcon,
                title: "Data Control",
                desc: "You own your data. We act as data processors. You can export or request deletion of your project records at any time."
              },
              {
                icon: Lock,
                title: "Security First",
                desc: "Privacy cannot exist without security. We use bank-grade encryption and secure Sydney-based data centers to keep your information private."
              }
            ].map((p, i) => (
              <div key={i} className="space-y-6 p-8 border border-border-light rounded-card hover:border-amber-base transition-colors">
                <div className="w-12 h-12 bg-bg-tinted rounded flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-text-primary" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">{p.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-24 px-6 bg-bg-tinted">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic tracking-tighter">Information we collect</h2>
            <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
              <p>To provide SiteForge services, we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Project Data:</b> Plans, cost codes, and variation details imported from Buildxact or manual entry.</li>
                <li><b>Workforce Data:</b> Names, contact details, and evidence entries (GPS/Photo) for site attendance verification.</li>
                <li><b>Client Details:</b> Contact information for approval workflows and ClientFlow portals.</li>
                <li><b>Device Information:</b> Technical metadata for security auditing and debugging.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black italic tracking-tighter">Your Data, Your Location</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
               <div className="flex-1 space-y-4 text-text-secondary text-sm">
                  <p>
                    Unlike many US-based SaaS platforms, SiteForge maintains 100% of its primary database and backup storage within <b>Sydney, Australia (ap-southeast-2)</b>.
                  </p>
                  <p>
                    This ensures compliance with Australian government data residency requirements and provides the lowest possible latency for your site operations.
                  </p>
               </div>
               <div className="w-full md:w-64 bg-white p-6 rounded-card border border-border-light shadow-sm text-center">
                  <Database className="w-10 h-10 text-amber-base mx-auto mb-4" />
                  <div className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Primary Region</div>
                  <div className="text-sm font-bold text-text-primary">SYDNEY, NSW</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border-light text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
           <Mail className="w-12 h-12 text-amber-base mx-auto" />
           <h2 className="text-3xl font-bold">Privacy Questions?</h2>
           <p className="text-text-secondary">Our Data Protection Officer can be reached at <span className="font-bold text-text-primary">privacy@siteforge.app</span></p>
           <div className="flex justify-center pt-8">
              <Link to="/demo" className="btn-secondary py-4 px-10 text-lg">Download Full Privacy Policy</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
