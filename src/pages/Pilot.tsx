import { motion } from "motion/react";
import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Database, Zap, Sparkles } from "lucide-react";

export default function PilotPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="eyebrow">PILOT PROGRAM</div>
            <h1 className="text-balance text-text-primary">
              The 90-day pilot. <br/>
              <span className="text-amber-base">Real project. Real results.</span>
            </h1>
            <p className="lead-text">
              No 14-day trial. No feature-limited sandbox. $990 buys you 90 days of SiteForge Pro on your first active project. If you continue, it's fully credited. If you don't, you keep your data.
            </p>
            
            <div className="space-y-6 pt-4">
               <h4 className="font-bold text-text-primary uppercase tracking-widest text-[10px]">What $990 gets you:</h4>
               <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "90 days full Pro access",
                    "Expert onboarding call",
                    "Buildxact connector setup",
                    "Ongoing pilot support",
                    "Full credit against Year 1",
                    "Complete data export"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                       <CheckCircle2 className="w-4 h-4 text-amber-base" /> {item}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="bg-white border-2 border-amber-base rounded-card p-10 shadow-2xl relative z-10">
                {submitted ? (
                   <div className="text-center py-12 space-y-6">
                      <div className="w-16 h-16 bg-semantic-green/10 rounded-full flex items-center justify-center mx-auto">
                         <ShieldCheck className="w-8 h-8 text-semantic-green" />
                      </div>
                      <h3 className="text-2xl font-bold">Pilot Application Received.</h3>
                      <p className="text-text-secondary">We review every application personally. A success manager will contact you within one business day.</p>
                      <button onClick={() => setSubmitted(false)} className="text-amber-base font-bold text-sm">Submit another application</button>
                   </div>
                ) : (
                   <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                         <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                               <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Company Name</label>
                               <input required className="w-full bg-bg-tinted border border-border-light rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-base" placeholder="Hargraves Building" />
                            </div>
                            <div className="space-y-1.5">
                               <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Your Name</label>
                               <input required className="w-full bg-bg-tinted border border-border-light rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-base" placeholder="Mark H." />
                            </div>
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Work Email</label>
                            <input required type="email" className="w-full bg-bg-tinted border border-border-light rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-base" placeholder="mark@hargraves.com.au" />
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                               <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Active Projects</label>
                               <select className="w-full bg-bg-tinted border border-border-light rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-base">
                                  <option>1-2 Projects</option>
                                  <option>3-8 Projects</option>
                                  <option>9+ Projects</option>
                               </select>
                            </div>
                            <div className="space-y-1.5">
                               <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Source</label>
                               <select className="w-full bg-bg-tinted border border-border-light rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-base">
                                  <option>Buildxact Marketplace</option>
                                  <option>Search</option>
                                  <option>LinkedIn</option>
                                  <option>Referral</option>
                               </select>
                            </div>
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Variation Pain Point (Optional)</label>
                            <textarea className="w-full bg-bg-tinted border border-border-light rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-base h-24" placeholder="What's your biggest struggle with approvals right now?" />
                         </div>
                      </div>
                      <button type="submit" className="btn-accent w-full py-4 text-lg">Apply for the pilot</button>
                      <p className="text-[10px] text-text-tertiary text-center leading-relaxed">
                         By applying, you agree to our Pilot terms. We'll get back to you within 24 hours to confirm your project and schedule onboarding.
                      </p>
                   </form>
                )}
             </div>
             
             {/* Background Decoration */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-30 bg-[radial-gradient(var(--color-bg-amber-soft)_0%,transparent_70%)] blur-[100px]" />
          </div>
        </div>
      </section>

      {/* Pilot Timeline */}
      <section className="bg-bg-dark py-32 px-6 border-y border-white/5 overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-center mb-20">What happens in 90 days.</h2>
            <div className="grid md:grid-cols-4 gap-8">
               {[
                 { 
                   icon: Zap, 
                   title: "Week 1: Setup", 
                   desc: "90-minute onboarding call. Buildxact connected. First project and team configured. First variation sent." 
                 },
                 { 
                   icon: Database, 
                   title: "Weeks 2-4: Routine", 
                   desc: "Site Diary → Variation chains active. Passport scanning live on gate. Client portal in regular use." 
                 },
                 { 
                   icon: Sparkles, 
                   title: "Weeks 4-12: Full Ops", 
                   desc: "Forgotten-event detection running. Recovery analytics building. Teams integration live." 
                 },
                 { 
                   icon: CheckCircle2, 
                   title: "Week 12: Review", 
                   desc: "Full recovery summary produced. Decision to continue (credited) or walk away with full data export." 
                 }
               ].map((step, i) => (
                 <div key={i} className="space-y-6 relative">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-amber-base transition-colors">
                       <step.icon className="w-6 h-6 text-amber-bright" />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-white font-bold">{step.title}</h4>
                       <p className="text-sm text-text-inverse-muted leading-relaxed">{step.desc}</p>
                    </div>
                    {i < 3 && <div className="hidden md:block absolute top-6 left-full w-full h-[1px] bg-white/10 -ml-6 -z-10" />}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Credit Section */}
      <section className="py-32 px-6 bg-white overflow-hidden text-center">
         <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-amber-base font-black text-4xl font-mono">$990 CREDIT</div>
            <h2 className="text-3xl font-bold">The pilot is fully credited.</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              If SiteForge Pro is $449/mo × 12 = $5,388, the pilot costs you $0 of that. If you stay, you pay $4,398 for Year 1. We're betting on our results.
            </p>
         </div>
      </section>

      {/* Trust Signal Footer */}
      <section className="bg-bg-tinted py-16 px-6">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 text-[11px] font-bold text-text-tertiary uppercase tracking-widest">
            <div className="flex items-center gap-2">✓ No setup fees</div>
            <div className="flex items-center gap-2">✓ Fully credited against Year 1</div>
            <div className="flex items-center gap-2">✓ Data export guaranteed</div>
            <div className="flex items-center gap-2">✓ Unlimited system support</div>
         </div>
      </section>
    </div>
  );
}
