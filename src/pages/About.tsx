import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="eyebrow">OUR STORY</div>
          <h1 className="text-balance text-text-primary mb-8">
            Built by people who've worked AS4000 contracts. <br/>
            <span className="text-amber-base">Not Silicon Valley product managers.</span>
          </h1>
          <p className="lead-text">
            SiteForge started with a single observation: the variation approval process for Australian residential builders is genuinely broken. Weeks of email chains for something that should take hours. No audit trail for something that frequently ends in a dispute.
          </p>
        </div>
      </section>

      {/* The Problem That Started It */}
      <section className="bg-bg-dark py-32 px-6 text-white border-y border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
           <h2 className="text-3xl font-bold text-text-inverse">The problem that started it.</h2>
           <div className="space-y-6 text-text-inverse-muted text-lg leading-relaxed">
              <p>
                The founding insight came from a <span className="text-white font-bold">$14,000 variation</span> that was verbally agreed on site, sketched on a piece of paper, and never signed. When the client disputed it 8 months later at practical completion, there was no defensible record. The builder ate the cost.
              </p>
              <p>
                That's not an edge case. It's the default for builders who don't have a system specifically designed for this workflow. SiteForge is that system. We built the software we wished existed.
              </p>
           </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div className="space-y-6">
              <h2 className="text-3xl font-bold text-text-primary">Our Positioning.</h2>
              <p className="text-text-secondary leading-relaxed">
                We are not trying to replace Buildxact. Buildxact is excellent at estimating, job costing, and financial management. We built SiteForge to complete what Buildxact doesn't: the operating layer between site events and commercial recovery.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our goal is to be the obvious answer when a Buildxact customer says <span className="italic">"I wish Buildxact handled variations better."</span>
              </p>
           </div>
           <div className="bg-bg-tinted p-10 rounded-card border border-border-light relative flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                 <img src="/logo.svg" alt="SiteForge" className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                 <div className="font-bold text-text-primary">Brisbane, QLD</div>
                 <div className="text-sm text-text-tertiary">Headquarters</div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-amber-dark uppercase tracking-widest bg-amber-soft px-4 py-1.5 rounded-full">
                 <MapPin className="w-3 h-3" /> AU DATA RESIDENCY
              </div>
           </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-tinted py-32 px-6 border-y border-border-light">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-center mb-20 text-text-primary">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { title: "Specificity over vagueness.", desc: "We show you the actual time, the actual hash, and the actual clause. Builders deserve software as specific as their contracts." },
                  { title: "Australian construction, properly.", desc: "Legal framework, terminology, and QBCC requirements. We don't adapt US software for AU, we built for AU." },
                  { title: "Honest pricing.", desc: "No per-user fees. No revenue percentages. No bait-and-switch. The price on the page is the price you pay." },
                  { title: "The pilot or nothing.", desc: "We don't do toy trials. We do 90-day pilots on real projects. If it doesn't deliver value, you walk away with your search data." }
               ].map((v, i) => (
                  <div key={i} className="bg-white p-8 rounded-card border border-border-light shadow-sm space-y-4">
                     <h4 className="font-bold text-text-primary leading-tight h-12">{v.title}</h4>
                     <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Brisbane Based */}
      <section className="py-32 px-6 bg-white text-center">
         <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Brisbane-based. Serving AU.</h2>
            <p className="text-text-secondary leading-relaxed">
               We're based in Brisbane, QLD. Our pilot customers are across QLD, NSW, and VIC. We understand QBCC, QLeave, and the Security of Payment Acts. We're building this for the AU market.
            </p>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border-light text-center bg-bg-amber-soft">
        <div className="max-w-3xl mx-auto space-y-8">
           <h2 className="text-4xl font-bold">Work with people who know site.</h2>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo" className="btn-accent py-4 px-10 text-lg">Book a Demo Call</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
