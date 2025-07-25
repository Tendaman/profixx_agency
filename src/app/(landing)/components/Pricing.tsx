"use client";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const pricing = [
  {
    title: "AWS Cloud Migration",
    price: "from R2000",
    description: "We assess your current infrastructure and plan a detailed migration strategy to ensure minimal downtime and a seamless transition to the cloud.",
  },
  {
    title: "Cloud Monitoring & Alerts",
    price: "from R2,500 /pm",
    description: "Our team implements real-time monitoring tools tailored to your cloud setup to proactively detect issues and send automated alerts.",
  },
  {
    title: "Backup & Disaster Recovery",
    price: "from R6,000",
    description: "We design and implement automated backup solutions using AWS services to ensure data integrity and fast recovery during disasters.",
  },
  {
    title: "Security Audit",
    price: "from R2,800",
    description: "Our experts conduct comprehensive security assessments, perform vulnerability scans, and ensure compliance with industry standards.",
  },
  {
    title: "Full Cloud Management",
    price: "from R10,000 /pm",
    description: "We provide end-to-end cloud management, including cost optimization, regular patching, performance tuning, and 24/7 technical support. Other mentioned services are included.",
  },
  {
    title: "Enterprise level Solutions",
    price: "Price on request",
    description: "We deliver tailored cloud solutions for large enterprises, including cloud architecture design, compliance management, and DevOps integration.",
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
