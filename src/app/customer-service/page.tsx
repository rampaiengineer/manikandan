import Link from "next/link";

export const metadata = {
  title: "Customer Service | Meenakshi & Meenakshi",
};

export default function CustomerServicePage() {
  return (
    <div className="section-padding">
      <div className="container-fluid grid gap-10 lg:grid-cols-[1.5fr,1fr]">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">
            Customer Service
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            We are committed to making your shopping experience smooth, clear
            and trustworthy – from order to delivery and beyond.
          </p>

          <div className="mt-8 space-y-4">
            <Link
              href="/customer-service/shipping"
              className="card-surface block p-5 hover:border-[#c9a64d66]"
            >
              <h2 className="text-sm font-semibold text-neutral-900">
                Shipping & Delivery
              </h2>
              <p className="mt-2 text-xs text-neutral-600">
                Learn how we pack, ship and deliver your metal products across
                India and worldwide, along with timelines and tracking.
              </p>
            </Link>

            <Link
              href="/customer-service/returns"
              className="card-surface block p-5 hover:border-[#c9a64d66]"
            >
              <h2 className="text-sm font-semibold text-neutral-900">
                Returns & Refunds
              </h2>
              <p className="mt-2 text-xs text-neutral-600">
                Understand our return, replacement and refund process for
                transit-damaged or incorrect items.
              </p>
            </Link>

            <Link
              href="/customer-service/contact"
              className="card-surface block p-5 hover:border-[#c9a64d66]"
            >
              <h2 className="text-sm font-semibold text-neutral-900">
                Contact Support
              </h2>
              <p className="mt-2 text-xs text-neutral-600">
                Reach our English and Tamil support teams via phone and WhatsApp
                for orders, queries and after-sales help.
              </p>
            </Link>
          </div>

          <div className="mt-8 space-y-4 text-xs text-neutral-700">
            <h2 className="text-sm font-semibold text-neutral-900">
              Quick help for popular questions
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-surface p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b1e2d]">
                  Orders & Payments
                </p>
                <p className="mt-2 text-[11px] text-neutral-600">
                  When will my order be confirmed? You&apos;ll receive an SMS /
                  email confirmation once payment is successful. If money is
                  debited but you don&apos;t see an order, please contact our
                  support team with a screenshot so we can verify and help.
                </p>
              </div>
              <div className="card-surface p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b1e2d]">
                  Metal Product Care
                </p>
                <p className="mt-2 text-[11px] text-neutral-600">
                  How do I care for brass, copper and steel? Wash gently with
                  mild soap, avoid harsh scrubbers on polished areas and dry
                  fully to prevent water marks. Traditional pitambari-type
                  cleaners may be used occasionally for brass and copper.
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="card-surface border-[#c9a64d33] bg-[#1a1a1a] p-6 text-xs text-neutral-200">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c9a64d]">
            Support Contacts
          </p>
          <p className="mt-3 text-sm font-semibold text-white">
            Talk to Meenakshi & Meenakshi
          </p>
          <p className="mt-3 text-[11px] text-neutral-400">
            As shared on the original site{" "}
            <span className="font-semibold">(English, Tamil & WhatsApp)</span>:
          </p>
          <ul className="mt-3 space-y-1 text-[11px] text-neutral-300">
            <li>• English Support: John – 9626666840</li>
            <li>• Tamil & WhatsApp Orders: Siva – 9626666440</li>
            <li>• Sabari – 9994373666</li>
            <li>• Susinthiran – 9994166677</li>
            <li>• Ayesha – 9363602559</li>
            <li>• Complaints & Returns: Yuvanraj – 9150006765</li>
            <li>• Complaints & Returns: Sanjay – 7397476399</li>
          </ul>
          <p className="mt-4 text-[11px] text-neutral-400">
            Store: No 178, 1st Agraharam, Salem – 636001, Tamil Nadu, India{" "}
            <br />
            Landmark: Near Aunty Uncle Readymades Shop
          </p>
          <p className="mt-3 text-[11px] text-neutral-500">
            Working Days / Hours: Mon – Sat, 10:30 AM – 09:00 PM{" "}
            <br />
            Customer Support: Mon – Sat, 10:30 AM – 07:00 PM
          </p>
        </aside>
      </div>
    </div>
  );
}


