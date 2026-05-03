import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  QrCode, 
  UserCheck, 
  ShieldAlert, 
  Ticket, 
  FileText, 
  Camera, 
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  ArrowRight
} from "lucide-react";

import ScannerDemo from "../components/ScannerDemo";

export default function SitePassportPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="eyebrow">PILLAR 2 OF 6 · SITE PASSPORT</div>
            <h1 className="text-balance text-text-primary">
              Who's on your site right now? <br/>
              <span className="text-amber-base">Are they inducted?</span> Are their tickets current?
            </h1>
            <p className="lead-text">
              Site Passport is the QR-based access management system that answers all three questions — in real time, from your phone. Induction, tickets, SWMS, COI, daily briefing acknowledgement — all tracked, all auditable, all defensible.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/demo" className="btn-primary px-8">Book a Demo</Link>
            </div>
          </div>
          
          <div className="relative aspect-square">
             <div className="absolute inset-0 bg-bg-dark rounded-card overflow-hidden shadow-2xl relative group">
                <ScannerDemo />
                <div className="absolute top-4 right-4 bg-semantic-green text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 z-30 pointer-events-none">
                   <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                   LIVE SITE GATE
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Stories */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Real QR Scanning */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-6">
                <div className="w-12 h-12 bg-amber-soft rounded-lg flex items-center justify-center">
                   <Camera className="w-6 h-6 text-amber-base" />
                </div>
                <h2 className="text-3xl font-bold">Real QR Scanning. No Mockups.</h2>
                <p className="text-text-secondary leading-relaxed">
                  Point a phone at the QR code on the gate. The camera recognises it. In under two seconds: induction status, white card currency, any active blocks. Green card on screen: access granted. Red card: reason shown. Every scan logged.
                </p>
                <div className="text-[11px] font-mono text-text-tertiary italic">
                  *Not a mock. Not a "simulation". Real camera, real BarcodeDetector API, real result.*
                </div>
             </div>
             <div className="bg-bg-tinted rounded-card p-8 border border-border-light relative">
                <div className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-4">
                   <div className="w-12 h-12 bg-semantic-green/10 rounded-full flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-semantic-green" />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-text-primary">Induction Validated</p>
                      <p className="text-xs text-text-tertiary font-mono">ID: PASSPORT-992-X</p>
                   </div>
                   <div className="ml-auto text-semantic-green font-bold text-sm tracking-tighter">ACCESS GRANTED</div>
                </div>
             </div>
          </div>

          {/* Induction Wizard */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="lg:order-2 space-y-6">
                <div className="w-12 h-12 bg-amber-soft rounded-lg flex items-center justify-center">
                   <Smartphone className="w-6 h-6 text-amber-base" />
                </div>
                <h2 className="text-3xl font-bold">The Induction Wizard.</h2>
                <p className="text-text-secondary leading-relaxed">
                  A new worker arrives. They open the wizard on their phone, read the site rules, watch the 90-second safety video, pass a short quiz, and type their name to sign. Signed PDF generated. You can prove in court that this specific worker completed your site induction.
                </p>
             </div>
             <div className="relative">
                <div className="bg-bg-dark rounded-card p-10 text-white space-y-6 shadow-xl">
                   <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-xs font-bold uppercase tracking-widest text-text-inverse-muted">Module 4 / 6</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-bright">Video Safety Briefing</span>
                   </div>
                   <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                         <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                      </div>
                   </div>
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-base w-2/3" />
                   </div>
                   <p className="text-xs text-text-inverse-muted text-center italic">"I acknowledge the site exclusion zones and overhead hazard points."</p>
                </div>
             </div>
          </div>

          {/* Ticket Expiry */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-6">
                <div className="w-12 h-12 bg-amber-soft rounded-lg flex items-center justify-center">
                   <ShieldAlert className="w-6 h-6 text-amber-base" />
                </div>
                <h2 className="text-3xl font-bold">Ticket Expiry Auto-Block.</h2>
                <p className="text-text-secondary leading-relaxed">
                  The White Card or Working at Heights ticket expired last Thursday? Site Passport flags it instantly. The scan returns red, and the worker is directed to reception. No liability. No guesswork.
                </p>
             </div>
             <div className="bg-semantic-red/5 border border-semantic-red/20 rounded-card p-10 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-semantic-red/10 rotate-45 translate-x-12 -translate-y-12" />
                <div className="flex items-start gap-4">
                   <AlertTriangle className="w-12 h-12 text-semantic-red shrink-0" />
                   <div className="space-y-2">
                      <h4 className="text-semantic-red font-extrabold text-xl">ACCESS BLOCKED</h4>
                      <p className="text-sm font-medium text-text-primary">License: High Risk Work (WP)</p>
                      <p className="text-xs text-text-tertiary">Expired: 14 Days Ago</p>
                   </div>
                </div>
                <div className="mt-8 pt-8 border-t border-semantic-red/10">
                   <div className="flex items-center gap-2 text-xs font-bold text-text-tertiary uppercase tracking-widest">
                      <CheckCircle2 className="w-4 h-4 text-text-tertiary opacity-30" />
                      Automatic Compliance Lock Engaged
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Visitor Section */}
      <section className="bg-bg-tinted py-32 px-6">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            {[
               { icon: Ticket, title: 'Visitor Day Pass', desc: 'Council inspectors or clients arrive unannounced? Name, phone, 90-second safety video, day-limited QR issued. Access logged.' },
               { icon: FileText, title: 'COI Auto-Block', desc: 'Subbie\'s public liability expired? Site Passport auto-blocks until a validated COI is uploaded. No bypass without documented override.' },
               { icon: ShieldAlert, title: 'Compliance Archiving', desc: 'QBCC audit? Export the full site record. Proof of current licenses and inductions for every person on every site day.' }
            ].map((f, i) => (
               <div key={i} className="bg-white p-10 rounded-card border border-border-light shadow-sm space-y-6">
                  <div className="w-10 h-10 bg-bg-primary rounded-lg flex items-center justify-center">
                     <f.icon className="w-5 h-5 text-text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">{f.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border-light text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
           <h2 className="text-4xl font-bold">Know who's on your gate.</h2>
           <p className="lead-text">Control site access, inductions, and compliance from your phone today.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo" className="btn-primary py-4 px-10 text-lg">Book a Site Passport Demo</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
