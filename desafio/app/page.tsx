import React from "react";
import { SearchSection } from "@/components/SearchSection";
import FlatSection from "@/components/FlatSection";
import InfoSection from "@/components/InfoSection";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidiaBar from "@/components/MidiaBar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SearchSection />
      <FlatSection />
      <InfoSection />
      <Footer />
      <MidiaBar />  
    </div>
  );
}
