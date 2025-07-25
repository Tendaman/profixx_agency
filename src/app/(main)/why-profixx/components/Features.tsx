import Image from "next/image";

const features = [
  {
    title: "Unmatched Precision and Accuracy",
    image: "/why_pic1.jpg",
    items: [
      "Our systems provide consistent, millisecond-level time accuracy across networks and environments.",
      "Precision ensures transaction records, logs, and audits are always in perfect sync.",
      "Helps maintain compliance with financial, scientific, and telecommunications standards.",
      "Removes time-based inconsistencies that can impact data integrity and system performance."
    ]
  },
  {
    title: "Seamless Integration",
    image: "/why_pic2.jpg",
    items: [
      "Our services adapt smoothly to any infrastructure—cloud, hybrid or on-premise.",
      "Minimal configuration required to deploy across existing enterprise systems.",
      "Supports modern protocols and legacy compatibility without added complexity.",
      "Designed to fit in with enterprise security policies and data governance."
    ]
  },
  {
    title: "Scalability",
    image: "/why_pic3.jpg",
    items: [
      "Built to support everything from small teams to global enterprise workloads.",
      "Automatically adjusts to changing business demands without downtime.",
      "Grow without overhauling or replacing your current time sync system.",
      "High availability ensures optimal performance during peak usage hours."
    ]
  },
  {
    title: "Expert Support",
    image: "/why_pic4.jpg",
    items: [
      "Access to highly experienced engineers specialising in time-based technologies.",
      "Fast issue resolution with priority-based ticketing and proactive monitoring.",
      "Detailed onboarding, documentation, and ongoing consultation available.",
      "Custom support plans tailored to fit your operational requirements."
    ]
  }
];

export default function FeaturesGrid() {
  return (
    <section className="px-6 md:px-16 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <Image
              src={feature.image}
              alt={feature.title}
              width={600}
              height={400}
              className="w-full h-[250px] object-cover rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
            <ul className="mt-2 text-gray-700 space-y-1 text-sm text-left">
              {feature.items.map((point, idx) => (
                <li key={idx} className="ml-4 list-disc">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
