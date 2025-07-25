// components/ContactDetails.tsx

export default function ContactDetails() {
  return (
    <div className="space-y-6 text-gray-800 max-w-md mx-auto md:mx-0">
      <h2 className="text-2xl font-semibold">Questions or Comments?</h2>
      <p>
        We know that our clients have unique needs. Send us a message, and we will get back to you soon.
      </p>

      <div>
        <h3 className="font-semibold">SYNCH INDUSTRIES (PTY) LTD</h3>
        <address className="not-italic">
          1 Eugene Marais street,<br />
          Elandspark, Johannesburg,<br />
          South Africa
        </address>
      </div>

      <div>
        <p className="font-semibold">Phone</p>
        <a href="tel:+27813494850" className="text-blue-600 hover:underline">
          +27 81 349 4850
        </a>
      </div>

      <div>
        <p className="font-semibold">Email</p>
        <a href="mailto:tendamadavha@profixx.com" className="text-blue-600 hover:underline">
          tendamadavha@profixx.com
        </a>
      </div>
    </div>
  );
}
