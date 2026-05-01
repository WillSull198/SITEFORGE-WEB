import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, RefreshCcw, Layout, Database } from "lucide-react";

export default function CompareBuildxactPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="eyebrow">BUILDXACT + SITEFORGE</div>
          <h1 className="text-balance text-text-primary mb-8">
            Buildxact handles cost. <br/>
            <span className="text-amber-base">SiteForge handles operations.</span>
          </h1>
          <p className="lead-text">
            SiteForge is not a competitor to Buildxact. It is the missing operations layer purpose-built for AU residential builders to complete the gap between site events and commercial recovery.
          </p>
        </div>
      </section>

      {/* Two Column Breakdown */}
      <section className="py-24 px-6 bg-white overflow-hidden border-y border-border-light">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 rounded-card border border-border-light overflow-hidden shadow-xl">
           <div className="p-12 space-y-12 bg-white">
              <div className="space-y-4">
                 <div className="text-[12px] font-black italic tracking-tighter text-text-primary uppercase mb-2">BUILDXACT</div>
                 <h2 className="text-2xl font-bold">Cost & Budget Excellence.</h2>
                 <p className="text-sm text-text-secondary leading-relaxed">What Buildxact handles brilliantly for your office and finance teams.</p>
              </div>
              <ul className="space-y-4">
                 {[
                   "Estimating and take-offs",
                   "Job costing and budgets",
                   "Supplier management and POs",
                   "Progress claims and invoicing",
                   "Client selections portal",
                   "Schedule milestones"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm font-medium text-text-secondary">
                      <Check className="w-4 h-4 text-semantic-green" /> {item}
                   </li>
                 ))}
              </ul>
           </div>
           <div className="p-12 space-y-12 bg-bg-tinted border-l border-border-light">
              <div className="space-y-4">
                 <div className="text-[12px] font-bold text-text-primary uppercase tracking-widest mb-2">SITEFORGE</div>
                 <h2 className="text-2xl font-bold">Operations & Field Recovery.</h2>
                 <p className="text-sm text-text-secondary leading-relaxed">The operational layer that completes your Buildxact workflow.</p>
              </div>
              <ul className="space-y-4">
                 {[
                   "Variation and EOT approval pipeline (ClientFlow)",
                   "Multi-channel client approval delivery",
                   "E-signature with legal evidence trail",
                   "Site access and induction management (Passport)",
                   "Disclosed attendance evidence (Presence)",
                   "Field-to-commercial event chains",
                   "Microsoft Teams approvals",
                   "Bidirectional Buildxact sync"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm font-bold text-text-primary">
                      <Check className="w-4 h-4 text-amber-base" /> {item}
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* Integration Narrative */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12">
           <h2 className="text-3xl font-bold text-center">How the integration works.</h2>
           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-bg-tinted flex items-center justify-center text-text-primary text-xs font-bold">1</div>
                    <h4 className="font-bold">Connect via OAuth.</h4>
                 </div>
                 <p className="text-sm text-text-secondary leading-relaxed pl-11">
                    Connect your Buildxact account in Settings. Projects, clients, and cost codes sync immediately. Zero double-entry.
                 </p>
              </div>
              <div className="space-y-6">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-bg-tinted flex items-center justify-center text-text-primary text-xs font-bold">2</div>
                    <h4 className="font-bold">Bidirectional Flows.</h4>
                 </div>
                 <p className="text-sm text-text-secondary leading-relaxed pl-11">
                    Existing BX workflows remain unchanged. New events handled in SiteForge are synced back to BX automatically as signed variations.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Summary Banner */}
      <section className="bg-bg-amber-soft py-24 px-6 text-center border-y border-amber-base/10">
         <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl font-medium text-amber-dark leading-relaxed">
               "SiteForge fills the operational gap Buildxact wasn't designed for. Together, they form the complete stack for the modern AU builder."
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/product/buildxact-connector" className="btn-accent py-4 px-8">Explore the Connector</Link>
               <Link to="/demo" className="btn-secondary py-4 px-8">Book a Sync Demo</Link>
            </div>
         </div>
      </section>
    </div>
  );
}
