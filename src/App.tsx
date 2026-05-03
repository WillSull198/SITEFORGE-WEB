import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import ClientFlow from "./pages/ClientFlow";
import SitePassport from "./pages/SitePassport";
import Presence from "./pages/Presence";
import CommercialEngine from "./pages/CommercialEngine";
import TeamsLayer from "./pages/TeamsLayer";
import BuildxactConnector from "./pages/BuildxactConnector";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Security from "./pages/Security";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import CompareBuildxact from "./pages/CompareBuildxact";
import CompareProcore from "./pages/CompareProcore";
import Pilot from "./pages/Pilot";
import Demo from "./pages/Demo";
import Login from "./pages/Login";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/clientflow" element={<ClientFlow />} />
          <Route path="/product/site-passport" element={<SitePassport />} />
          <Route path="/product/presence" element={<Presence />} />
          <Route path="/product/engine" element={<CommercialEngine />} />
          <Route path="/product/teams" element={<TeamsLayer />} />
          <Route path="/product/buildxact-connector" element={<BuildxactConnector />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/security" element={<Security />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/compare/buildxact" element={<CompareBuildxact />} />
          <Route path="/compare/procore" element={<CompareProcore />} />
          <Route path="/pilot" element={<Pilot />} />
          <Route path="/demo" element={<Demo />} />
          {/* Placeholder for other routes */}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
