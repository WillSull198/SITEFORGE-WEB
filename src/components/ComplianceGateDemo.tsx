import React, { useState, useEffect } from "react";
import { MapPin, Camera, Check, ShieldCheck, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ComplianceGateDemo() {
  const [step, setStep] = useState(1); // 1: Welcome/Auth, 2: Geo, 3: Photo, 4: Success
  const [loading, setLoading] = useState(false);
  const [coords, setCoords] = useState<{lat: number, lng: number} | null>(null);

  const startGate = () => setStep(2);

  useEffect(() => {
    if (step === 2) {
      setLoading(true);
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCoords({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
            setTimeout(() => {
              setLoading(false);
              setStep(3);
            }, 1000);
          },
          (error) => {
            console.error("Geo error", error);
            setLoading(false);
            setStep(3); // Continue anyway for demo
          }
        );
      } else {
        setStep(3);
      }
    }
  }, [step]);

  const takePhoto = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  return (
    <div className="w-full h-full bg-bg-dark rounded-card overflow-hidden flex flex-col relative text-white">
      <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-text-inverse-muted">Compliance Gate v2.4</span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-semantic-green" />
          <div className="w-1.5 h-1.5 rounded-full bg-semantic-green animate-pulse" />
        </div>
      </div>

      <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="w-20 h-20 bg-amber-base/20 rounded-full flex items-center justify-center mx-auto">
                 <ShieldCheck className="w-10 h-10 text-amber-bright" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Attendance Verification</h3>
                <p className="text-xs text-text-inverse-muted">NSW WSA 2005 Compliant Gate</p>
              </div>
              <button 
                onClick={startGate}
                className="bg-white text-bg-dark px-8 py-3 rounded font-bold text-sm hover:bg-bg-tinted transition-colors w-full"
              >
                Start Verification
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto animate-bounce">
                 <MapPin className="w-8 h-8 text-amber-bright" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Verifying Location</h3>
                {loading ? (
                  <div className="flex items-center justify-center gap-2 text-xs text-text-inverse-muted">
                    <Loader2 className="w-3 h-3 animate-spin" /> Fetching GPS coordinates...
                  </div>
                ) : (
                  <p className="text-xs text-semantic-green font-bold">FOUND: {coords?.lat.toFixed(4)}, {coords?.lng.toFixed(4)}</p>
                )}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 w-full"
            >
              <div className="w-full aspect-video bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                 <Camera className="w-12 h-12 text-white/20 mb-2" />
                 <span className="text-[10px] font-bold text-white/40 uppercase">Awaiting Site Photo</span>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-white/80">
                      <div className="w-2 h-2 rounded-full bg-semantic-green" /> GPS LOCKED
                    </div>
                 </div>
              </div>
              <p className="text-xs text-text-inverse-muted px-4">Face and site background must be visible for WSA 2005 compliance.</p>
              <button 
                disabled={loading}
                onClick={takePhoto}
                className="bg-amber-base text-white px-8 py-4 rounded font-bold text-sm w-full shadow-lg flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Camera className="w-4 h-4" /> Capture & Sign-In</>}
              </button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="w-20 h-20 bg-semantic-green text-white rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(5,150,105,0.4)]">
                 <Check className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black italic tracking-tighter">SUCCESS</h3>
                <p className="text-sm text-text-inverse-muted">Sign-in recorded at 08:31 AM</p>
              </div>
              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="text-left bg-white/5 p-3 rounded">
                  <div className="text-[8px] font-bold text-text-inverse-muted uppercase">Hash</div>
                  <div className="text-[9px] font-mono truncate">7e1a...f92</div>
                </div>
                <div className="text-left bg-white/5 p-3 rounded">
                  <div className="text-[8px] font-bold text-text-inverse-muted uppercase">Evidence</div>
                  <div className="text-[9px] font-mono">ENCRYPTED</div>
                </div>
              </div>
              <button 
                onClick={() => setStep(1)}
                className="text-xs text-amber-bright font-bold uppercase tracking-widest mt-8"
              >
                Restart Demo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 bg-black/40 text-[9px] font-mono text-center text-white/30 truncate">
        SHA-256: 48f92a1...bc2915 | VERIFIED BY SITEFORGE ORACLE
      </div>
    </div>
  );
}
