import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GetStartedButton() {
  return (
    <div className="w-full flex justify-center mt-16 mb-16">
      <Link href="/register">
        <div className="group">
          <Button
            size="lg"
            className="text-xl px-8 py-6 rounded-full bg-gradient-to-r cursor-pointer from-purple-600 to-indigo-600 text-white shadow-xl transition-all duration-300 group-hover:animate-none animate-pulse"
          >
            ✨ Get Started
          </Button>
        </div>
      </Link>
    </div>
  );
}
