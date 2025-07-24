"use client";

import Footer from "@/components/ui/footer";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import GetStartedButton from "./components/GetStartedBtn";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <WhatWeDo />
      <Services />
      <Pricing />
      <GetStartedButton />
      <section className="max-w-4xl mx-auto text-gray-800 px-16 mt-10">
        <Footer />
      </section>
    </main>
  );
}
