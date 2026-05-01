import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Database, 
  ArrowRightLeft, 
  Search, 
  Sparkles, 
  History,
  FileText,
  AlertTriangle,
  ClipboardList,
  CloudRain
} from "lucide-react";

export default function CommercialEnginePage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="eyebrow">PILLAR 4 OF 6 · FIELD TO COMMERCIAL</div>
            <h1 className="text-balance text-text-primary">
              Every site event is a <br/>
              <span className="text-amber-base">commercial event.</span>
            </h1>
            <p className="lead-text">
              Most builders recover less than half of what they're entitled to. The Field-to-Commercial Engine maps every site event — rain, delays, RFI responses — directly to the approval type it justifies. Sent to ClientFlow. Signed before the concrete's poured.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/demo" className="btn-primary px-8">Book a Demo</Link>
            </div>
          </div>
          
          <div className="relative">
             <div className="bg-bg-tinted rounded-card p-1 border border-border-light shadow-2xl overflow-hidden">
                <div className="bg-bg-dark p-6 text-white space-y-4">
                   <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-text-inverse-muted">
                      <span>Engine Daily Sweep</span>
                      <span className="bg-amber-base text-white px-2 py-0.5 rounded">3 NEW TRIGGERS</span>
                   </div>
                   <div className="space-y-3">
                      {[
                        { event: "Rain (35mm) detected", type: "Diary → EOT", action: "Draft Notice" },
                        { event: "RFI-042 Scope change", type: "RFI → Variation", action: "Draft variation" },
                        { event: "Procurement Delay", type: "Procurement → EOT", action: "Review" }
                      ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between bg-white/5 p-3 rounded border border-white/10">
                           <div className="space-y-1">
                              <div className="text-[11px] font-bold text-white">{row.event}</div>
                              <div className="text-[9px] font-medium text-text-inverse-muted">{row.type}</div>
                           </div>
                           <div className="text-[10px] font-black uppercase text-amber-bright cursor-pointer hover:underline">{row.action}</div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Narrative: The Money You're Not Recovering */}
      <section className="bg-white py-32 px-6 overflow-hidden">
         <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
               <span className="text-amber-base font-bold text-xs uppercase tracking-widest">The Recoverable Gap</span>
               <h2 className="text-4xl font-extrabold tracking-tightest">The money you're not recovering.</h2>
            </div>
            <div className="space-y-8 text-lg text-text-secondary leading-relaxed">
               <p>
                 We ran an analysis across our pilot builders. In the 90 days before they started using SiteForge, the average builder had <span className="text-text-primary font-bold">7 rain days</span> recorded in diaries with no linked EOT claim, and <span className="text-text-primary font-bold">4 problems</span> with a recorded cost impact and no linked variation.
               </p>
               <p>
                 That's not because the builder forgot. It's because the event lived in one system (diary, RFI log) and the recovery lived in another. SiteForge runs a daily sweep across all active sites. Every event with a commercial trigger that hasn't generated an approval gets flagged. Nothing falls through.
               </p>
            </div>
         </div>
      </section>

      {/* The 10 Chains */}
      <section className="bg-bg-dark py-32 px-6 border-y border-white/10 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-white text-2xl font-bold mb-12 uppercase tracking-tightest">THE 10 COMMERCIAL CHAINS</h3>
            <div className="overflow-x-auto">
               <table className="w-full text-left min-w-[600px]">
                  <thead>
                     <tr className="text-[10px] font-bold text-text-inverse-muted uppercase tracking-[0.2em] border-b border-white/10 pb-4">
                        <th className="py-4">SITE EVENT</th>
                        <th className="py-4">→ CHAIN</th>
                        <th className="py-4">→ APPROVAL CREATED</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-medium text-white/90">
                     {[
                        { event: "Diary entry (cost impact)", chain: "Diary → Variation", approval: "Variation Notice" },
                        { event: "Rain recorded in diary", chain: "Diary → Rain Day", approval: "EOT — Inclement Weather" },
                        { event: "Open problem (cost)", chain: "Problem → Variation", approval: "Variation Notice" },
                        { event: "Problem causing delay", chain: "Problem → Delay", approval: "Delay Notice" },
                        { event: "RFI response (scope)", chain: "RFI → Variation", approval: "Scope Clarification" },
                        { event: "RFI response (time)", chain: "RFI → EOT", approval: "Extension of Time" },
                        { event: "Procurement flagged late", chain: "Procurement → EOT", approval: "Delay Notice" },
                        { event: "Safety incident (stop-work)", chain: "Safety → Delay", approval: "Delay Notice" },
                        { event: "Drawing revision", chain: "Drawing → Variation", approval: "Scope Variation" },
                        { event: "Forecast rain (30mm+)", chain: "Weather → Pre-emptive", approval: "Draft EOT (queued)" }
                     ].map((row, i) => (
                        <tr key={i} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                           <td className="py-5 font-bold">{row.event}</td>
                           <td className="py-5 text-text-inverse-muted font-mono text-xs">{row.chain}</td>
                           <td className="py-5 text-amber-bright uppercase font-black text-xs tracking-wider">{row.approval}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <div className="mt-12 p-8 border border-white/10 bg-white/5 rounded-card flex flex-col md:flex-row gap-8 items-center">
               <div className="shrink-0 w-12 h-12 bg-amber-base/20 rounded-lg flex items-center justify-center">
                  <CloudRain className="w-6 h-6 text-amber-bright" />
               </div>
               <p className="text-text-inverse-muted text-sm leading-relaxed">
                  <span className="text-white font-bold">Proactive EOTs.</span> When heavy rain is forecast on a critical-path day, SiteForge drafts the EOT before the rain falls. You review it. If it rains: one click to send. If it doesn't: discard. Either way, you didn't spend Tuesday afternoon drafting a notice.
               </p>
            </div>
         </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-6 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            {[
               { icon: Search, title: 'Event Auditing', desc: 'Our engine parses every diary entry and RFI update. It looks for commercial keywords that justify recovery.' },
               { icon: Sparkles, title: 'AI-Guided Drafting', desc: 'AI maps the site event to the correct contract clause and drafted recovery text. You just verify the numbers.' },
               { icon: ArrowRightLeft, title: 'Bidirectional Mapping', desc: 'Links the site data to Buildxact cost codes instantly. No manual lookups.' },
               { icon: History, title: 'Audit Trail Locking', desc: 'Every drafted notice is linked back to the original site event that triggered it. Perfect defense.' },
               { icon: ClipboardList, title: 'Pipeline Dashboard', desc: 'See your total potential recovery value across every site. Prioritise the big wins.' },
               { icon: AlertTriangle, title: 'Risk Notifications', desc: 'Alerts you if a project has gone 7 days without a commercial recovery sweep.' }
            ].map((f, i) => (
               <div key={i} className="space-y-4">
                  <div className="w-10 h-10 bg-bg-tinted flex items-center justify-center rounded-lg">
                     <f.icon className="w-5 h-5 text-text-primary" />
                  </div>
                  <h4 className="text-lg font-extrabold text-text-primary">{f.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border-light text-center bg-bg-tinted">
        <div className="max-w-3xl mx-auto space-y-8">
           <h2 className="text-4xl font-bold">Never miss a claim again.</h2>
           <p className="lead-text">Turn your site events into commercial recovery with the SiteForge Engine.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo" className="btn-primary py-4 px-10 text-lg">Book an Engine Demo</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
