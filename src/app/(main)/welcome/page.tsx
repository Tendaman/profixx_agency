"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import WelcomeText from "./components/WelcomeText";
import Footer from "@/components/ui/footer";
import WelcomeBtn from "./components/WelcomeBtn";

export default function WelcomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down video speed to 70%
    }
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section>
        <Navbar textColor="md:text-gray-600 sm:text-white" />
      </section>

      <section className="flex flex-col-reverse md:flex-row h-full md:h-screen md:pt-16">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
          <WelcomeText />
        </div>

        {/* Right Section - Video */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-full overflow-hidden md:px-6 md:mt-10">
          <video
            ref={videoRef}
            className="w-full h-full object-cover md:rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/analyst_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-gray-800 px-6 md:px-16 md:mt-20 md:mb-20 sm:mt-10 sm:mb-10">
        <WelcomeBtn />
      </section>

      <section className="max-w-4xl mx-auto text-gray-800 px-16 mt-10">
        <Footer />
      </section>
    </main>
  );
}
