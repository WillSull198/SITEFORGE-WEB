import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Send, 
  CheckCircle2, 
  FileCheck, 
  Key, 
  LineChart, 
  Shield, 
  RefreshCcw, 
  LayoutTemplate, 
  Zap,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Clock,
  Check
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ClientFlowPage() {
  return (
    <div className="w-full">
      {/* Product Header */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="eyebrow">PILLAR 1 OF 6 · CLIENTFLOW</div>
            <h1 className="text-balance text-text-primary">
              Your client approved it at the site meeting. <br/>
              <span className="text-amber-base">It's still not in writing.</span> That's the problem.
            </h1>
            <p className="lead-text">
              The variation was agreed in conversation three weeks ago. The work's been done. But the signed approval? Still in the client's inbox. ClientFlow compresses the entire cycle — from event to signed contract — into a single, auditable workflow your clients can complete in under two minutes from their phone.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/demo" className="btn-primary px-8">Show me the ClientFlow demo</Link>
            </div>
          </div>
          
          <div className="relative">
             <div className="bg-bg-tinted rounded-card border border-border-light aspect-video shadow-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white,transparent)] opacity-40" />
                <div className="relative z-10 p-8 w-full">
                   <div className="bg-white rounded-lg p-6 shadow-sm border border-border-light space-y-4">
                      <div className="flex justify-between items-center">
                         <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Variation Pending</div>
                         <div className="w-3 h-3 rounded-full bg-amber-base animate-pulse" />
                      </div>
                      <div className="h-4 w-3/4 bg-bg-tinted rounded-full" />
                      <div className="h-4 w-1/2 bg-bg-tinted rounded-full" />
                      <div className="pt-4 flex justify-end">
                         <div className="px-6 py-2 bg-bg-dark text-white text-xs font-bold rounded">View Approval</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-bg-dark py-12 border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-mono font-bold text-white">$47,200</div>
            <p className="text-text-inverse-muted text-xs font-bold uppercase tracking-widest">Average recovered per project per 90-day pilot</p>
          </div>
          <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
            <div className="text-4xl font-mono font-bold text-amber-bright">11h 30m</div>
            <p className="text-text-inverse-muted text-xs font-bold uppercase tracking-widest">Average time from site event to signed approval</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-mono font-bold text-white">96%</div>
            <p className="text-text-inverse-muted text-xs font-bold uppercase tracking-widest">Approval rate on ClientFlow sent approvals</p>
          </div>
        </div>
      </section>

      {/* Comparison Section (The Problem Told Honestly) */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-20">The variation cycle, reimagined.</h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Old Way */}
            <div className="space-y-10">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-bg-tinted flex items-center justify-center text-text-tertiary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl">The "Email & PDF" Method</h3>
               </div>
               
               <div className="relative pl-8 space-y-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-bg-tinted">
                  {[
                    { day: "Day 0", text: "Verbal agreement on site meeting." },
                    { day: "Day 3", text: "PM remembers to write up the draft." },
                    { day: "Day 7", text: "Email sent with PDF attachment." },
                    { day: "Day 14", text: "Follow-up email (no response)." },
                    { day: "Day 23", text: "\"Yeah I'll sign it tomorrow\" on call." },
                    { day: "Day 35", text: "Client disputes scope during walk-through." }
                  ].map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-border-strong border-2 border-white" />
                      <div className="font-mono text-xs font-bold text-text-tertiary mb-1">{step.day}</div>
                      <div className="text-text-secondary">{step.text}</div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right Column - ClientFlow Way */}
            <div className="space-y-10">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-soft flex items-center justify-center text-amber-base">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl">The ClientFlow Way</h3>
               </div>
               
               <div className="relative pl-8 space-y-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-amber-soft">
                  {[
                    { time: "9:42 AM", text: "Site supervisor logs event from phone." },
                    { time: "9:51 AM", text: "AI draft created (cost, time, clause)." },
                    { time: "10:03 AM", text: "Sent via SMS magic-link." },
                    { time: "14:20 PM", text: "Client approves and e-signs from mobile." },
                    { time: "14:21 PM", text: "Signed PDF generated & audit locked." },
                    { time: "14:22 PM", text: "Pushed to Buildxact automatically." }
                  ].map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-amber-base border-2 border-white" />
                      <div className="font-mono text-xs font-bold text-amber-dark mb-1">{step.time}</div>
                      <div className="text-text-primary font-medium">{step.text}</div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="bg-bg-tinted py-32 px-6 border-y border-border-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                icon: Send, 
                title: '1. Multi-Channel Delivery', 
                text: 'Your client doesn\'t live in email. SiteForge delivers via whichever channel gets the fastest response — SMS, Teams, or Email — and tracks which one is most effective for each client.' 
              },
              { 
                icon: Key, 
                title: '2. Magic-Link Auth', 
                text: 'No passwords or account creation. Clients receive a single-use authenticated link. They click, they read, they sign. IP, browser, and timestamp logged instantly.' 
              },
              { 
                icon: Sparkles, 
                title: '3. AI Draft Assistance', 
                text: 'Type three lines into the site diary. SiteForge drafts the full variation: plain-English summary, recommended cost cross-referenced with your rates, and relevant contract clauses.' 
              },
              { 
                icon: ShieldCheck, 
                title: '4. Hash-Chained Audit Trail', 
                text: 'Every event — sent, viewed, signed — produces a tamper-evident record. SHA-256 hashed and chain-linked. If an approval is ever disputed, you have defensible legal evidence.' 
              },
              { 
                icon: Zap, 
                title: '5. Stalled Approval Escalation', 
                text: 'If a client hasn\'t responded, SiteForge auto-escalates. First a reminder, then PM notification, then Director alert. You set the thresholds; the system runs the follow-up.' 
              },
              { 
                icon: LayoutTemplate, 
                title: '6. Approval Bundles', 
                text: 'Foundation issue triggers a variation, an EOT, and a scope change? Bundle them into one portal session. Client reviews all three, signs once. Clean record, zero confusion.' 
              },
              { 
                icon: CheckCircle2, 
                title: '7. Bulk Issue', 
                text: 'Friday afternoon with eight variations across five clients? Bulk select, one confirmation modal, eight sends with one click. Every individual approval tracked from there.' 
              },
              { 
                icon: LineChart, 
                title: '8. Recovery Analytics', 
                text: 'Know exactly which clients are slow to respond and how much money is sitting in your pending pipeline. Track time from site event to signed approval trending month over month.' 
              },
              { 
                icon: RefreshCcw, 
                title: '9. Buildxact Push on Sign', 
                text: 'The moment a client signs, ClientFlow pushes the variation to Buildxact with cost, time impact, and the signed PDF. Zero double-entry. Ready for invoicing immediately.' 
              }
            ].map((f, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-card border border-border-light shadow-sm"
              >
                <div className="w-10 h-10 bg-amber-soft rounded-lg flex items-center justify-center mb-6">
                  <f.icon className="w-5 h-5 text-amber-base" />
                </div>
                <h4 className="text-lg font-bold text-text-primary mb-3">{f.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto border-l-4 border-amber-base pl-8 md:pl-16 space-y-10">
          <div className="space-y-4">
             <span className="text-amber-base font-bold text-xs uppercase tracking-widest">Compliance Defensibility</span>
             <h2 className="text-4xl font-extrabold tracking-tightest">Engineered for the AU Courtroom.</h2>
          </div>
          <p className="text-lg text-text-secondary leading-relaxed">
            Every signed approval through ClientFlow is an executed electronic contract under the <span className="text-text-primary font-bold">Electronic Transactions Act 1999 (Cth)</span>. When the QBCC or a solicitor asks for evidence, you don't hunt through emails — you export the full chain.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[11px] font-bold text-text-tertiary uppercase tracking-widest">
             <div className="flex items-center gap-2"><Check className="w-4 h-4 text-semantic-green" /> IP Logging</div>
             <div className="flex items-center gap-2"><Check className="w-4 h-4 text-semantic-green" /> Device Signature</div>
             <div className="flex items-center gap-2"><Check className="w-4 h-4 text-semantic-green" /> Millisecond Timestamps</div>
             <div className="flex items-center gap-2"><Check className="w-4 h-4 text-semantic-green" /> SHA-256 Hash</div>
             <div className="flex items-center gap-2"><Check className="w-4 h-4 text-semantic-green" /> 7-Year Retention</div>
             <div className="flex items-center gap-2"><Check className="w-4 h-4 text-semantic-green" /> Chain-Linked Logs</div>
          </div>
        </div>
      </section>

      {/* Buildxact Compare Strip */}
      <section className="bg-bg-dark py-24 px-6 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
           <div className="bg-white/5 border border-white/10 p-10 rounded-card space-y-6">
              <h4 className="text-white text-xl font-bold">vs "The Email Method"</h4>
              <ul className="space-y-4 text-sm text-text-inverse-muted">
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>14-day approval cycle</span> <span className="text-amber-bright font-bold">11.5 hour average</span></li>
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>No audit trail</span> <span className="text-amber-bright font-bold">Hash-chained evidence</span></li>
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Disputed variations</span> <span className="text-amber-bright font-bold">Defensible signed record</span></li>
              </ul>
           </div>
           <div className="bg-amber-base p-10 rounded-card space-y-6 text-white shadow-xl">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <RefreshCcw className="w-4 h-4 text-white" />
                 </div>
                 <h4 className="text-xl font-bold">Works with Buildxact</h4>
              </div>
              <p className="font-medium text-white/90">
                ClientFlow doesn't replace Buildxact's variation module — it gives it the operations layer it's missing. Your Buildxact workflow doesn't change. ClientFlow just makes the approval part of it actually work.
              </p>
              <div className="pt-2 text-xs font-bold uppercase tracking-widest opacity-80">Bidirectional Sync Enabled</div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center bg-bg-amber-soft border-t border-amber-base/10">
        <div className="max-w-3xl mx-auto space-y-8">
           <h2 className="text-4xl font-bold">Stop chasing signatures.</h2>
           <p className="lead-text">
             "If you have a variation right now that your client hasn't signed, we can show you how ClientFlow would have handled it in a 15-minute demo."
           </p>
           <Link to="/demo" className="btn-accent py-5 px-10 text-xl inline-flex">Show me the ClientFlow demo</Link>
        </div>
      </section>
    </div>
  );
}
