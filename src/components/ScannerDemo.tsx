import React, { useRef, useState, useEffect } from "react";
import { Camera, X, Check, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ScannerDemo() {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState<"idle" | "scanning" | "success" | "denied">("idle");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startScanner = async () => {
    setIsActive(true);
    setStatus("scanning");
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "environment" } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      
      // Simulate a scan after 3 seconds
      setTimeout(() => {
        setStatus("success");
      }, 3000);
      
    } catch (err) {
      console.error("Camera access denied", err);
      setStatus("denied");
    }
  };

  const stopScanner = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setStream(null);
    setIsActive(false);
    setStatus("idle");
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
      <AnimatePresence mode="wait">
        {!isActive ? (
          <motion.div 
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-6"
          >
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto blur-sm group-hover:blur-0 transition-all">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <button 
              onClick={startScanner}
              className="bg-amber-base text-white px-8 py-4 rounded-btn font-bold shadow-xl hover:bg-amber-dark transition-all transform hover:scale-105"
            >
              Test Live Scanner
            </button>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Uses your device camera</p>
          </motion.div>
        ) : (
          <motion.div 
            key="active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square bg-black rounded-card overflow-hidden border-2 border-white/20 shadow-2xl">
              {status === "scanning" && (
                <video 
                  ref={videoRef}
                  autoPlay 
                  playsInline 
                  muted 
                  className="w-full h-full object-cover"
                />
              )}
              
              {/* Scanning Overlay */}
              {status === "scanning" && (
                <div className="absolute inset-0 z-10">
                   <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1 bg-amber-base shadow-[0_0_15px_rgba(217,119,6,0.8)] animate-pulse" />
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-48 h-48 border-2 border-white/40 rounded-xl relative">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-amber-base" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-amber-base" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-amber-base" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-amber-base" />
                      </div>
                   </div>
                </div>
              )}

              {/* Success State */}
              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 bg-semantic-green flex flex-col items-center justify-center text-white p-8"
                >
                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <Check className="w-8 h-8" />
                   </div>
                   <h3 className="text-2xl font-bold mb-2">ACCESS GRANTED</h3>
                   <p className="text-white/80 text-sm">WorkerID: 99x-FL</p>
                   <button 
                    onClick={() => setStatus("scanning")}
                    className="mt-8 bg-black/20 hover:bg-black/30 px-4 py-2 rounded text-xs font-bold"
                   >
                     Scan another
                   </button>
                </motion.div>
              )}

              {/* Denied State */}
              {status === "denied" && (
                <div className="absolute inset-0 z-20 bg-semantic-red flex flex-col items-center justify-center text-white p-8 text-center">
                   <ShieldAlert className="w-12 h-12 mb-6" />
                   <h3 className="text-xl font-bold mb-2">CAMERA DENIED</h3>
                   <p className="text-white/80 text-xs">Please allow camera access to test the scanner demo.</p>
                   <button 
                    onClick={() => setIsActive(false)}
                    className="mt-6 border border-white/40 px-4 py-2 rounded text-xs"
                   >
                     Close
                   </button>
                </div>
              )}
            </div>
            
            <button 
              onClick={stopScanner}
              className="mt-6 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
            >
              <X className="w-4 h-4" /> Stop Live Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
