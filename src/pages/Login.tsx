import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-card border border-border-light shadow-2xl p-10 space-y-8 text-center">
        <div className="w-20 h-20 bg-bg-amber-soft rounded-full flex items-center justify-center mx-auto">
          <ShieldCheck className="w-10 h-10 text-amber-base" />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tightest">Worker Login</h1>
          <p className="text-text-secondary leading-relaxed">
            SiteForge is currently in early-access. Dashboard access is provided via your success manager upon pilot activation.
          </p>
        </div>
        
        <div className="bg-bg-tinted p-6 rounded-lg text-left space-y-4 border border-border-light">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Quick Access</h4>
          <ul className="space-y-2 text-xs font-bold text-text-primary">
            <li>• Use the Magic Link in your email</li>
            <li>• Use the SMS link sent to your device</li>
            <li>• Consult your onsite supervisor</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <Link to="/demo" className="btn-primary w-full py-4">Request Dashboard Access</Link>
          <Link to="/" className="text-sm font-bold text-text-tertiary hover:text-text-primary flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to marketing
          </Link>
        </div>
      </div>
    </div>
  );
}
