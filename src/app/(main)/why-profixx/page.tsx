'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";

export default function WhyProfixxPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <section>
        <Navbar textColor="md:text-gray-600 sm:text-white" />
      </section>

      {/* Hero Section with Video */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <video
          src="/dev_vid_3.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white px-6 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Why Choose Profixx?</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
              Discover how our innovative cloud solutions empower businesses to operate smarter, faster, and more securely.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Profixx Content */}
      <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Unmatched Precision and Accuracy</h2>
            <p className="mt-2 text-gray-700">
              Our focus on delivering "Precise Accurate Secure Time" means our clients can rely on our services to perform flawlessly, no matter the demand.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Seamless Integration</h2>
            <p className="mt-2 text-gray-700">
              We ensure that our solutions seamlessly integrate with your existing systems, allowing you to adopt TaaS effortlessly while maximising your return on investment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Scalability</h2>
            <p className="mt-2 text-gray-700">
              As your organisation grows, our TaaS can scale with you—allowing for increased capacity and capabilities without disrupting your current operations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Expert Support</h2>
            <p className="mt-2 text-gray-700">
              With a team of seasoned professionals in time synchronisation and technology, we are dedicated to providing exceptional support tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-6 md:px-16 mt-10">
        <Footer />
      </section>
    </main>
  );
}
