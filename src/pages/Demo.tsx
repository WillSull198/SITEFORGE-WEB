import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Check, Send, Loader2, ArrowRight, ShieldCheck, Mail, Smartphone, Clock, Database } from "lucide-react";

export default function DemoPage() {
  const [step, setStep] = useState(1); // 1: Calendar, 2: Details, 3: Success
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(2);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  return (
    <div className="w-full bg-white">
      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Column - The Hook */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="eyebrow">BOOK A DEMO</div>
              <h1 className="text-5xl font-extrabold tracking-tightest leading-tight">What happens in <br/>15 minutes.</h1>
              <p className="lead-text">
                We don't show you slides. We don't read scripts. We show you your actual variation workflow being solved in real-time.
              </p>
            </div>

            <div className="space-y-8 relative pl-12 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-bg-tinted">
               {[
                 { 
                   time: "Min 1-2", 
                   title: "Workflow Mapping", 
                   desc: "We look at one of your active projects and map the workflows that apply specifically to your team size.",
                   icon: Database
                 },
                 { 
                   time: "Min 3-7", 
                   title: "Live End-to-End", 
                   desc: "We run a live variation from site diary log → AI draft → ClientFlow → Signed PDF result.",
                   icon: Smartphone
                 },
                 { 
                   time: "Min 8-12", 
                   title: "Buildxact Sync", 
                   desc: "We show you how it connects to your Buildxact account and how signed data pushes back instantly.",
                   icon: ShieldCheck
                 },
                 { 
                   time: "Min 13-15", 
                   title: "Your Questions", 
                   desc: "Total honesty. No hard closing. We'll tell you if we're not the right fit for your project scale.",
                   icon: Clock
                 }
               ].map((phase, i) => (
                 <div key={i} className="relative group">
                    <div className="absolute -left-[45px] top-1.5 w-7 h-7 rounded-full bg-white border border-border-light flex items-center justify-center text-text-tertiary">
                       <phase.icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="inline-block text-[10px] font-mono font-bold text-amber-base uppercase tracking-widest mb-1">{phase.time}</div>
                    <h4 className="font-bold text-text-primary mb-1">{phase.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{phase.desc}</p>
                 </div>
               ))}
            </div>

            <div className="bg-bg-tinted p-8 rounded-card border border-border-light space-y-6">
               <h4 className="font-bold text-text-primary uppercase tracking-widest text-[10px]">Trust Signals</h4>
               <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-text-secondary"><Check className="w-4 h-4 text-semantic-green" /> No Pitch Decks</div>
                  <div className="flex items-center gap-2 text-xs font-medium text-text-secondary"><Check className="w-4 h-4 text-semantic-green" /> Bring a Live Variation</div>
                  <div className="flex items-center gap-2 text-xs font-medium text-text-secondary"><Check className="w-4 h-4 text-semantic-green" /> No Hard Closing</div>
                  <div className="flex items-center gap-2 text-xs font-medium text-text-secondary"><Check className="w-4 h-4 text-semantic-green" /> 15m Fast-Track</div>
               </div>
            </div>
          </div>

          {/* Right Column - Booking Widget Mock */}
          <div className="relative">
             <div className="bg-bg-tinted rounded-card p-1 border border-border-light shadow-2xl relative overflow-hidden">
                <div className="bg-white rounded-[10px] p-10 h-full min-h-[600px] flex flex-col">
                   
                   {step === 1 && (
                     <motion.div 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       className="flex-1 flex flex-col"
                     >
                       <div className="text-center mb-10 space-y-2">
                          <h3 className="text-2xl font-bold">Select a time</h3>
                          <p className="text-sm text-text-secondary">Select 15 minutes that work for you.</p>
                       </div>
                       
                       <div className="flex-1 space-y-8">
                          <div className="grid grid-cols-7 text-center text-[10px] font-bold text-text-tertiary uppercase tracking-widest">
                             <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span className="opacity-40">S</span><span className="opacity-40">S</span>
                          </div>
                          <div className="grid grid-cols-7 gap-y-6 text-center text-sm font-bold">
                             {Array.from({ length: 31 }).map((_, i) => (
                               <button 
                                 key={i} 
                                 className={`p-2 rounded-lg transition-colors ${i === 14 ? 'bg-amber-base text-white hover:bg-amber-dark' : 'text-text-primary hover:bg-bg-tinted'}`}
                               >
                                  {i + 1}
                               </button>
                             ))}
                          </div>
                          
                          <div className="space-y-4 pt-8 border-t border-bg-tinted">
                             <div className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Morning Slots</div>
                             <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                                {["08:15 AM", "09:30 AM", "11:45 AM"].map(time => (
                                   <button 
                                     key={time} 
                                     onClick={() => handleTimeSelect(time)}
                                     className="py-2 border border-border-light rounded hover:border-amber-base hover:text-amber-base transition-colors"
                                   >
                                      {time}
                                   </button>
                                ))}
                             </div>
                          </div>
                       </div>
                     </motion.div>
                   )}

                   {step === 2 && (
                     <motion.div 
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       className="flex-1 flex flex-col"
                     >
                        <button 
                          onClick={() => setStep(1)}
                          className="text-xs font-bold text-text-tertiary uppercase tracking-widest mb-6 hover:text-text-primary flex items-center gap-2"
                        >
                           &larr; Back to calendar
                        </button>
                        <div className="mb-10">
                           <h3 className="text-2xl font-bold mb-2">Your details</h3>
                           <p className="text-sm text-text-secondary">Booking for <span className="text-amber-base font-bold">{selectedTime} on May 15th</span></p>
                        </div>
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                           <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Full Name</label>
                              <input required type="text" className="w-full bg-bg-tinted border border-border-light rounded px-4 py-3 outline-none focus:border-amber-base transition-colors" placeholder="Dave Smith" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Company Email</label>
                              <input required type="email" className="w-full bg-bg-tinted border border-border-light rounded px-4 py-3 outline-none focus:border-amber-base transition-colors" placeholder="dave@company.com.au" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Construction Scale</label>
                              <select className="w-full bg-bg-tinted border border-border-light rounded px-4 py-3 outline-none focus:border-amber-base transition-colors">
                                 <option>1-5 Homes / Year</option>
                                 <option>5-20 Homes / Year</option>
                                 <option>20-100 Homes / Year</option>
                                 <option>100+ Homes / Year</option>
                              </select>
                           </div>
                           <button 
                             disabled={loading}
                             type="submit" 
                             className="btn-accent w-full py-5 text-lg flex items-center justify-center gap-3"
                           >
                              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Request Invite <Send className="w-4 h-4" /></>}
                           </button>
                        </form>
                     </motion.div>
                   )}

                   {step === 3 && (
                     <motion.div 
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                     >
                        <div className="w-20 h-20 bg-semantic-green/10 text-semantic-green rounded-full flex items-center justify-center mb-4">
                           <Check className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-extrabold tracking-tightest">You're in.</h3>
                        <p className="text-text-secondary max-w-xs mx-auto">
                           We've sent a calendar invitation for {selectedTime} on May 15th to your email. Check your inbox (and spam just in case).
                        </p>
                        <Link to="/" className="text-amber-base font-bold hover:underline pt-10">Back to homepage</Link>
                     </motion.div>
                   )}

                   <p className="mt-10 text-xs text-text-tertiary text-center leading-relaxed">
                      Prefer email? Contact us at <a href="mailto:demo@siteforge.app" className="text-text-primary font-bold">demo@siteforge.app</a>
                   </p>
                </div>
             </div>
             
             {/* Floating Trust Badge */}
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-card shadow-xl border border-border-light text-center space-y-2">
                <div className="flex justify-center -space-x-1">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-bg-tinted overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="User" referrerPolicy="no-referrer" />
                     </div>
                   ))}
                </div>
                <div className="text-[10px] font-bold text-text-primary uppercase tracking-widest">Mark H. booked 2h ago</div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer / Alt CTA */}
      <section className="bg-bg-dark py-24 px-6 text-center">
         <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-white text-3xl font-bold">Too fast for a call?</h2>
            <p className="text-text-inverse-muted text-lg">Read the Pilot details and apply whenever you're ready.</p>
            <Link to="/pilot" className="inline-flex items-center gap-2 text-amber-bright font-bold uppercase tracking-widest text-sm hover:translate-x-1 transition-transform">
               See Pilot Details <ArrowRight className="w-4 h-4" />
            </Link>
         </div>
      </section>
    </div>
  );
}
