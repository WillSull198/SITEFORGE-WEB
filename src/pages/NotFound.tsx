import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 space-y-6">
      <div className="text-[80px] font-mono font-bold text-amber-base">404</div>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-text-secondary">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  );
}
