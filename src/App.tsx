
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminTopBar from "@/components/AdminTopBar";
import Index from "./pages/Index";
import WebsiteDesign from "./pages/WebsiteDesign";
import SEO from "./pages/SEO";
import PaidAds from "./pages/PaidAds";
import Dashboard from "./pages/Dashboard";
import Reporting from "./pages/Reporting";
import SocialMedia from "./pages/SocialMedia";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CustomDashboard from "./pages/CustomDashboard";
import Admin from "./pages/Admin";

/**
 * WordPress Theme Structure
 * 
 * This React Router setup maps to the following WordPress templates:
 * - "/" (Index) -> front-page.php or home.php
 * - "/services/website-design" -> single-service.php or page-website-design.php
 * - "/services/seo" -> single-service.php or page-seo.php
 * - "/services/paid-ads" -> single-service.php or page-paid-ads.php
 * - "/services/dashboard" -> single-service.php or page-dashboard.php
 * - "/services/reporting" -> single-service.php or page-reporting.php
 * - "/services/social-media" -> single-service.php or page-social-media.php
 * - "/contact" -> page-contact.php
 * - "/customizer" -> page-customizer.php
 * - "/admin" -> page-admin.php (admin dashboard)
 * - "*" (NotFound) -> 404.php
 *
 * The React Router setup will be replaced with WordPress's template hierarchy.
 */

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AdminTopBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/paid-ads" element={<PaidAds />} />
          <Route path="/services/dashboard" element={<Dashboard />} />
          <Route path="/services/reporting" element={<Reporting />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customizer" element={<CustomDashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
