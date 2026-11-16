"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustHighlights } from "@/components/sections/TrustHighlights";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { PickupDelivery } from "@/components/sections/PickupDelivery";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { smoothScrollTo } from "@/components/common/scrollHelper";

export default function HomePage() {
  useEffect(() => {
    // Disable automatic browser scroll restoration on refresh/load
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Check if the URL was loaded with a specific section anchor (e.g. #services, #packages)
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && hash !== "home") {
      // Delay slightly for initial layout hydration to ensure correct target position
      const timer = setTimeout(() => {
        smoothScrollTo(hash, 90);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      // Explicit top-first render: start smoothly from the top of the page
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Navbar />
      <MobileBottomNav />
      <main className="pb-safe-mobile">
        <HeroSection />
        <TrustHighlights />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <PickupDelivery />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
