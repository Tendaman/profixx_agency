import Image from "next/image";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-center text-gray-500 text-sm pt-10 border-t pb-10">
      <div className="flex justify-center mb-4 space-x-6">
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-blue-500 transition-colors"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-700 transition-colors"
        >
          <FiLinkedin size={24} />
        </a>
        <a
          href="https://facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-600 transition-colors"
        >
          <FiFacebook size={24} />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors"
        >
          <FiInstagram size={24} />
        </a>
      </div>

      <div className="flex justify-center mb-2">
        <Image
          src="/logo_3.png"
          alt="Profixx Logo"
          width={120}
          height={40}
          priority
        />
      </div>
      Copyright &copy; 2025 Profixx. All rights reserved.
    </footer>
  );
}
