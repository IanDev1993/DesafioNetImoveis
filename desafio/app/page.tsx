import React from "react";
import { SearchSection } from "@/components/SearchSection";
import FlatSection from "@/components/FlatSection";
import { InfoSections } from "@/components/InfoSections";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SearchSection />
      <FlatSection />
      <InfoSections />
      <Footer />
    </div>
  );
}
