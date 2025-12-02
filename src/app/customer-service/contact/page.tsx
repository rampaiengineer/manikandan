export const metadata = {
  title: "Contact Support | Meenakshi & Meenakshi",
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-fluid max-w-3xl">
        <h1 className="text-2xl font-semibold text-neutral-900">
          Contact Support
        </h1>
        <p className="mt-3 text-sm text-neutral-600">
          We&apos;re here to help with product questions, orders, shipping and
          after-sales support. Reach us by phone or WhatsApp using the details
          below.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2 text-xs text-neutral-700">
          <section className="card-surface p-5">
            <h2 className="text-sm font-semibold text-neutral-900">
              Phone & WhatsApp
            </h2>
            <p className="mt-2 text-[11px] text-neutral-500">
              As displayed on the original Meenakshi & Meenakshi site:
            </p>
            <ul className="mt-3 space-y-1">
              <li>• English Support – John: 9626666840</li>
              <li>• Tamil & WhatsApp Orders – Siva: 9626666440</li>
              <li>• Sabari: 9994373666</li>
              <li>• Susinthiran: 9994166677</li>
              <li>• Ayesha: 9363602559</li>
            </ul>
          </section>

          <section className="card-surface p-5">
            <h2 className="text-sm font-semibold text-neutral-900">
              Complaints & Returns
            </h2>
            <ul className="mt-3 space-y-1">
              <li>• Yuvanraj: 9150006765</li>
              <li>• Sanjay: 7397476399</li>
            </ul>
            <p className="mt-3 text-[11px] text-neutral-500">
              For damaged, incorrect or missing items, please share your order
              ID and clear photos to help us resolve quickly.
            </p>
          </section>
        </div>

        <section className="mt-6 card-surface p-5 text-xs text-neutral-700">
          <h2 className="text-sm font-semibold text-neutral-900">Store</h2>
          <p className="mt-2">
            No 178, 1st Agraharam, Salem – 636001, Tamil Nadu, India
            <br />
            Landmark: Near Aunty Uncle Readymades Shop
          </p>
          <p className="mt-3 text-[11px] text-neutral-500">
            Working Days & Hours: Mon – Sat, 10:30 AM – 09:00 PM
            <br />
            Customer Support: Mon – Sat, 10:30 AM – 07:00 PM
          </p>
        </section>
      </div>
    </div>
  );
}


