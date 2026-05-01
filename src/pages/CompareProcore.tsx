import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check, X, ShieldAlert, Award, DollarSign, Zap } from "lucide-react";

export default function CompareProcorePage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="eyebrow">SITEFORGE VS PROCORE</div>
          <h1 className="text-balance text-text-primary mb-8">
            Procore is built for tier-1 commmercial. <br/>
            <span className="text-amber-base">SiteForge is built for AU residential.</span>
          </h1>
          <p className="lead-text">
            Procore is excellent software for $500M commercial projects. But for AU residential builders running $2M–$50M, it's expensive, complex, and misses the specific residential workflow gaps you face daily.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 bg-white overflow-hidden border-y border-border-light">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto rounded-card border border-border-light shadow-xl">
             <table className="w-full text-left min-w-[700px]">
                <thead>
                   <tr className="bg-bg-tinted text-text-primary border-b border-border-light">
                      <th className="p-8 text-sm font-black uppercase tracking-widest">Capabilities</th>
                      <th className="p-8 text-sm font-black uppercase tracking-widest border-l border-border-light/50">Procore</th>
                      <th className="p-8 text-sm font-black uppercase tracking-widest border-l border-amber-base/10 bg-amber-soft/20 text-amber-dark">SiteForge</th>
                   </tr>
                </thead>
                <tbody className="text-sm">
                   {[
                     { label: "Built for AU Residential", pro: false, sf: true },
                     { label: "Price Point", pro: "$15K–$80K+/year", sf: "From $149/mo per project" },
                     { label: "AU Contract Types (HIA, AS4000)", pro: "Limited", sf: "Native Support" },
                     { label: "Buildxact Integration", pro: false, sf: "Bidirectional Sync" },
                     { label: "Variation Approval Pipeline", pro: "Complex / Multi-ERP", sf: "Purpose-built workflow" },
                     { label: "E-signature (AU ETA 1999)", pro: "Generic", sf: "Cited on every document" },
                     { label: "NSW WSA 2005 Compliance", pro: false, sf: "System-enforced gates" },
                     { label: "Implementation Time", pro: "Weeks – Months", sf: "90 Minutes" }
                   ].map((row, i) => (
                     <tr key={i} className="border-b border-border-light last:border-0 hover:bg-bg-tinted/30 transition-colors">
                        <td className="p-8 font-bold text-text-primary">{row.label}</td>
                        <td className="p-8 border-l border-border-light/50 font-medium text-text-secondary">
                           {typeof row.pro === 'boolean' ? (
                             row.pro ? <Check className="w-5 h-5 text-semantic-green" /> : <X className="w-5 h-5 text-text-tertiary opacity-40" />
                           ) : row.pro}
                        </td>
                        <td className="p-8 border-l border-amber-base/10 bg-amber-soft/10 font-bold text-text-primary">
                           {typeof row.sf === 'boolean' ? (
                             row.sf ? <Check className="w-5 h-5 text-amber-base" /> : <X className="w-5 h-5 text-text-tertiary" />
                           ) : row.sf}
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* Narrative Points */}
      <section className="py-32 px-6 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            {[
               { icon: DollarSign, title: 'No "Commercial Tax"', desc: 'Procore is priced for companies with massive overhead. SiteForge is priced for residential operations where every dollar counts.' },
               { icon: Zap, title: 'Speed of Setup', desc: 'Procore implementations require dedicated consultants. SiteForge is live on your first project in 90 minutes.' },
               { icon: Award, title: 'Residential Fluent', desc: 'We speak EOTs, rain days, and supervisor diaries. Our software doesn\'t need to be \"hacked\" to fit residential workflows.' }
            ].map((f, i) => (
               <div key={i} className="space-y-4">
                  <div className="w-10 h-10 bg-bg-tinted rounded flex items-center justify-center">
                     <f.icon className="w-5 h-5 text-text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">{f.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border-light text-center bg-bg-dark text-white">
        <div className="max-w-3xl mx-auto space-y-8">
           <h2 className="text-text-inverse">Don't over-engineer your ops.</h2>
           <p className="lead-text text-text-inverse-muted">Get the tools built for your scale and your market today.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo" className="btn-accent py-4 px-10 text-lg">Compare SiteForge to Procore</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
