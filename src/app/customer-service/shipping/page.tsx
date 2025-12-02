export const metadata = {
  title: "Shipping & Delivery | Meenakshi & Meenakshi",
};

export default function ShippingPage() {
  return (
    <div className="section-padding">
      <div className="container-fluid max-w-3xl">
        <h1 className="text-2xl font-semibold text-neutral-900">
          Shipping & Delivery
        </h1>
        <p className="mt-3 text-sm text-neutral-600">
          We ship our metal products with careful packaging to protect against
          dents, scratches and transit shock, following the spirit of the
          original Meenakshi & Meenakshi shipping guidelines.
        </p>

        <div className="mt-6 space-y-4 text-xs text-neutral-700">
          <section>
            <h2 className="text-sm font-semibold text-neutral-900">
              Delivery Timelines
            </h2>
            <p className="mt-2">
              Orders are typically dispatched within 2–4 working days. Delivery
              timelines vary by location:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Within Tamil Nadu & South India: 3–7 business days</li>
              <li>Rest of India: 5–10 business days</li>
              <li>International (Europe / USA / Australia): 10–20 days</li>
            </ul>
            <p className="mt-2 text-[11px] text-neutral-500">
              Note: As mentioned on the original website, unusual situations
              like government regulations, lockdowns or courier restrictions may
              cause delays. We will keep you informed wherever possible.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-neutral-900">
              Tracking Your Order
            </h2>
            <p className="mt-2">
              Once dispatched, your order will receive a tracking ID and link
              through which you can follow the shipment status until delivery.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-neutral-900">
              Packaging & Handling
            </h2>
            <p className="mt-2">
              Metal utensils and heritage pooja items are packed using layered
              protection (bubble wrap, corrugated sheets, outer cartons) so
              that sharp edges, knobs and glass components are cushioned during
              transit.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-neutral-900">
              Areas Under Restriction
            </h2>
            <p className="mt-2">
              In line with the note shown on the current site, if your area is
              under quarantine or restricted by the courier/delivery partners,
              orders may be delayed or temporarily not serviceable. In such
              cases, our team will guide you on possible options.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


