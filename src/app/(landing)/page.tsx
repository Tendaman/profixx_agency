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
      <section className="px-6 max-w-7xl mx-auto">
        <h1 className="text-2xl text-red-500 flex justify-center">Please note that prices depend on, complexity, size and time estimated to complete.</h1>
        <h2 className="text-lg mb-10 text-gray-500 flex justify-center">We will provide a quote after assessing your needs.</h2>
        <h1 className="text-3xl text-blue-400 flex justify-center">Contact us for a free consultation.</h1>
      </section>
      <GetStartedButton />
      <section className="max-w-4xl mx-auto text-gray-800 px-16 mt-10">
        <Footer />
      </section>
    </main>
  );
}
