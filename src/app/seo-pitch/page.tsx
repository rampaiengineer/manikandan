"use client";

import { useRef } from "react";

export default function SeoPitchPage() {
  const pitchRef = useRef<HTMLDivElement | null>(null);

  const handleDownloadPdf = () => {
    if (!pitchRef.current) return;
    // Simple approach: open print dialog focused on the pitch content.
    // This keeps implementation lightweight while still allowing PDF export.
    const printContents = pitchRef.current.innerHTML;
    const printWindow = window.open("", "_blank", "width=1024,height=768");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Meenakshi & Meenakshi – SEO & Digital Revamp Pitch</title>
          <style>
            * { box-sizing: border-box; }
            body { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; margin: 24px; color: #111827; background: #f9fafb; }
            body > div { max-width: 1040px; margin: 0 auto; }
            h1, h2, h3 { color: #111827; }
            .slide { page-break-after: always; padding: 24px; border-radius: 16px; border: 1px solid #e5e7eb; background: #ffffff; box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06); margin-bottom: 24px; }
            .badge-metal { display: inline-flex; align-items: center; border-radius: 999px; border: 1px solid rgba(201, 166, 77, 0.4); background: #fffaf0; padding: 4px 12px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.18em; color: #8b1e2d; font-weight: 600; }
            .heading-gradient { color: #111827; }
            ul { padding-left: 1.25rem; margin-top: 8px; }
            li { margin-bottom: 4px; }
            img { max-width: 100%; height: auto; }
          </style>
        </head>
        <body>
          ${printContents}
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="section-padding">
      <div className="container-fluid space-y-10">
        {/* Header */}
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b1e2d]">
              Meenakshi &amp; Meenakshi · Metal Heritage
            </p>
            <h1 className="mt-3 text-2xl font-semibold sm:text-3xl lg:text-4xl heading-gradient">
              SEO, AEO & Digital Experience Revamp – Pitch Deck Content
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-neutral-600">
              A premium, search-optimized e-commerce experience that turns
              Meenakshi &amp; Meenakshi into the category leader for traditional
              Indian metalware across global markets.
            </p>
          </div>
          <button onClick={handleDownloadPdf} className="btn-primary">
            Download Pitch as PDF
          </button>
        </header>

        {/* Slides container */}
        <div ref={pitchRef} className="space-y-6 text-sm text-neutral-700">
          {/* Slide 1 – Vision & Outcome */}
          <section className="card-surface slide p-6 sm:p-8">
            <span className="badge-metal">Slide 1 · Vision & Outcome</span>
            <div className="mt-4 grid gap-6 md:grid-cols-[1.5fr,1fr] md:items-center">
              <div>
                <h2 className="flex items-center gap-3 text-xl font-semibold text-neutral-900">
                  <img
                    src="/pitch-vision.svg"
                    alt="Vision for Meenakshi &amp; Meenakshi digital growth"
                    className="h-9 w-9"
                  />
                  <span>
                    Vision: Premium, SEO-First Metalware Commerce for Global Buyers
                  </span>
                </h2>
                <p className="mt-3">
                  We will transform Meenakshi &amp; Meenakshi into a{" "}
                  <span className="font-semibold">
                    premium, animation-rich and high-conversion
                  </span>{" "}
                  e-commerce experience that showcases the heritage of South Indian
                  metal craft, while maximising discoverability across Google and modern
                  AI search engines.
                </p>
                <ul className="mt-4 list-disc space-y-1 pl-5">
                  <li>
                    <span className="font-semibold">Brand:</span> From offline-first
                    store to a globally recognised heritage metal brand.
                  </li>
                  <li>
                    <span className="font-semibold">Performance:</span> Fast,
                    mobile-first experience tuned for Core Web Vitals.
                  </li>
                  <li>
                    <span className="font-semibold">Revenue:</span> Better product
                    clarity, trust, and intent capture → higher conversion.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img
                  src="/pitch-vision.svg"
                  alt="Illustration of premium, high-growth digital storefront"
                  className="w-full max-w-xs rounded-2xl border border-neutral-200 bg-[#050816] object-contain p-4 shadow-sm"
                />
                <p className="text-[11px] text-center text-neutral-500">
                  Concept visual representing a premium, search-first storefront for
                  Meenakshi &amp; Meenakshi, independent of current product catalog.
                </p>
              </div>
            </div>
          </section>

          {/* Slide 2 – Why Revamp (SEO & UX Gaps) */}
          <section className="card-surface slide p-6 sm:p-8">
            <span className="badge-metal">Slide 2 · Current Gaps</span>
            <h2 className="mt-4 flex items-center gap-3 text-xl font-semibold text-neutral-900">
              <img
                src="/pitch-gaps.svg"
                alt="Current UX and SEO gaps"
                className="h-9 w-9"
              />
              <span>Why the Revamp is Critical Now</span>
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold">UI & Trust:</span> Current
                interface does not fully convey the heritage, craftsmanship, and
                premium quality of your metal collections.
              </li>
              <li>
                <span className="font-semibold">SEO:</span> Weak schema
                coverage, limited category depth, and thin product content keep
                rankings low for high-intent queries.
              </li>
              <li>
                <span className="font-semibold">Conversion:</span> Incomplete
                cart / checkout funnel and lack of micro-copy (trust badges,
                delivery info, returns) lead to drop-offs.
              </li>
              <li>
                <span className="font-semibold">Future Readiness:</span> No
                semantic search, no AI assistance and no personalization – which
                new-age buyers expect by default.
              </li>
            </ul>
          </section>

          {/* Slide 3 – SEO + AEO Strategy */}
          <section className="card-surface slide p-6 sm:p-8">
            <span className="badge-metal">Slide 3 · SEO + AEO</span>
            <h2 className="mt-4 flex items-center gap-3 text-xl font-semibold text-neutral-900">
              <img
                src="/pitch-seo.svg"
                alt="SEO and AEO blueprint"
                className="h-9 w-9"
              />
              <span>SEO + Answer Engine Optimization (AEO) Blueprint</span>
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">
                  Foundation: Structured Data & Technical Health
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>Product, Organization, Breadcrumb & FAQ schema.</li>
                  <li>
                    Rich snippets for price, availability, ratings, and review
                    highlights.
                  </li>
                  <li>
                    Clean URL structure and crawl-friendly category hierarchy.
                  </li>
                  <li>
                    Performance SEO: image optimization, lazy loading, and
                    Core Web Vitals tuning.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">
                  Content: Own Every High-Intent Metalware Query
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>
                    Deep product content: size, thickness, usage, care, and
                    comparison tables.
                  </li>
                  <li>
                    Topical clusters around{" "}
                    <span className="italic">
                      dabba, handi, adukku dabba, pooja sets, kalasam, vilakku,
                      copper water
                    </span>
                    .
                  </li>
                  <li>
                    FAQ & how-to content targeting voice + AI search questions
                    (Perplexity, ChatGPT, Gemini).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Slide 4 – IA & Category Strategy */}
          <section className="card-surface slide p-6 sm:p-8">
            <span className="badge-metal">Slide 4 · Information Architecture</span>
            <h2 className="mt-4 flex items-center gap-3 text-xl font-semibold text-neutral-900">
              <img
                src="/pitch-ia.svg"
                alt="Category and navigation map"
                className="h-9 w-9"
              />
              <span>Category, Navigation &amp; Discovery Strategy</span>
            </h2>
            <p className="mt-3">
              We design the site so both{" "}
              <span className="font-semibold">humans and search engines</span>{" "}
              immediately understand the full depth of your catalogue.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5">
              <li>
                Clear split into{" "}
                <span className="font-semibold">
                  Stainless Steel / Brass &amp; Pooja / Copper / Heritage
                  Traditional / Kitchen Essentials
                </span>
                .
              </li>
              <li>
                Faceted filters: capacity (litres), use-case (cooking / pooja /
                storage), stove compatibility, and finish.
              </li>
              <li>
                Cross-linking between related items (e.g.{" "}
                <span className="italic">handi → adukku dabba set → lids</span>
                ) to increase average order value.
              </li>
              <li>
                Dedicated landing pages for NRI buyers and festive collections
                (wedding, housewarming, Navratri, Deepavali).
              </li>
            </ul>
          </section>

          {/* Slide 5 – Modern E-commerce & AI Layer */}
          <section className="card-surface slide p-6 sm:p-8">
            <span className="badge-metal">Slide 5 · Experience & AI Layer</span>
            <h2 className="mt-4 flex items-center gap-3 text-xl font-semibold text-neutral-900">
              <img
                src="/pitch-ai.svg"
                alt="AI and semantic search experience"
                className="h-9 w-9"
              />
              <span>Modern E-commerce Experience with AI &amp; Semantic Search</span>
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">
                  Conversion-Focused UX
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>One-click add to cart and quick-view product cards.</li>
                  <li>Trust badges: shipping timelines, easy returns, COD / UPI.</li>
                  <li>
                    Smart recommendations: “Complete your set” and “People also
                    bought”.
                  </li>
                  <li>WhatsApp-first buying flow for high-ticket orders.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">
                  AI & Semantic Search + Usage Intelligence
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>
                    Semantic engine understands queries like “2 litre steel handi
                    for biryani”, “dabba for office tiffin for 2 people” or
                    “medium copper pooja kalasam”.
                  </li>
                  <li>
                    Every product tagged with{" "}
                    <span className="italic">
                      metal, capacity, thickness, flame type (gas / induction),
                      cuisine (idli / dosa / biryani / sambar), and usage
                      (pooja / storage / gifting)
                    </span>{" "}
                    so search results match real-life use cases.
                  </li>
                  <li>
                    AI assistant uses the same data to answer sizing questions
                    like “Which handi for 1 kg biryani for a family of 5?” and
                    guides users to the right SKU.
                  </li>
                  <li>
                    Multilingual prompts (Tamil + English) and WhatsApp
                    integration for quick, conversational purchase journeys.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Slide 6 – Market Trends & Opportunity */}
          <section className="card-surface slide p-6 sm:p-8">
            <span className="badge-metal">Slide 6 · Market Trends & Opportunity</span>
            <h2 className="mt-4 flex items-center gap-3 text-xl font-semibold text-neutral-900">
              <img
                src="/pitch-trends.svg"
                alt="Market and buyer trends"
                className="h-9 w-9"
              />
              <span>
                Why This Matters Now: Buyer Trends in Metalware &amp; Cross-Border Commerce
              </span>
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-center">
              <div>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Rising global interest in{" "}
                    <span className="font-semibold">
                      Indian cookware, tiffin culture and pooja items
                    </span>{" "}
                    among NRIs and wellness-focused buyers.
                  </li>
                  <li>
                    Shift from generic marketplaces to{" "}
                    <span className="font-semibold">
                      trusted, brand-owned stores
                    </span>{" "}
                    with better authenticity and product explanation.
                  </li>
                  <li>
                    Growth of{" "}
                    <span className="font-semibold">health narratives</span> –
                    copper water, brass cooking, and stainless-steel storage
                    replacing plastic in kitchens.
                  </li>
                  <li>
                    More buyers using{" "}
                    <span className="font-semibold">
                      conversational and AI-powered search
                    </span>{" "}
                    instead of typing single keywords.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-gradient-to-br from-[#fff7e6] via-white to-[#f7f2e7] p-4">
                <img
                  src="/pitch-trends.svg"
                  alt="Illustration of rising demand and global shoppers"
                  className="h-24 w-24 rounded-full border border-white bg-[#020617] object-contain p-3 shadow-md"
                />
                <p className="text-xs text-center text-neutral-700">
                  Visual positioning of Meenakshi &amp; Meenakshi as the{" "}
                  <span className="font-semibold">
                    global destination for authentic Indian metalware
                  </span>{" "}
                  – discoverable across search, social and AI assistants.
                </p>
              </div>
            </div>
          </section>

          {/* Slide 7 – Value Proposition & Closing */}
          <section className="card-surface slide p-6 sm:p-8">
            <span className="badge-metal">Slide 7 · Value & Closing</span>
            <h2 className="mt-4 flex items-center gap-3 text-xl font-semibold text-neutral-900">
              <img
                src="/pitch-value.svg"
                alt="Trust and value for Meenakshi &amp; Meenakshi"
                className="h-9 w-9"
              />
              <span>Value Proposition &amp; Next Steps</span>
            </h2>
            <p className="mt-3">
              <span className="font-semibold">
                “We will build a premium, SEO-optimized, future-ready metal
                products e-commerce platform
              </span>{" "}
              that increases brand visibility, improves customer engagement, and
              unlocks global demand for Meenakshi &amp; Meenakshi.”
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5">
              <li>
                From store-led to brand-led: a digital identity that matches
                your 50+ years of trust.
              </li>
              <li>
                Search + AI-first foundation that keeps compounding rankings and
                organic traffic.
              </li>
              <li>
                Flexible architecture ready for new categories, markets, and
                channels (marketplaces, B2B, gifting).
              </li>
            </ul>
            <p className="mt-4 font-semibold text-neutral-900">
              “This revamp is not just a redesign – it is a complete digital
              transformation to take Meenakshi &amp; Meenakshi to global markets with
              a modern, scalable, and high-conversion online store.”
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


