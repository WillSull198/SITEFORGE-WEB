import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  RefreshCcw, 
  ArrowRightLeft, 
  CheckCircle2, 
  Database, 
  Layers, 
  Sparkles,
  Link2,
  FileCheck,
  Zap,
  ArrowRight
} from "lucide-react";

export default function BuildxactConnectorPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="eyebrow">PILLAR 6 OF 6 · BUILDXACT CONNECTOR</div>
            <h1 className="text-balance text-text-primary">
              You've used Buildxact for years. <br/>
              <span className="text-amber-base">SiteForge makes it complete.</span>
            </h1>
            <p className="lead-text">
              The Buildxact Connector is the integration that turns two separate workflows into one. Projects, clients, cost codes, and schedule milestones flow into SiteForge. Signed variations, EOTs, and contract documents flow back into Buildxact.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/demo" className="btn-primary px-8">Book a Demo</Link>
            </div>
          </div>
          
          <div className="relative">
             <div className="bg-bg-tinted rounded-card p-10 border border-border-light shadow-2xl relative overflow-hidden flex flex-col items-center justify-center gap-8">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--color-bg-dark) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                
                <div className="flex items-center gap-6 relative z-10 w-full justify-around">
                   <div className="bg-white p-6 rounded-card border border-border-light shadow-sm text-center space-y-2">
                      <div className="text-[12px] font-black italic tracking-tighter text-text-primary uppercase">BUILDXACT</div>
                      <div className="text-[10px] text-text-tertiary">ESTIMATING + FINANCE</div>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-amber-base rounded-full flex items-center justify-center shadow-lg">
                         <RefreshCcw className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-[9px] font-bold text-amber-base uppercase tracking-widest">Bi-directional</div>
                   </div>
                   <div className="bg-bg-dark p-6 rounded-card border border-white/10 shadow-sm text-center space-y-2">
                      <div className="text-[12px] font-bold text-white uppercase tracking-tighter">SITEFORGE</div>
                      <div className="text-[10px] text-text-inverse-muted uppercase">FIELD OPERATIONS</div>
                   </div>
                </div>
                
                <div className="w-full bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-border-light text-center">
                   <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-2">Sync Health</div>
                   <div className="flex justify-center gap-4">
                      <div className="flex items-center gap-1.5 text-xs text-semantic-green font-bold"><div className="w-2 h-2 rounded-full bg-semantic-green" /> Clients Synced</div>
                      <div className="flex items-center gap-1.5 text-xs text-semantic-green font-bold"><div className="w-2 h-2 rounded-full bg-semantic-green" /> Cost Codes LIVE</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-bg-dark py-32 px-6 overflow-hidden border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-center mb-20">The data flow diagram</h2>
            
            <div className="grid lg:grid-cols-2 gap-0 border border-white/10 rounded-card overflow-hidden">
               <div className="p-12 bg-white/5 space-y-8">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-text-inverse-muted mb-8">BUILDXACT → SITEFORGE</div>
                  {[
                    { label: "Projects", desc: "Active sites + context" },
                    { label: "Clients", desc: "Client profiles + portal auth" },
                    { label: "Cost codes", desc: "Auto-tag variations on draft" },
                    { label: "Schedule milestones", desc: "Context next to approvals" }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between group">
                       <span className="text-white font-bold text-lg">{row.label}</span>
                       <div className="flex-1 mx-8 border-b border-white/10 border-dashed" />
                       <span className="text-text-inverse-muted text-sm">{row.desc}</span>
                    </div>
                  ))}
               </div>
               <div className="p-12 bg-white/10 space-y-8 border-l border-white/10">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-amber-bright mb-8">SITEFORGE → BUILDXACT</div>
                  {[
                    { label: "Signed variations", desc: "Cost + days mapped to items" },
                    { label: "Signed EOTs", desc: "Schedule extensions pushed live" },
                    { label: "Signed contracts", desc: "PDFs attached to project records" },
                    { label: "Evidence record", desc: "Chain-linked logs stored in BX" }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between group">
                       <span className="text-amber-bright font-bold text-lg">{row.label}</span>
                       <div className="flex-1 mx-8 border-b border-amber-base/20 border-dashed" />
                       <span className="text-text-inverse-muted text-sm">{row.desc}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Feature Section: What won't change */}
      <section className="py-32 px-6 bg-white">
         <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-3xl font-bold text-center">What you won't see change.</h2>
            <div className="grid sm:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <div className="w-10 h-10 bg-bg-tinted rounded flex items-center justify-center">
                     <CheckCircle2 className="w-5 h-5 text-text-primary" />
                  </div>
                  <h4 className="text-lg font-bold">Your Buildxact flow stays same.</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">We don't get in the way. Your team keeps entering cost data and running finance in Buildxact exactly as they do now.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-10 h-10 bg-bg-tinted rounded flex items-center justify-center">
                     <CheckCircle2 className="w-5 h-5 text-text-primary" />
                  </div>
                  <h4 className="text-lg font-bold">Client Portals remain separate.</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">Buildxact handles selections and color boards. SiteForge handles operational approvals. They exist side-by-side.</p>
               </div>
            </div>
            <div className="bg-bg-amber-soft p-10 rounded-card border border-amber-base/10 shadow-sm text-center">
               <p className="text-lg text-amber-dark font-medium leading-relaxed">
                  "SiteForge fills the operational gap Buildxact wasn't designed for. Both systems keep doing what they're best at. Zero double-entry."
               </p>
            </div>
         </div>
      </section>

      {/* Sink Health UI Mockup */}
      <section className="py-32 px-6 bg-bg-tinted">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <h2 className="text-3xl font-bold">Real-time sync visibility.</h2>
               <p className="text-lg text-text-secondary leading-relaxed">
                  Never wonder if a variation made it back to the office. Our sync dashboard shows every push, every log, and every attachment status in real-time.
               </p>
               <Link to="/demo" className="inline-flex items-center gap-2 text-amber-base font-bold text-sm uppercase tracking-widest hover:translate-x-1 transition-transform">
                  Book a live sync demo <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
            <div className="bg-white border border-border-light rounded-card shadow-xl p-8 space-y-6">
               <div className="flex justify-between items-center border-b border-border-light pb-4">
                  <div>
                    <h4 className="font-bold text-text-primary">Buildxact Connector</h4>
                    <p className="text-xs text-text-tertiary">Status: ● Connected</p>
                  </div>
                  <div className="text-[10px] font-mono text-text-tertiary">Last sync: 4 minutes ago</div>
               </div>
               <div className="space-y-4">
                  {[
                    { event: "VO-007 pushed to Buildxact", time: "14:21", ok: true },
                    { event: "VO-006 variation signed", time: "11:03", ok: true },
                    { event: "A-101 Rev D — new drawing plan", time: "09:14", ok: true },
                    { event: "EOT-003 schedule extension synced", time: "Yesterday", ok: true }
                  ].map((log, i) => (
                    <div key={i} className="flex justify-between items-center text-xs font-medium">
                       <span className={log.ok ? 'text-text-primary' : 'text-text-tertiary'}>{log.event}</span>
                       <div className="flex items-center gap-2">
                          <span className="text-text-tertiary font-mono text-[10px]">{log.time}</span>
                          {log.ok && <CheckCircle2 className="w-3.5 h-3.5 text-semantic-green" />}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border-light text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
           <h2 className="text-4xl font-bold">One stack. Zero double-entry.</h2>
           <p className="lead-text">Bring your Buildxact account and SiteForge together today.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo" className="btn-primary py-4 px-10 text-lg">See the Buildxact Sync in Action</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
