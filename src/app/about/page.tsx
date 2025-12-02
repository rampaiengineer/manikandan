export const metadata = {
  title: "About Us | Meenakshi & Meenakshi Metal Heritage",
  description:
    "Discover the 50+ year journey of Meenakshi & Meenakshi – from Salem’s trusted appliance store to a specialised premium metal heritage brand.",
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-fluid grid gap-10 lg:grid-cols-[1.4fr,1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b1e2d]">
            About Us
          </p>
          <h1 className="mt-4 text-3xl font-semibold heading-gradient sm:text-4xl">
            50+ Years of Metal Craft, Trust & South Indian Heritage.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-neutral-700">
            Since 1970, Meenakshi & Meenakshi has been a familiar name in Salem
            homes. What began as a humble home appliances shop has grown into a
            multi-brand destination, serving families with dependable mixers,
            grinders, gas stoves, chimneys and more, across brands like Preethi,
            Prestige, Hawkins, Panasonic, Ultra and many others.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-700">
            Today, we bring that same trust online with a sharper focus:
            premium{" "}
            <span className="font-semibold">
              stainless steel, brass and copper products
            </span>{" "}
            that honour Indian traditions and fit beautifully into modern
            kitchens worldwide. Our promise is simple –{" "}
            <span className="font-semibold">
              authentic materials, practical designs and long-lasting quality
            </span>{" "}
            for every family we serve.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="card-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b1e2d]">
                Since 1970
              </p>
              <p className="mt-2 text-base font-semibold text-neutral-900">
                Legacy You Can Feel
              </p>
              <p className="mt-2 text-xs text-neutral-600">
                Five decades of understanding how South Indian kitchens work –
                from sambadam storage to daily dosa tawa.
              </p>
            </div>
            <div className="card-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b1e2d]">
                Metal Specialists
              </p>
              <p className="mt-2 text-base font-semibold text-neutral-900">
                Steel, Brass & Copper
              </p>
              <p className="mt-2 text-xs text-neutral-600">
                Carefully curated dabba, handi, uruli, vilakku and kalasam
                collections with the right gauge, finish and balance.
              </p>
            </div>
            <div className="card-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b1e2d]">
                Global NRIs
              </p>
              <p className="mt-2 text-base font-semibold text-neutral-900">
                From Salem to the World
              </p>
              <p className="mt-2 text-xs text-neutral-600">
                We ship across Europe, USA, Australia and beyond – keeping
                traditional Indian cooking alive in every time zone.
              </p>
            </div>
          </div>
        </div>

        <aside className="card-surface border-[#c9a64d33] bg-gradient-to-br from-[#fff7e6] via-white to-[#f7f2e7] p-6 sm:p-8">
          <p className="badge-metal">Our Vision</p>
          <p className="mt-4 text-base font-semibold text-neutral-900">
            Improving Everyday Life, One Vessel at a Time.
          </p>
          <p className="mt-3 text-sm text-neutral-700">
            As shared on our original platform,{" "}
            <span className="font-semibold">
              our motto is to improve the quality of life for thousands of
              families
            </span>{" "}
            by offering products that are easy to use, easy to maintain and
            genuinely long lasting.
          </p>
          <p className="mt-3 text-sm text-neutral-700">
            This new metal-focused experience continues that vision, with clear
            specifications, transparent pricing and a premium shopping journey
            built for today&apos;s digital customer.
          </p>
          <div className="mt-5 space-y-2 text-xs text-neutral-600">
            <p>
              • Store: No 178, 1st Agraharam, Salem – 636001, Tamil Nadu, India
            </p>
            <p>• Working Hours: Mon – Sat, 10:30 AM – 09:00 PM (Store)</p>
            <p>• Customer Support: Mon – Sat, 10:30 AM – 07:00 PM (Phone)</p>
          </div>
        </aside>

        <div className="lg:col-span-2 mt-10 border-t border-neutral-200 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-neutral-500">
            What makes Meenakshi &amp; Meenakshi different?
          </h2>
          <div className="mt-4 grid gap-5 md:grid-cols-3 text-xs text-neutral-700">
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Curated, not crowded
              </p>
              <p className="mt-2">
                Instead of thousands of confusing listings, we hand-pick shapes,
                gauges and sizes that actually work in Indian homes – from
                bachelor kitchens to big joint families.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Specs you can trust
              </p>
              <p className="mt-2">
                Each product highlights material grade, approximate capacity and
                intended use, so you know exactly what you&apos;re buying – no
                guesswork, no hidden compromises.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Human-first support
              </p>
              <p className="mt-2">
                Our team still runs like a neighbourhood store – you can call,
                WhatsApp and speak to real people who understand both the
                website and the vessel in your kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


