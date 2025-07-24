"use client";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const pricing = [
  {
    title: "AWS Cloud Migration",
    price: "R7,500 - R15,000",
    description: "We assess your current infrastructure, plan a detailed migration strategy minimizing downtime...",
  },
  {
    title: "Cloud Monitoring & Alerts",
    price: "R5,000 /pm",
    description: "Our team implements real-time monitoring tools tailored to your cloud setup...",
  },
  {
    title: "Backup & Disaster Recovery",
    price: "R6,000",
    description: "We design and implement automated backup solutions using AWS services...",
  },
  {
    title: "Security Audit",
    price: "R5,000",
    description: "Our experts conduct comprehensive security assessments including scans and compliance checks...",
  },
  {
    title: "Full Cloud Management",
    price: "R20,000 /pm",
    description: "We provide end-to-end cloud management including optimization, patching, and 24/7 support...",
  },
  {
    title: "Enterprise level Solutions",
    price: "Price on request",
    description: "Tailored cloud solutions for enterprise needs including architecture design and compliance management...",
  },
];

export default function Pricing() {
  return (
    <section className="px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 justify-center">
        {pricing.map((service, index) => (
          <CardContainer key={index} containerClassName="w-full max-w-xs">
            <CardBody className="h-full md:w-96 sm:w-73 flex flex-col justify-between py-6">
              <CardItem translateZ={30} className="rounded-xl bg-white shadow-xl p-6 w-full md:h-60 sm:h-80">
                <CardItem as="h1" translateZ={40} className="text-2xl font-bold">{service.title}</CardItem>
                <CardItem as="h2" translateZ={30} className="text-gray-700 text-xl">{service.price}</CardItem>
                <CardItem as="p" translateZ={20} className="text-gray-500 text-sm leading-relaxed">{service.description}</CardItem>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
