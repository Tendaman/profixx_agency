'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";
import HeroVideo from "./components/Hero";
import FeaturesGrid from "./components/Features";

export default function WhyProfixxPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroVideo />
      <FeaturesGrid />
      <section className="px-6 md:px-16 mt-10">
        <Footer />
      </section>
    </main>
  );
}
