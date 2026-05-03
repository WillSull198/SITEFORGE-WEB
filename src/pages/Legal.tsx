import React from "react";
import { Link } from "react-router-dom";
import { FileText, Scale, Gavel, ShieldAlert, ScrollText } from "lucide-react";

export default function LegalPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto border-b border-border-light">
        <div className="max-w-4xl">
          <div className="eyebrow text-amber-base font-bold">TERMS & GOVERNANCE</div>
          <h1 className="text-balance text-text-primary mb-8">
            Legal Framework & <br/>
            <span className="text-amber-base">Governance.</span>
          </h1>
          <p className="lead-text">
            SiteForge operates under a strict legal framework designed for the Australian construction industry. Our terms ensure that your operations are defensible and your data is legally protected.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="grid md:grid-cols-2 gap-16">
             <div className="space-y-6">
                <div className="w-12 h-12 bg-bg-tinted rounded-full flex items-center justify-center">
                   <ScrollText className="w-6 h-6 text-amber-base" />
                </div>
                <h3 className="text-2xl font-bold italic tracking-tighter">Software Services Agreement</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                   Access to the SiteForge platform is provided under our standard SaaS agreement. We guarantee 99.9% uptime and primary data residency in Australia.
                </p>
             </div>
             <div className="space-y-6">
                <div className="w-12 h-12 bg-bg-tinted rounded-full flex items-center justify-center">
                   <Gavel className="w-6 h-6 text-amber-base" />
                </div>
                <h3 className="text-2xl font-bold italic tracking-tighter">Electronic Transactions</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                   All digital approvals and approvals on SiteForge are compliant with the <i>Electronic Transactions Act 1999 (Cth)</i>. Our audit trails provide legally defensible proof of intent.
                </p>
             </div>
          </div>

          <div className="p-10 bg-bg-tinted rounded-card border border-border-light space-y-8">
             <div className="flex items-center gap-4">
                <Scale className="w-8 h-8 text-text-primary" />
                <h2 className="text-2xl font-black uppercase tracking-tightest">Compliance Policy</h2>
             </div>
             <div className="prose prose-sm max-w-none text-text-secondary space-y-6">
                <p>
                  SiteForge is designed to assist builders in meeting their obligations under various State and Federal legislations including, but not limited to:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-medium">
                  <li>Building and Construction Industry Security of Payment Acts (Various States)</li>
                  <li>Workplace Surveillance Act 2005 (NSW)</li>
                  <li>Home Building Acts (Various States)</li>
                  <li>Work Health and Safety Acts</li>
                </ul>
                <p className="pt-6 font-bold text-text-primary">
                  SiteForge is a tool for compliance, not a substitute for legal advice. Users are responsible for ensuring their specific use of the platform meets their unique statutory obligations.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border-light text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
           <h2 className="text-3xl font-bold">Need our full MSA?</h2>
           <p className="text-text-secondary">Enterprise customers can request our Master Services Agreement for legal review.</p>
           <div className="flex justify-center">
              <Link to="/demo" className="btn-primary py-4 px-10 text-lg">Contact Legal Team</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
