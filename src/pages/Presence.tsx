import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Users, 
  MapPin, 
  Clock, 
  ShieldAlert, 
  Scale, 
  Eye, 
  FileCheck,
  CheckCircle2,
  AlertCircle,
  FileText
} from "lucide-react";

export default function PresencePage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="eyebrow">PILLAR 3 OF 6 · PRESENCE VERIFICATION</div>
            <h1 className="text-balance text-text-primary">
              Presence Verification. <br/>
              <span className="text-amber-base">Disclosed. Compliant.</span> Defensible.
            </h1>
            <p className="lead-text">
              SiteForge Presence Verification gives you evidence of workforce attendance for payroll disputes, Fair Work compliance, and site documentation. It is disclosed-only and includes mandatory compliance gates under the NSW Workplace Surveillance Act 2005.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/demo" className="btn-primary px-8">Book a Demo</Link>
            </div>
          </div>
          
          <div className="relative">
             <div className="bg-bg-tinted rounded-card p-1 text-border-strong border border-border-light shadow-2xl relative overflow-hidden group">
                <div className="bg-white rounded-[10px] p-8 space-y-6">
                   <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                      <span>Attendance Record</span>
                      <span className="text-semantic-green">GPS Verified</span>
                   </div>
                   <div className="space-y-4">
                      {[
                        { name: "M. Hargraves", in: "07:02 AM", out: "16:45 PM", status: "Verified" },
                        { name: "S. O'Connell", in: "06:55 AM", out: "16:30 PM", status: "Verified" },
                        { name: "D. Smith", in: "07:15 AM", out: "17:00 PM", status: "Anomaly" }
                      ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-bg-tinted last:border-0">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-bg-tinted rounded-full flex items-center justify-center text-xs font-bold text-text-secondary">
                                 {row.name.charAt(0)}
                              </div>
                              <span className="text-sm font-bold text-text-primary">{row.name}</span>
                           </div>
                           <div className="flex gap-6 text-[11px] font-mono font-medium text-text-tertiary">
                              <span>IN: {row.in}</span>
                              <span>OUT: {row.out}</span>
                           </div>
                           <div className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${row.status === 'Verified' ? 'bg-semantic-green/10 text-semantic-green' : 'bg-amber-base/10 text-amber-base'}`}>
                              {row.status}
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Compliance Mandatory Bar */}
      <section className="bg-bg-amber-soft py-16 border-y border-amber-base/20">
         <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="shrink-0">
                  <Scale className="w-12 h-12 text-amber-base" />
               </div>
               <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-amber-dark">Mandatory Compliance Gate</h3>
                  <p className="text-amber-dark/80 font-medium leading-relaxed">
                     Before Presence Verification can be enabled on any site, you must issue written notice to all workers (14 days minimum). SiteForge locks activation until 14 days after the notice date is recorded. <span className="underline decoration-amber-base">Covert surveillance is a criminal offence. SiteForge does not support it.</span>
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 text-xs font-bold text-amber-dark uppercase tracking-widest">
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> 14-Day Notice Required</li>
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Written Notice Archiving</li>
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> NSW WSA 2005 Compliant</li>
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Worker Data Visibility</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Narrative Section - What it does / doesn't do */}
      <section className="py-32 px-6 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
               <div className="inline-flex items-center gap-2 text-semantic-green font-bold text-xs uppercase tracking-widest">
                  <Eye className="w-4 h-4" /> What it actually does
               </div>
               <h2 className="text-3xl font-bold">Evidence for payroll disputes.</h2>
               <p className="text-text-secondary leading-relaxed text-lg">
                  Once activated with proper disclosure, Presence Verification compares site scan-in/out events against scheduled shifts, flags anomalies with a confidence score, and produces payroll-ready evidence reports.
               </p>
               <div className="bg-bg-tinted p-8 rounded-card border border-border-light space-y-6">
                  <h4 className="font-bold text-text-primary">The Payroll Dispute Scenario</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                     A worker claims they worked 47 hours. Your foreman has them at 38. The dispute goes to Fair Work. Your Presence Verification export shows scan-in/out timestamps and GPS confirmation. Not your word against theirs. A defensible, timestamped, hash-chained record.
                  </p>
               </div>
            </div>

            <div className="space-y-8">
               <div className="inline-flex items-center gap-2 text-amber-base font-bold text-xs uppercase tracking-widest">
                  <ShieldAlert className="w-4 h-4" /> What it doesn't do
               </div>
               <h2 className="text-3xl font-bold">Privacy-first monitoring.</h2>
               <p className="text-text-secondary leading-relaxed text-lg">
                  We believe in defensible evidence, not constant tracking. Presence Verification is built with strict boundary logic to protect worker privacy.
               </p>
               <ul className="space-y-6">
                  {[
                    "Does not run in the background when phone is off-site.",
                    "Does not track continuous location data.",
                    "Does not access data other than site scan events.",
                    "Cannot be activated without 14-day notice."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                       <AlertCircle className="w-5 h-5 text-amber-base shrink-0 mt-0.5" />
                       <span className="font-bold text-text-primary">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-bg-dark py-32 px-6 text-white border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { icon: Clock, title: 'Shift Matching', desc: 'Auto-compares scan events against your project schedule. PMs only see the anomalies.' },
                  { icon: MapPin, title: 'GPS Verification', desc: 'Every scan records coordinates. Verified against the geofence boundary of your site address.' },
                  { icon: FileCheck, title: 'Fair Work Ready', desc: 'Export evidence packs that meet Fair Work record-keeping standards for pay disputes.' },
                  { icon: FileText, title: 'Disclosure Logs', desc: 'We archive the exact notice your workers received and when. Full compliance trail.' },
                  { icon: Users, title: 'Worker Self-Service', desc: 'Workers can see their own attendance logs in real-time. Transparency reduces disputes.' },
                  { icon: ShieldAlert, title: 'System-Locked Notice', desc: 'The 14-day gap is hard-coded. You cannot bypass the notification period.' }
               ].map((f, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-card space-y-6">
                     <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-lg">
                        <f.icon className="w-5 h-5 text-amber-bright" />
                     </div>
                     <h4 className="text-xl font-bold">{f.title}</h4>
                     <p className="text-sm text-text-inverse-muted leading-relaxed">{f.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border-light text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
           <h2 className="text-4xl font-bold">Defensible attendance evidence.</h2>
           <p className="lead-text">Set up your compliance gates and start building a defensible record today.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo" className="btn-primary py-4 px-10 text-lg">Book a Presence Demo</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
