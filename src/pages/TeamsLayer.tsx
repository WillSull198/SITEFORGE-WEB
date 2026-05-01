import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Share2, 
  Zap, 
  Smartphone, 
  Clock, 
  ShieldCheck,
  Check,
  X,
  HelpCircle
} from "lucide-react";

export default function TeamsLayerPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="eyebrow">PILLAR 5 OF 6 · TEAMS ACTION LAYER</div>
            <h1 className="text-balance text-text-primary">
              Your client lives in <br/>
              <span className="text-amber-base">Microsoft Teams.</span>
            </h1>
            <p className="lead-text">
              The Teams Action Layer puts SiteForge approvals directly into your client's Teams workspace as adaptive cards. Approve, decline, or question — without opening a browser. Cut response times by 60%.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/demo" className="btn-primary px-8">Book a Demo</Link>
            </div>
          </div>
          
          <div className="relative">
             <div className="bg-[#464EB8]/5 border border-[#464EB8]/20 rounded-card p-8 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                   <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.411 20.217c-.15 0-.29-.033-.424-.1l-7.794-3.896c-.341-.17-.557-.52-.557-.903V8.892c0-.383.216-.732.557-.902L10.987 4.1a.837.837 0 0 1 .848 0l7.794 3.89c.34.17.557.52.557.903v6.425c0 .383-.216.733-.557.903l-7.794 3.897c-.134.066-.273.1-.424.1zM5.148 15.006l6.263 3.13 6.264-3.13V9.613l-6.264-3.131-6.263 3.131v5.393zM14.654 11.5a.846.846 0 1 1 0-1.692.846.846 0 0 1 0 1.692zM11.269 14.885c-.93 0-1.692-.762-1.692-1.692s.762-1.692 1.692-1.692 1.692.762 1.692 1.692-.762 1.692-1.692 1.692z"/></svg>
                </div>
                
                {/* Teams Card Mockup */}
                <div className="bg-white border rounded-sm shadow-sm p-5 space-y-4 max-w-sm mx-auto relative z-10">
                   <div className="flex items-center gap-2 text-[#616161]">
                      <div className="w-5 h-5 bg-amber-base rounded-[2px] flex items-center justify-center text-white text-[10px] font-mono">S</div>
                      <span className="text-[10px] font-bold">SiteForge</span>
                   </div>
                   <div className="space-y-1">
                      <div className="text-[11px] font-extrabold text-text-primary uppercase tracking-tightest">VARIATION NOTICE — VO-007</div>
                      <div className="text-[10px] text-text-tertiary">Riverside Residence • Hargraves Family</div>
                   </div>
                   <div className="text-[10px] bg-bg-tinted p-3 rounded text-text-secondary leading-relaxed">
                      Additional waterproofing to west footing as instructed by engineer following water ingress.
                   </div>
                   <div className="grid grid-cols-2 gap-4 text-[11px]">
                      <div>
                         <div className="text-text-tertiary">Cost</div>
                         <div className="font-bold text-text-primary">$4,500 (inc. GST)</div>
                      </div>
                      <div>
                         <div className="text-text-tertiary">Time Impact</div>
                         <div className="font-bold text-text-primary">2 Days</div>
                      </div>
                   </div>
                   <div className="flex gap-2 pt-2">
                      <button className="flex-1 py-1.5 bg-[#464EB8] text-white text-[10px] font-bold rounded flex items-center justify-center gap-1 group">
                         <Check className="w-3 h-3" /> Approve
                      </button>
                      <button className="flex-1 py-1.5 border border-border-strong text-text-primary text-[10px] font-bold rounded flex items-center justify-center gap-1">
                         <X className="w-3 h-3" /> Decline
                      </button>
                      <button className="w-9 h-9 border border-border-strong text-text-primary rounded flex items-center justify-center">
                         <HelpCircle className="w-3 h-3" />
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-white py-32 px-6 overflow-hidden">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl font-extrabold tracking-tightest text-center">Aha! Moment.</h2>
            <p className="text-lg text-text-secondary leading-relaxed text-center">
              The card lands in the client's Teams. They read it. They hit Approve. A typed-name confirmation appears inline. They sign. The approval is hash-chained, the signed PDF is generated, and Buildxact receives the push. <span className="text-text-primary font-bold">The client never left Teams.</span>
            </p>
         </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-32 px-6 border-y border-border-light">
         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            {[
               { icon: MessageSquare, title: 'Adaptive Cards', desc: 'Real-time, interactive blocks that live inside your client\'s Teams chats. No external links to follow.' },
               { icon: Share2, title: 'Multi-Channel Logic', desc: 'If they don\'t respond in Teams, the layer automatically reverts to ClientFlow SMS as a fallback.' },
               { icon: Zap, title: 'Instant Execution', desc: 'Signatures captured directly in the Teams UI. Zero friction between agreement and execution.' },
               { icon: Smartphone, title: 'Mobile Teams Native', desc: 'Works perfectly on the Teams mobile app. Your client signs while they\'re in a coffee shop or airport.' },
               { icon: Clock, title: 'Real-time Alerts', desc: 'Your PMs get a notification the moment a card is viewed or interacted with. No more ghosting.' },
               { icon: ShieldCheck, title: 'Full Audit Trail', desc: 'Teams interactions are logged with the same hash-chain security as any other SiteForge approval.' }
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

      {/* Comparison section */}
      <section className="py-32 px-6 bg-bg-dark text-white overflow-hidden">
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <h2 className="text-text-inverse">Stop fighting the inbox.</h2>
               <p className="text-text-inverse-muted text-lg leading-relaxed">
                  For projects that run on Microsoft 365, the email inbox is where work goes to die. The Teams Action Layer brings the commercial recovery to where the communication is already happening.
               </p>
               <div className="py-4 border-l-2 border-amber-base pl-6 italic text-text-inverse-muted">
                  "Since moving client approvals to the Teams layer, our response time on variations dropped from 6 days to 90 minutes. It's just too easy for the client to hit approve."
               </div>
            </div>
            <div className="bg-white/5 p-10 rounded-card border border-white/10 space-y-6">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#464EB8] flex items-center justify-center">
                     <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-lg">Teams Efficiency Metrics</span>
               </div>
               <div className="space-y-4">
                  {[
                    { label: "Cycle Time reduction", value: "-60%" },
                    { label: "Client portal visits", value: "0" },
                    { label: "Phone follow-ups saved", value: "11 / month" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                       <span className="text-text-inverse-muted text-sm">{stat.label}</span>
                       <span className="text-amber-bright font-mono font-bold">{stat.value}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border-light text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
           <h2 className="text-4xl font-bold">Variations that move at the speed of chat.</h2>
           <p className="lead-text">Bring your Buildxact approvals into Microsoft Teams today.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo" className="btn-primary py-4 px-10 text-lg">Book a Teams Layer Demo</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
