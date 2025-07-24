"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WelcomeBtn from "./WelcomeBtn";

export default function WelcomeText() {
  return (
    <section className="max-w-4xl mx-auto px-16 justify-center md:mt-20 sm:mt-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-400">
        WELCOME TO PROFIXX
      </h1>
      <h2 className="text-xl font-semibold mb-8 italic text-gray-700">
        Your Trusted Partner in Seamless Cloud Management
      </h2>
      <p className="text-lg mb-6 leading-relaxed text-gray-500">
        At Profixx, we are dedicated to transforming how businesses leverage cloud technology to drive growth, efficiency, and innovation.
        Based in South Africa, our mission is to simplify your cloud journey by delivering secure, scalable, and cost-effective cloud solutions tailored to your unique needs.
      </p>
      <h3 className="text-2xl font-semibold mb-7 italic text-gray-700">
        Why Cloud Management Matters
      </h3>
      <p className="text-lg leading-relaxed text-gray-500">
        In today's rapidly evolving digital world, effective cloud management is critical.
        From accelerating application deployment and ensuring data security to optimizing costs and maintaining compliance, every aspect of your cloud infrastructure impacts your business success.
        With Profixx as your partner, you gain expert guidance and cutting-edge technology to harness the full potential of the cloud—so you can focus on what matters most: growing your business.
      </p>
    </section>
  );
}
