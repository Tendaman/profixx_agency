// components/HeroSection.tsx
'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <Image
        src="/company.jpg"
        alt="Company"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        <p className="mt-4 text-lg text-white max-w-2xl">
          We are here to assist you with any questions or concerns you may have. Reach out to us today!
        </p>
      </div>
    </section>
  );
}
