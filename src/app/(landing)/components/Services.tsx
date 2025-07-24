import { LayoutGrid } from "@/components/ui/layout-grid";

const services = [
  {
    id: 1,
    content: <><h2 className="text-2xl font-bold text-white">AWS Cloud Migration</h2><p className="text-white text-sm mt-2">We assess, plan and migrate your infrastructure to AWS with minimal downtime.</p></>,
    className: "md:col-span-1 h-64",
    thumbnail: "/back_1.jpg",
  },
  {
    id: 2,
    content: <><h2 className="text-2xl font-bold text-white">Cloud Monitoring & Alerts</h2><p className="text-white text-sm mt-2">Real-time monitoring, custom alerts, and 24/7 oversight.</p></>,
    className: "md:col-span-2 h-64",
    thumbnail: "/back_2.jpg",
  },
  {
    id: 3,
    content: <><h2 className="text-2xl font-bold text-white">Backup & Disaster Recovery</h2><p className="text-white text-sm mt-2">Secure backups and fast recovery for your critical data.</p></>,
    className: "md:col-span-2 h-64",
    thumbnail: "/back_3.jpg",
  },
  {
    id: 4,
    content: <><h2 className="text-2xl font-bold text-white">Security Audit</h2><p className="text-white text-sm mt-2">Comprehensive assessments to safeguard your cloud environment.</p></>,
    className: "md:col-span-1 h-64",
    thumbnail: "/back_4.jpg",
  },
  {
    id: 5,
    content: <><h2 className="text-2xl font-bold text-white">Full Cloud Management</h2><p className="text-white text-sm mt-2">End-to-end management with optimization and 24/7 support.</p></>,
    className: "md:col-span-3 h-64",
    thumbnail: "/back_5.jpg",
  },
];

export default function Services() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <LayoutGrid cards={services} />
    </section>
  );
}
