"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex flex-col justify-center items-center text-center text-white space-y-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-20"
      style={{
        backgroundImage: "url('/cloud_image_1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="relative z-10">
        <Image src="/logo_3.png" alt="Profixx Logo" width={200} height={80} priority className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold drop-shadow-lg">Your Cloud. Managed.</h1>
        <p className="text-lg drop-shadow-md">
          We migrate, monitor, and manage your cloud infrastructure so you can focus on growth.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a href="mailto:lindomadavha@gmail.com">
            <Button variant="outline" className="text-white rounded-2xl px-6 py-2 bg-blue-700 hover:bg-blue-400">
              Get Quote
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
