import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check, Info, ArrowRight, HelpCircle, Minus } from "lucide-react";
import React, { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Do you charge per user?", a: "No. Every plan includes unlimited users. We charge per active project because that's what correlates with the value we deliver — not how many people are using the software." },
    { q: "What counts as an \"active\" project?", a: "A project where work is happening and variations might be issued. Practical completion means it drops off billing at the end of that month. On-hold projects can be paused — you stop paying, the data stays." },
    { q: "Can I start on Core and upgrade?", a: "Yes. Any time. Upgrade takes effect on your next billing date. There's no migration, no data transfer — you're already on the same system." },
    { q: "Is there a setup fee?", a: "No. There's an optional onboarding session (90 minutes, included in all plans) but it's not charged separately." },
    { q: "What if I'm mid-project when I sign up?", a: "We prorate the first month. If you start on the 15th, you pay half a month." },
    { q: "Can I pause a project without cancelling?", a: "Yes. Mark it on-hold, billing stops, data stays. Resume any time." },
    { q: "Are there annual discounts?", a: "Yes. Annual billing saves 2 months (10 months price for 12). Contact us for Enterprise annual rates." },
    { q: "What happens at the end of the pilot?", a: "We contact you at day 75 to discuss. If you continue: $990 credited against Year 1. If you don't: full data export, all signed PDFs, full audit trail — it's your data and you keep it." },
    { q: "Do you take a percentage of variations approved?", a: "No. We never take a cut of transaction values. Flat monthly fee per project." },
    { q: "What's the Enterprise pricing based on?", a: "Project count, integration complexity, and support level. We quote per engagement. Start with a conversation." }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center border-b border-border-light">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tightest">Simple per-project pricing.</h1>
          <p className="lead-text max-w-3xl mx-auto">
            We charge per active project. Not per user. Not a percentage of your revenue. When a project hits practical completion, it drops off your bill.
          </p>
        </div>
      </section>

      {/* Pilot Pitch */}
      <section className="py-12 px-6 flex justify-center">
         <div className="max-w-4xl w-full bg-bg-amber-soft border border-amber-base/20 rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
            <div className="space-y-4 flex-1">
               <div className="text-amber-base font-bold text-xs uppercase tracking-widest">Limited Pilot Offer</div>
               <h3 className="text-2xl font-bold text-amber-dark">The 90-day pilot. $990. Fully credited.</h3>
               <p className="text-sm text-amber-dark/80 leading-relaxed font-medium">
                 $990 gets you 90 days of full Pro on your first project. If you continue, the $990 credits fully against your Year 1 subscription. If you don't, you walk away with your full audit record exported.
               </p>
            </div>
            <div className="shrink-0">
               <Link to="/pilot" className="btn-accent px-10">Start the pilot — $990</Link>
            </div>
         </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 pt-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
           
           {/* CORE */}
           <motion.div {...fadeInUp} className="bg-white border border-border-light rounded-card p-10 flex flex-col shadow-sm">
              <div className="space-y-2 mb-8">
                 <h3 className="text-2xl font-bold">CORE</h3>
                 <p className="text-sm text-text-tertiary">Ideal for 1–2 active projects.</p>
              </div>
              <div className="mb-8">
                 <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">$149</span>
                    <span className="text-text-tertiary text-sm font-semibold">/month per project</span>
                 </div>
              </div>
              <p className="text-sm text-text-secondary mb-8">You've got the variation problem and need ClientFlow + Buildxact to close the gap.</p>
              <div className="space-y-4 mb-10 flex-1">
                 {[
                   "ClientFlow Approval Pipeline",
                   "Buildxact Connector Sync",
                   "Standard Audit Trails",
                   "Unlimited Users",
                   "Standard Support"
                 ].map((f) => (
                   <div key={f} className="flex items-center gap-3 text-sm font-medium">
                      <Check className="w-4 h-4 text-semantic-green" /> {f}
                   </div>
                 ))}
              </div>
              <Link to="/demo" className="btn-secondary w-full">Most builders upgrade to Pro</Link>
           </motion.div>

           {/* PRO */}
           <motion.div 
             {...fadeInUp} 
             transition={{ delay: 0.1 }} 
             className="bg-bg-dark border-2 border-amber-base rounded-card p-10 flex flex-col relative shadow-2xl"
           >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-base text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">MOST POPULAR</div>
              <div className="space-y-2 mb-8">
                 <h3 className="text-2xl font-bold text-white uppercase tracking-tight">PRO</h3>
                 <p className="text-sm text-text-inverse-muted font-medium">Ideal for 3–8 simultaneous projects.</p>
              </div>
              <div className="mb-8">
                 <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">$449</span>
                    <span className="text-text-inverse-muted text-sm font-semibold">/month per project</span>
                 </div>
              </div>
              <p className="text-sm text-text-inverse-muted mb-8">Supervisors in field, PM doing contracts, Director watching P&L. You need all six pillars.</p>
              <div className="space-y-4 mb-10 flex-1">
                 {[
                   "Everything in Core",
                   "Site Passport (Access & Induction)",
                   "Presence Verification (Compliance)",
                   "Field-to-Commercial Engine",
                   "Teams Action Layer",
                   "Priority Onboarding"
                 ].map((f) => (
                   <div key={f} className="flex items-center gap-3 text-sm font-bold text-white">
                      <Check className="w-4 h-4 text-amber-bright" /> {f}
                   </div>
                 ))}
              </div>
              <Link to="/pilot" className="btn-accent w-full text-lg">Start Pilot</Link>
           </motion.div>

           {/* ENTERPRISE */}
           <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white border border-border-light rounded-card p-10 flex flex-col shadow-sm">
              <div className="space-y-2 mb-8">
                 <h3 className="text-2xl font-bold uppercase tracking-tight">ENTERPRISE</h3>
                 <p className="text-sm text-text-tertiary">For $20M+ per year operations.</p>
              </div>
              <div className="mb-8">
                 <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">Custom</span>
                    <span className="text-text-tertiary text-sm font-semibold">starting $1,200/mo</span>
                 </div>
              </div>
              <p className="text-sm text-text-secondary mb-8">Custom workflows, dedicated success manager, and compliance for commercial tenders.</p>
              <div className="space-y-4 mb-10 flex-1">
                 {[
                   "Everything in Pro",
                   "Custom Workflow Engineering",
                   "Dedicated Success Manager",
                   "SSO & Security Controls",
                   "DPA & Legal Compliance Review",
                   "Phone Support SLA"
                 ].map((f) => (
                   <div key={f} className="flex items-center gap-3 text-sm font-medium">
                      <Check className="w-4 h-4 text-semantic-green" /> {f}
                   </div>
                 ))}
              </div>
              <Link to="/demo" className="btn-secondary w-full">Contact Enterprise Sales</Link>
           </motion.div>
        </div>
      </section>

      {/* The Math Section */}
      <section className="bg-bg-tinted py-32 px-6">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-center font-bold">The rough math on one project.</h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg text-text-secondary leading-relaxed">
               <p>
                 The average builder on SiteForge recovers <span className="text-text-primary font-bold">$47,200</span> in approved variations over 90 days. Not all of that is new revenue — some of it was always going to get signed eventually. The difference is <span className="text-text-primary font-bold">speed</span> (weeks → hours) and <span className="text-text-primary font-bold">defensibility</span> (email → hash-chained evidence).
               </p>
               <div className="bg-white p-8 rounded-card border border-border-light space-y-4 shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Quick ROI check</div>
                  <div className="flex justify-between items-center text-sm">
                     <span>90-day Pro subscription</span>
                     <span className="font-bold text-text-primary">$1,347</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-bg-tinted pt-4 font-bold text-text-primary">
                     <span>Value of one recovered variation</span>
                     <span className="text-semantic-green">$4,500+</span>
                  </div>
                  <p className="text-xs italic text-text-tertiary">"The first recovered variation typically pays for six months of the subscription."</p>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-16">
          <h2 className="text-center">Pricing FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border border-border-light rounded-card overflow-hidden">
                 <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-tinted transition-colors"
                 >
                    <span className="font-bold text-text-primary">{f.q}</span>
                    <HelpCircle className={`w-5 h-5 text-text-tertiary transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                 </button>
                 {openFaq === i && (
                   <div className="p-6 pt-0 text-text-secondary text-sm border-t border-border-light/50 bg-bg-tinted/30 leading-relaxed">
                      {f.a}
                   </div>
                 )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 border-t border-border-light text-center">
        <div className="max-w-3xl mx-auto space-y-8">
           <h2 className="text-4xl font-bold">Trialing is for toys. Pilots are for builders.</h2>
           <p className="lead-text">Join 40+ pilot builders recovering variations at scale today.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/pilot" className="btn-accent py-4 px-10 text-lg">Start the Pilot Program</Link>
              <Link to="/demo" className="btn-secondary py-4 px-10 text-lg">Book a Demo Call</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
