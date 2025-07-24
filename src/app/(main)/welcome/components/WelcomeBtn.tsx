"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WelcomeBtn() {
  return (
    <div className="flex  justify-center gap-4 md:mt-30">
      <Link href="/home">
        <Button className="bg-indigo-600 text-white rounded-lg px-6 py-2">
          Get Started
        </Button>
      </Link>
      <Link href="/contact">
        <Button variant="outline" className="rounded-lg px-6 py-2">
          Contact Us
        </Button>
      </Link>
    </div>
  );
}
