import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCards } from "@/components/FeaturedCards";
import { InfoSections } from "@/components/InfoSections";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturedCards />
      <InfoSections />
      <Footer />
    </div>
  );
}
