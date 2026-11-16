"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/common/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustHighlights } from "@/components/sections/TrustHighlights";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PickupDelivery } from "@/components/sections/PickupDelivery";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
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
        <WhyChooseUs />
        <PickupDelivery />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      {/* Floating call button on desktop */}
      <FloatingCallButton />
    </>
  );
}
