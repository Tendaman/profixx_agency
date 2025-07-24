"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";
import Image from "next/image";

const solutions = [
  {
    id: 1,
    content: (
      <>
        <h2 className="mt-4 text-xl font-semibold">Cloud Integration</h2>
        <ul className="mt-2 text-gray-700 list-disc list-inside text-left">
          <li>
            We enable seamless cloud adoption by integrating on-premises infrastructure with modern cloud platforms such as AWS, Azure, and Google Cloud.
          </li>
          <li>
            Our team modernizes legacy systems by re-architecting applications to run efficiently in scalable, distributed cloud environments.
          </li>
          <li>
            We ensure real-time synchronization of data across hybrid and multi-cloud setups, enhancing system performance and accessibility.
          </li>
          <li>
            Our solutions automate cloud operations and CI/CD pipelines, accelerating development cycles while reducing human error.
          </li>
        </ul>
      </>
    ),
    image: "/business_1.jpg",
    alt: "Cloud Integration",
  },
  {
    id: 2,
    content: (
      <>
        <h2 className="mt-4 text-xl font-semibold">Regulatory Compliance</h2>
        <ul className="mt-2 text-gray-700 list-disc list-inside text-left">
          <li>
            We help organizations meet international data protection regulations such as POPIA, GDPR, and HIPAA through secure cloud architecture design.
          </li>
          <li>
            Our automated compliance checks and real-time reporting dashboards provide audit-readiness and peace of mind for regulatory inspections.
          </li>
          <li>
            We implement encryption protocols and access controls to ensure that sensitive data is always protected, both at rest and in transit.
          </li>
          <li>
            We conduct ongoing compliance assessments and vulnerability scans to minimize legal risks and enhance data governance policies.
          </li>
        </ul>
      </>
    ),
    image: "/business_2.jpg",
    alt: "Regulatory Compliance",
  },
  {
    id: 3,
    content: (
      <>
        <h2 className="mt-4 text-xl font-semibold">Infrastructure Optimization</h2>
        <ul className="mt-2 text-gray-700 list-disc list-inside text-left">
          <li>
            We perform comprehensive infrastructure audits to identify inefficiencies and provide recommendations that reduce operational costs.
          </li>
          <li>
            Our team fine-tunes workloads and resource allocations to improve system performance, availability, and responsiveness.
          </li>
          <li>
            We introduce automation tools for provisioning, monitoring, and scaling, thereby eliminating downtime and manual bottlenecks.
          </li>
          <li>
            Our multi-region deployment strategies enhance disaster recovery, traffic distribution, and overall infrastructure resilience.
          </li>
        </ul>
      </>
    ),
    image: "/business_3.jpg",
    alt: "Infrastructure Optimization",
  },
];

export default function OurSolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <section>
        <Navbar textColor="text-gray-600" />
      </section>

      {/* Custom Heading */}
      <section className="flex items-center justify-center py-12 mt-15">
        <div className="border-t border-gray-400 flex-grow mr-4 md:ml-60 ml-16" />
        <h1 className="text-center text-gray-500 text-2xl font-semibold tracking-widest">
          OUR SOLUTIONS
        </h1>
        <div className="border-t border-gray-400 flex-grow ml-4 md:mr-60 mr-16" />
      </section>

      {/* Intro paragraph */}
      <section className="text-center mb-8 px-6">
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide tailored cloud solutions to help companies scale efficiently, securely, and affordably.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="px-6 md:px-16 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {solutions.map((solution) => (
            <div className="text-center" key={solution.id}>
              <Image
                src={solution.image}
                alt={solution.alt}
                width={400}
                height={250}
                className="mx-auto rounded-md object-cover h-56 w-full"
              />
              {solution.content}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="px-6 md:px-16 mt-10">
        <Footer />
      </section>
    </main>
  );
}
