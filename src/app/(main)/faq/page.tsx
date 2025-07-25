'use client';

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";
import FAQItem from "./components/FaqItem";
import { faqs } from "./components/faqs";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section>
        <Navbar textColor="text-gray-600" />
      </section>

      <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
        <section className="flex items-center justify-center py-12">
          <div className="border-t border-gray-400 flex-grow mr-4 md:ml-6 ml-10" />
          <h1 className="text-center text-gray-500 text-2xl font-semibold tracking-widest">
            Frequently Asked Questions
          </h1>
          <div className="border-t border-gray-400 flex-grow ml-4 md:mr-6 mr-10" />
        </section>

        <h3 className="text-center font-mono text-gray-600 mb-8">
          Here are some common questions we receive from our clients. If you have any other questions, feel free to reach out to us at{' '}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tendamadavha@profixx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700 text-gray-500"
          >
            tendamadavha@profixx.com
          </a>
          .
        </h3>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
