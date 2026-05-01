import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Smartphone, 
  Sparkles, 
  Send, 
  Check, 
  Cable, 
  ShieldCheck, 
  Gauge, 
  FileCheck,
  CheckCircle2,
  Clock,
  Briefcase,
  Users
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Homepage() {
  return (
    <div className="w-full relative">
      {/* 1. ANNOUNCEMENT BAR (Optional, built into header logic or separate) */}
      
      {/* 2. HERO */}
      <section className="relative px-0 overflow-hidden border-b border-border-light flex flex-col lg:flex-row min-h-[85vh]">
        <div className="flex-1 lg:w-[55%] pt-40 pb-24 px-6 md:px-12 lg:px-20 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="eyebrow">Operations layer for AU builders</span>
              <h1 className="text-text-primary text-balance mb-4">
                Turn site events into signed approvals — <br/>
                <span className="text-amber-base">in hours, not weeks.</span>
              </h1>
            </div>
            <p className="lead-text max-w-xl">
              The operations layer that sits next to Buildxact. Close the gap between site events and signed variations. Built for AU residential construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/demo" className="btn-primary">
                Book 15-min Demo
              </Link>
              <Link to="/product/clientflow" className="btn-secondary group">
                Explore Product <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Metric Bar embedded into split column */}
            <div className="grid grid-cols-2 gap-8 border-t border-border-light pt-8 mt-12">
              <div>
                <div className="text-3xl font-mono font-bold text-text-primary">11h 30m</div>
                <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">Avg. Approval Time</div>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold text-amber-base">40+</div>
                <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">AU Builders Onboarded</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:w-[45%] bg-bg-tinted border-l border-border-light relative p-12 overflow-hidden flex flex-col justify-center min-h-[500px]">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-bg-dark) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-full flex flex-col justify-center items-center"
          >
            {/* Card 1: Event Logged */}
            <div className="w-72 bg-white rounded-xl border border-border-light p-5 shadow-sm transform -rotate-3 lg:-translate-x-12 lg:translate-y-8 z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 rounded-full bg-bg-primary flex items-center justify-center text-amber-base">✓</div>
                <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">LOGGED 09:42AM</div>
              </div>
              <div className="text-sm font-bold mb-1 text-text-primary">Water Ingress - West Footing</div>
              <div className="text-xs text-text-tertiary">Supervisor: Dave S.</div>
            </div>

            {/* Card 2: Variation Draft */}
            <div className="w-80 bg-white rounded-xl border border-border-light p-6 shadow-md z-20 relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-semantic-red"></div>
                <div className="w-2 h-2 rounded-full bg-amber-base"></div>
                <div className="w-2 h-2 rounded-full bg-semantic-green"></div>
              </div>
              <div className="text-[11px] font-bold text-amber-base mb-1 uppercase tracking-wider">Variation Draft VO-007</div>
              <div className="text-lg font-bold mb-4 tracking-tight text-text-primary">$4,500.00 EXC. GST</div>
              <div className="h-1 w-full bg-bg-tinted rounded-full mb-2"></div>
              <div className="h-1 w-3/4 bg-bg-tinted rounded-full mb-6"></div>
              <div className="flex justify-between items-center">
                 <div className="text-[10px] text-text-tertiary">Auto-checked vs AS4000</div>
                 <div className="bg-bg-dark text-white text-[10px] px-3 py-1 rounded">Preview</div>
              </div>
            </div>

            {/* Card 3: Signed & Synced */}
            <div className="w-72 bg-bg-dark text-white rounded-xl p-5 shadow-xl transform rotate-3 lg:translate-x-12 lg:-translate-y-8 z-30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full bg-semantic-green flex items-center justify-center text-[10px] font-bold">✓</div>
                <div className="text-xs font-bold">Client Approved</div>
              </div>
              <div className="text-[10px] text-white/50 font-mono mb-4">HASH: SHA256_99X21F...</div>
              <div className="flex items-center gap-2 text-[10px] py-2 border-t border-white/10">
                <div className="w-4 h-4 bg-amber-bright rounded-sm"></div>
                Pushed to Buildxact Sync Queue
              </div>
            </div>

            {/* Buildxact Logo Indicator */}
            <div className="absolute bottom-0 right-0 flex items-center gap-2">
              <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Connected to</div>
              <div className="px-3 py-1 border border-border-strong rounded bg-white text-[12px] font-black italic tracking-tighter text-text-primary uppercase">BUILDXACT</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. LOGO BAR */}
      <section className="bg-white border-y border-border-light py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <p className="text-xs font-bold text-text-tertiary uppercase tracking-[0.15em] mb-10 text-center">
            Trusted by 40+ residential builders across AU
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale transition-all hover:grayscale-0">
            {['Hargraves', 'Skyline', 'Foundation', 'Heritage', 'Westside'].map(name => (
              <div key={name} className="flex items-center gap-2 text-2xl font-bold tracking-tightest font-sans text-text-primary">
                <div className="w-6 h-6 border-2 border-current rounded-sm opacity-20" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE PROBLEM FRAME */}
      <section className="bg-bg-tinted py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow">The gap in your stack</span>
            <h2 className="mb-6">Buildxact is great at cost. It wasn't built for what happens between cost events.</h2>
            <p className="text-text-secondary text-lg">
              Estimating is one thing. Variations are another. SiteForge bridges the gap between field reality and financial reporting.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-card border border-border-light shadow-sm">
              <h3 className="text-xl mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-semantic-green rounded-full" />
                What Buildxact handles
              </h3>
              <ul className="space-y-5">
                {[
                  'Estimating and detailed quoting',
                  'Job costing and budgets',
                  'Supplier rate cards and POs',
                  'Cost-to-budget tracking',
                  'Progress claims'
                ].map(item => (
                  <li key={item} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-semantic-green shrink-0 mt-0.5" />
                    <span className="text-text-secondary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-card border border-border-light shadow-sm transition-all hover:border-amber-base/30">
              <h3 className="text-xl mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-amber-base rounded-full" />
                What gets missed
              </h3>
              <ul className="space-y-5">
                {[
                  'Variations that take 14 days to sign',
                  'Rain events that never become EOTs',
                  'Site issues that aren\'t recovered',
                  'Missing audit trails on site access',
                  'Subbie compliance gaps'
                ].map(item => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-base/20 border border-amber-base/50" />
                    </div>
                    <span className="text-text-secondary font-medium italic">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FIVE-STEP JOURNEY */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <span className="eyebrow">The SiteForge Journey</span>
             <h2 className="mb-4">From site issue to signed approval in 11 hours.</h2>
             <p className="lead-text max-w-2xl">Traditional workflows take 2 weeks of emails. We bring it down all the way.</p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-bg-tinted -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4">
              {[
                { icon: Smartphone, title: 'Capture', desc: 'Site supervisor logs the site issue in 30 seconds. 09:42 AM.' },
                { icon: Sparkles, title: 'Draft', desc: 'AI drafts the variation with Clause 40 compliance. 10:15 AM.' },
                { icon: Send, title: 'Deliver', desc: 'Sent via SMS / Email with secure magic-link. 11:30 AM.' },
                { icon: Check, title: 'Approve', desc: 'Client signs via mobile. Hash-chained. 14:00 PM.' },
                { icon: Cable, title: 'Sync', desc: 'Pushed to Buildxact for recovery instantly. 14:05 PM.' }
              ].map((step, i) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-20 h-20 bg-white border-4 border-bg-primary rounded-full flex items-center justify-center shadow-md relative z-10 group hover:border-amber-base transition-colors overflow-hidden">
                    <step.icon className="w-8 h-8 text-amber-base group-hover:scale-110 transition-transform" />
                    <div className="absolute top-0 right-0 w-6 h-6 bg-amber-soft text-amber-dark text-[10px] font-bold flex items-center justify-center border-b border-l border-amber-base/20">
                      {(i+1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-text-primary text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 p-12 bg-bg-dark rounded-card text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-base/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative z-10">
              <div className="text-[56px] font-mono font-bold text-amber-bright leading-none mb-2 tracking-tightest">11h 30m</div>
              <p className="text-text-inverse-muted font-medium text-lg">Average time from site event to signed approval.</p>
            </div>
            <div className="h-px w-20 bg-white/20 hidden md:block" />
            <div className="relative z-10 text-right">
              <div className="text-[40px] font-mono font-bold text-white/40 leading-none mb-2">14 Days</div>
              <p className="text-text-inverse-muted text-sm uppercase tracking-widest font-bold">Industry Average</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PILLAR INTRO */}
      {/* 7. SIX PRODUCT PILLARS */}
      <section className="bg-bg-dark py-32 px-6 text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <span className="text-amber-bright text-[12px] font-bold uppercase tracking-[0.2em] mb-4 block">The Operations Pillars</span>
            <h2 className="text-text-inverse mb-6">Operations infrastructure built for residential construction.</h2>
            <p className="text-text-inverse-muted text-lg">
              Six interlocking systems. Each handles one critical part of project site operations Buildxact doesn't touch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'ClientFlow', 
                desc: 'Approval pipeline with multi-channel delivery, e-sign, and SHA-256 audit trails.',
                href: '/product/clientflow',
                icon: RefreshCcwIcon
              },
              { 
                title: 'Site Passport', 
                desc: 'QR-based site access tracking, inductions, ticket management, and compliance blocking.',
                href: '/product/site-passport',
                icon: Briefcase
              },
              { 
                title: 'Presence Verification', 
                desc: 'NSW WSA 2005 compliance gates for attendance. Defensible evidence for payroll.',
                href: '/product/presence',
                icon: Users
              },
              { 
                title: 'Commercial Engine', 
                desc: 'Ten field-to-recovery chains. Automatically detects events that should be variations.',
                href: '/product/engine',
                icon: Gauge
              },
              { 
                title: 'Teams Action Layer', 
                desc: 'Manage your entire site from Microsoft Teams. Approve, query, and chat instantly.',
                href: '/product/teams',
                icon: Send
              },
              { 
                title: 'Buildxact Sync', 
                desc: 'Bidirectional connector. Projects flow in, signed variations and EOTs flow out.',
                href: '/product/buildxact-connector',
                icon: Cable
              }
            ].map((pillar, i) => (
              <motion.div 
                key={pillar.title}
                {...fadeInUp}
                transition={{ delay: i * 0.05 }}
                className="group bg-bg-dark-elev p-10 rounded-card border border-white/10 hover:border-amber-base/50 transition-all flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-amber-base group-hover:h-full transition-all duration-500" />
                <div className="mb-10 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-amber-base/10 transition-colors">
                  {pillar.icon ? <pillar.icon className="w-6 h-6 text-amber-bright" /> : <div className="w-6 h-6 border-2 border-amber-bright/30 rounded-sm" />}
                </div>
                <h3 className="text-xl text-white mb-4">{pillar.title}</h3>
                <p className="text-text-inverse-muted text-sm leading-relaxed mb-10 flex-grow">
                  {pillar.desc}
                </p>
                <Link to={pillar.href} className="text-amber-bright font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                  Explore Pillar <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BUILDXACT RIBBON */}
      <section className="bg-bg-amber-soft py-20 px-6 border-b border-border-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-base/20" />
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0">
             <div className="w-24 h-24 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 border border-amber-base/10">
                <span className="font-bold text-text-primary text-xs text-center leading-tight">BUILDXACT<br/>SYNC</span>
             </div>
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold">We don't replace Buildxact. We complete it.</h2>
            <p className="text-text-secondary font-medium leading-relaxed mb-6">
              Already using Buildxact? Good. Keep it. SiteForge connects seamlessly to projects, cost codes, and invoicing, handling the operations workflow that Buildxact wasn't built for.
            </p>
            <Link to="/buildxact" className="text-amber-dark font-bold flex items-center gap-2 hover:underline">
              Learn about the integration <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS / PROOF */}
      {/* 10. SEO / SECONDARY HERO */}
      {/* 11. FAQ (Condensed) */}
      
      {/* 12. CLOSING CTA */}
      <section className="bg-bg-dark py-40 px-6 text-center border-b border-border-dark relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[40%] h-[120%] bg-amber-base blur-[160px] opacity-20 -rotate-12" />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-text-inverse text-[40px] md:text-[56px] leading-tight">Ready to reclaim your cash flow?</h2>
            <p className="text-text-inverse-muted text-xl max-w-2xl mx-auto">
              Book a 15-minute demo. We'll show you how to cut variation approval time by 90% and reclaim your team's focus.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/demo" className="bg-white text-bg-dark px-10 py-5 rounded-btn font-extrabold text-xl hover:bg-gray-100 transition-colors shadow-xl">
              Book a 15-min demo
            </Link>
            <Link to="/pilot" className="bg-transparent border border-white/20 text-white px-10 py-5 rounded-btn font-bold text-xl hover:bg-white/5 transition-colors">
              Request Pilot &rsaquo;
            </Link>
          </div>
          <div className="pt-10 flex flex-col items-center gap-3">
             <div className="flex gap-1 text-amber-bright">
                {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} className="w-4 h-4 fill-current" />)}
             </div>
             <p className="text-xs uppercase tracking-[0.2em] font-bold text-text-inverse-muted">98% customer satisfaction rate</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function RefreshCcwIcon(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  )
}
