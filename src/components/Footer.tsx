import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-inverse-muted py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Link to="/" className="flex items-center gap-3 text-white group">
            <div className="w-10 h-10 bg-amber-base flex items-center justify-center rounded-lg shadow-lg group-hover:scale-110 transition-transform">
               <span className="text-white font-black text-xl italic uppercase tracking-tighter">S</span>
            </div>
            <div className="flex flex-col -gap-1">
               <span className="text-xl font-black tracking-tightest uppercase text-white leading-none">SITEFORGE</span>
               <span className="text-[8px] font-black tracking-[0.3em] text-amber-bright uppercase leading-none">OPERATIONS LAYER</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            Bridging the gap between site events and commercial recovery. Specifically built for the Australian residential construction industry.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/siteforge" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-base hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:william@sullivan.net.au" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-base hover:text-white transition-all"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Product</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/product/clientflow" className="hover:text-amber-bright transition-colors">ClientFlow</Link></li>
            <li><Link to="/product/site-passport" className="hover:text-amber-bright transition-colors">Site Passport</Link></li>
            <li><Link to="/product/presence" className="hover:text-amber-bright transition-colors">Presence</Link></li>
            <li><Link to="/product/engine" className="hover:text-amber-bright transition-colors">Commercial Engine</Link></li>
            <li><Link to="/product/teams" className="hover:text-amber-bright transition-colors">Teams Layer</Link></li>
            <li><Link to="/product/buildxact-connector" className="hover:text-amber-bright transition-colors">Buildxact Connector</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Company</h4>
           <ul className="space-y-4 text-sm font-medium">
             <li><Link to="/about" className="hover:text-amber-bright transition-colors">Our Story</Link></li>
             <li><Link to="/security" className="hover:text-amber-bright transition-colors">Security & Trust</Link></li>
             <li><Link to="/compare/buildxact" className="hover:text-amber-bright transition-colors">Buildxact + SF</Link></li>
             <li><Link to="/compare/procore" className="hover:text-amber-bright transition-colors">Vs Procore</Link></li>
             <li><Link to="/pilot" className="hover:text-amber-bright transition-colors">Pilot Program</Link></li>
             <li><Link to="/demo" className="hover:text-amber-bright transition-colors">Book a Demo</Link></li>
           </ul>
        </div>

        <div className="bg-white/5 rounded-card p-6 border border-white/10 space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-bright" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Trust Locked</span>
          </div>
          <p className="text-xs leading-relaxed opacity-70">
            Hash-chained audit trails as standard. AU Data Residency. SOC 2 Type II Roadmap.
          </p>
          <Link to="/security" className="text-xs font-bold text-white hover:text-amber-bright flex items-center gap-2 group">
            Security Specs <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
        <p className="opacity-40">
          © {new Date().getFullYear()} SiteForge Operations Pty Ltd. ABN 28 642 189 055.
        </p>
        <div className="flex gap-8">
          <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/security" className="hover:text-white transition-colors">Security</Link>
        </div>
      </div>
    </footer>
  );
}
