import Link from "next/link";
import { HeroSearch } from "@/components/HeroSearch";
import { HeroSlider } from "@/components/HeroSlider";
import { getFeaturedProducts } from "@/data/products";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-fluid grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b1e2d]">
              Since 1970 · Salem
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl heading-gradient">
              Premium Steel, Brass & Copper for Traditional Indian Kitchens.
            </h1>
            <p className="mt-5 max-w-xl text-sm sm:text-base text-neutral-600">
              Meenakshi & Meenakshi brings authentic pooja, cookware and kitchen
              vessels crafted in stainless steel, brass and copper – trusted by
              generations of Indian families across the world.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                Shop Metal Collections
              </Link>
              <Link
                href="/heritage"
                className="btn-secondary border border-neutral-800/40"
              >
                Explore Heritage Collections
              </Link>
            </div>
            <HeroSearch />
            <div className="mt-6 flex flex-wrap gap-6 text-xs text-neutral-600">
              <div>
                <p className="font-semibold text-neutral-900">
                  50+ Years Heritage
                </p>
                <p>Traditional designs tuned for modern kitchens.</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Global Shipping
                </p>
                <p>Trusted by NRIs across Europe, USA & Australia.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(255,247,230,0.9),_transparent_55%),linear-gradient(135deg,_#f5f5f5,_#e1c16e1a)]" />
            <div className="space-y-4">
              <HeroSlider />
              <div className="card-surface relative overflow-hidden border-[#e1c16e55] bg-gradient-to-br from-[#fff7e6] via-white to-[#f7f2e7]">
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#c9a64d] to-[#b87333] opacity-25 blur-2xl" />
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#8b1e2d] to-black opacity-15 blur-2xl" />
                <div className="absolute inset-x-10 top-10 h-32 rounded-full bg-gradient-to-r from-white/60 via-transparent to-white/40 opacity-70" />
                <div className="relative space-y-4 p-6 sm:p-8">
              <span className="badge-metal">Heritage Special</span>
              <p className="text-lg font-semibold text-[#1a1a1a]">
                Discover our Heritage Collections
              </p>
              <p className="text-sm text-neutral-600">
                Curated bridal, pooja and festival metal sets – thoughtfully
                designed in brass and copper to celebrate auspicious moments.
              </p>
                  <ul className="mt-2 space-y-1 text-xs text-neutral-600">
                    <li>• Bridal pooja & heritage gift sets</li>
                    <li>• Hand-hammered uruli, vilakku & kalasam</li>
                    <li>• Gift-ready packaging for weddings & housewarming</li>
                  </ul>
                  <Link
                    href="/heritage"
                    className="mt-4 inline-flex text-xs font-semibold text-[#8b1e2d] underline underline-offset-4"
                  >
                    View Heritage Collections
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="section-padding pt-0">
        <div className="container-fluid">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-900">
              Shop by Metal
            </h2>
            <Link
              href="/shop"
              className="text-xs font-semibold text-[#8b1e2d] underline underline-offset-4"
            >
              View all products
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                label: "Stainless Steel",
                href: "/shop/steel",
                note: "Dabba, handi, rail sets & more",
                bg: "from-[#d8d8d8] to-[#ffffff]",
              },
              {
                label: "Brass & Pooja",
                href: "/shop/brass",
                note: "Lamps, kalasam, uruli",
                bg: "from-[#e1c16e] to-[#fff7e6]",
              },
              {
                label: "Copper",
                href: "/shop/copper",
                note: "Water pots, lota, bottles",
                bg: "from-[#b87333] to-[#ffe6d5]",
              },
              {
                label: "Heritage Collections",
                href: "/heritage",
                note: "Bridal & festival sets",
                bg: "from-[#8b1e2d] to-[#c9a64d]",
              },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`card-surface group relative overflow-hidden bg-gradient-to-br ${cat.bg} min-h-[150px]`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_60%)] opacity-80 group-hover:opacity-100 transition" />
                <div className="relative flex h-full flex-col justify-between p-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                      Category
                    </p>
                    <p className="mt-2 text-sm font-semibold text-neutral-900">
                      {cat.label}
                    </p>
                  </div>
                  <p className="mt-2 text-xs text-neutral-700">{cat.note}</p>
                  <span className="mt-3 text-[11px] font-semibold text-[#8b1e2d]">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Deals Section */}
      <section className="section-padding pt-0">
        <div className="container-fluid">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-900">
              Today&apos;s Top Metal Deals
            </h2>
            <span className="text-xs text-neutral-500">
              Hand-picked combos and bestsellers from Meenakshi &amp; Meenakshi
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featured.slice(0, 8).map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.slug}`}
                className="card-surface flex flex-col overflow-hidden hover:border-[#c9a64d66] hover:shadow-md"
              >
                <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-[#f5f5f5] to-[#e4e4e4]">
                  {p.imageUrl && (
                    <img
                      src={p.imageUrl}
                      alt={p.shortName ?? p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="line-clamp-2 text-sm font-semibold text-neutral-900">
                    {p.shortName ?? p.name}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    {p.category}
                  </p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-[#8b1e2d]">
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[11px] text-neutral-400 line-through">
                      ₹{p.mrp.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

