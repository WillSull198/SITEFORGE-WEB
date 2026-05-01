import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Shield, Lock, ShieldCheck, Database, History, Scale, FileText } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto border-b border-border-light">
        <div className="max-w-4xl">
          <div className="eyebrow">COMPLIANCE & PROTECTION</div>
          <h1 className="text-balance text-text-primary mb-8">
            What we do with your data. <br/>
            <span className="text-amber-base">All of it.</span>
          </h1>
          <p className="lead-text">
            SiteForge is built on the principle of technical evidence. We don't just store logs; we build hash-chained audit trails and enforce compliance gates that protect your business and your workers.
          </p>
        </div>
      </section>

      {/* Technical Controls Grid */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                icon: Database, 
                title: 'Data Residency', 
                desc: 'All data is stored in Sydney, Australia (AWS ap-southeast-2). No offshore replication. No US data transfers. Your records stay in Australia.' 
              },
              { 
                icon: Lock, 
                title: 'Encryption', 
                desc: 'AES-256 at rest and TLS 1.3 in transit. Every signed PDF includes a SHA-256 document hash recorded at generation and stored in the audit chain.' 
              },
              { 
                icon: History, 
                title: 'Audit Log', 
                desc: 'Every action produces an immutable audit record. Records are hash-chained — each entry includes the SHA-256 hash of the previous, ensuring total integrity.' 
              },
              { 
                icon: ShieldCheck, 
                title: 'Access Controls', 
                desc: 'Role-based access with seven distinct roles (Director, PM, CA, Supervisor, Subbie, Client, Worker). Permission matrix is enforced at the API layer.' 
              },
              { 
                icon: Shield, 
                title: 'Backups', 
                desc: 'Daily snapshots with 30-day retention and point-in-time recovery. RTO < 4 hours, RPO < 24 hours. Your data is redundant and recoverable.' 
              },
              { 
                icon: Scale, 
                title: 'WSA 2005 Compliance', 
                desc: 'The presence module includes mandatory compliance gates. System enforces the 14-day written notice requirement. Covert activation is not possible.' 
              }
            ].map((f, i) => (
              <div key={i} className="space-y-6">
                <div className="w-10 h-10 bg-bg-tinted rounded flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-text-primary" />
                </div>
                <h4 className="text-xl font-bold text-text-primary uppercase tracking-tight">{f.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Roadmap */}
      <section className="bg-bg-dark py-32 px-6 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
          <div className="text-center">
             <h2 className="text-text-inverse mb-4">Compliance Roadmap</h2>
             <p className="text-text-inverse-muted">We maintain a rigorous schedule for third-party auditing and certification.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
             <div className="bg-white/5 border border-white/10 p-8 rounded-card space-y-4">
                <div className="flex justify-between items-center">
                   <span className="font-bold">SOC 2 Type II</span>
                   <span className="text-[10px] bg-amber-base/20 text-amber-bright px-2 py-0.5 rounded uppercase font-bold">In Progress</span>
                </div>
                <p className="text-xs text-text-inverse-muted">Independent audit of our security and privacy controls. Expected Q3 2026.</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-8 rounded-card space-y-4 opacity-60">
                <div className="flex justify-between items-center">
                   <span className="font-bold">ISO 27001</span>
                   <span className="text-[10px] bg-white/10 text-white/50 px-2 py-0.5 rounded uppercase font-bold">Roadmap</span>
                </div>
                <p className="text-xs text-text-inverse-muted">Global standard for information security management. Expected Q1 2027.</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-8 rounded-card space-y-1 col-span-full">
                <div className="flex items-center gap-2 mb-2">
                   <FileText className="w-4 h-4 text-amber-bright" />
                   <span className="font-bold">AU Privacy Act 1988</span>
                   <span className="text-[10px] bg-semantic-green/20 text-semantic-green px-2 py-0.5 rounded uppercase font-bold">Compliant</span>
                </div>
                <p className="text-xs text-text-inverse-muted">Full compliance with the Australian Privacy Principles. Data export and erasure available on request.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Security FAQ / Specifics */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12">
           <h3 className="text-2xl font-bold">Quick Security Specs</h3>
           <div className="space-y-6">
              {[
                { label: "Data Hosting", value: "AWS Sydney (ap-southeast-2)" },
                { label: "Compliance Gates", value: "Enforced by system (hard-coded)" },
                { label: "Audit Log retention", value: "7 Years from PC + DLP end" },
                { label: "Hashing Algorithm", value: "SHA-256 for all critical actions" },
                { label: "Legal Framework", value: "Electronic Transactions Act 1999 (Cth)" }
              ].map((spec, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-border-light text-sm">
                   <span className="font-bold text-text-primary uppercase tracking-widest text-[10px] mb-1 md:mb-0">{spec.label}</span>
                   <span className="text-text-secondary font-mono bg-bg-tinted px-2 py-1 rounded">{spec.value}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border-light text-center bg-bg-tinted">
        <div className="max-w-3xl mx-auto space-y-8">
           <h2 className="text-4xl font-bold">Your data is defensible.</h2>
           <p className="lead-text">Learn more about how our audit trails protect your business.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo" className="btn-primary py-4 px-10 text-lg">Book a Security Briefing</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
