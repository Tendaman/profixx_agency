'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/ui/footer';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';
import HeroSection from './components/Hero';
import Popup from './components/Popup';

export default function ContactUsPage() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Navbar */}
      <section>
        <Navbar />
      </section>

      {/* Hero Section */}
      <HeroSection />

      {/* Contact Details and Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <ContactDetails />
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Get in Touch</h2>
          <ContactForm onSuccess={() => setPopupOpen(true)} />
        </div>
      </section>

      {/* Success Popup */}
      <Popup open={popupOpen} onClose={() => setPopupOpen(false)} />

      {/* Footer */}
      <section className="mt-auto">
        <Footer />
      </section>
    </main>
  );
}
