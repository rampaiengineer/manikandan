import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Meenakshi & Meenakshi`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const savings = product.mrp - product.price;

  const related = products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.category === product.category || p.metal === product.metal)
    )
    .slice(0, 8);

  const addOns = products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.category === "Accessories" || p.category === "Water Bottle")
    )
    .slice(0, 3);

  return (
    <div className="section-padding">
      <div className="container-fluid space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div className="card-surface overflow-hidden border-[#d8d8d8] bg-gradient-to-br from-[#f7f7f7] to-[#ececec]">
            <div className="h-80 w-full overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff,_#d8d8d8)] sm:h-96">
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8b1e2d]">
              {product.isHeritage ? "Heritage Collection" : product.category}
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-neutral-900 sm:text-3xl">
              {product.name}
            </h1>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              {product.metal.toUpperCase()}
              {product.subcategory ? ` · ${product.subcategory}` : null}
            </p>
            <p className="mt-3 text-sm text-neutral-700">
              {product.description}
            </p>

            <div className="mt-5 flex flex-wrap items-end gap-3">
              <div>
                <p className="text-xs text-neutral-500">Price</p>
                <p className="text-2xl font-semibold text-[#8b1e2d]">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="text-xs text-neutral-500">
                <span className="line-through">
                  MRP ₹{product.mrp.toLocaleString("en-IN")}
                </span>
                {savings > 0 && (
                  <span className="ml-2 text-[#1a7f3b]">
                    Save ₹{savings.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button className="btn-primary">Add to Cart</button>
              <button className="btn-secondary text-xs">Buy Now</button>
            </div>

            {addOns.length > 0 && (
              <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-4 text-xs text-neutral-800">
                <p className="font-semibold text-neutral-900">
                  Recommended add-ons (optional)
                </p>
                <p className="mt-1 text-[11px] text-neutral-500">
                  Pair this with bottles and accessories customers often buy
                  together.
                </p>
                <div className="mt-3 space-y-2.5">
                  {addOns.map((a) => (
                    <Link
                      key={a.id}
                      href={`/product/${a.slug}`}
                      className="flex items-center justify-between gap-3 rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-2 hover:border-[#c9a64d66] hover:bg-white"
                    >
                      <div className="flex items-center gap-2.5">
                        {a.imageUrl && (
                          <img
                            src={a.imageUrl}
                            alt={a.shortName ?? a.name}
                            loading="lazy"
                            className="h-10 w-10 rounded-lg object-cover"
                          />
                        )}
                        <div>
                          <p className="text-[11px] font-medium text-neutral-900 line-clamp-1">
                            {a.shortName ?? a.name}
                          </p>
                          <p className="text-[10px] text-neutral-500 line-clamp-1">
                            ₹{a.price.toLocaleString("en-IN")} · {a.category}
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-[#8b1e2d]">
                        View
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 grid gap-4 rounded-2xl border border-neutral-200 bg-white p-4 text-xs text-neutral-700 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-neutral-900">Metal & Finish</p>
                <ul className="mt-2 space-y-1">
                  <li>• Metal: {product.metal.toUpperCase()}</li>
                  {product.materialGrade && (
                    <li>• Grade: {product.materialGrade}</li>
                  )}
                  {product.finish && <li>• Finish: {product.finish}</li>}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Capacity & Size
                </p>
                <ul className="mt-2 space-y-1">
                  {product.capacityLitres && (
                    <li>• Capacity: {product.capacityLitres} L (approx.)</li>
                  )}
                  {product.capacityMl && (
                    <li>• Capacity: {product.capacityMl} ml (approx.)</li>
                  )}
                  {product.sizeLabel && <li>• Size: {product.sizeLabel}</li>}
                  {product.thicknessGauge && (
                    <li>• Gauge: {product.thicknessGauge}</li>
                  )}
                  {product.weightGrams && (
                    <li>• Approx. weight: {product.weightGrams} g</li>
                  )}
                </ul>
              </div>
            </div>

            {product.isHeritage && (
              <div className="mt-5 rounded-2xl border border-[#c9a64d55] bg-[#fff7e6] p-4 text-xs text-neutral-800">
                <p className="font-semibold text-[#8b1e2d]">
                  Heritage Certified
                </p>
                <p className="mt-2">
                  This product is part of our{" "}
                  <span className="font-semibold">Heritage Collection</span> –
                  curated for auspicious occasions such as weddings,
                  housewarming, homam and festival poojas.
                </p>
              </div>
            )}

            {product.sourceUrl && (
              <p className="mt-4 text-[11px] text-neutral-500">
                Image reference:{" "}
                <a
                  href={product.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Original Meenakshi & Meenakshi listing
                </a>
              </p>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <section className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Related items
                </h2>
                <p className="mt-1 text-xs text-neutral-600">
                  More {product.category.toLowerCase()} and{" "}
                  {product.metal} pieces you may like.
                </p>
              </div>
              <Link
                href="/shop"
                className="text-xs font-semibold text-[#8b1e2d] underline underline-offset-4"
              >
                Browse all products
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="card-surface flex flex-col overflow-hidden hover:border-[#c9a64d66] hover:shadow-md"
                >
                  <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-[#f5f5f5] to-[#e4e4e4] sm:h-36">
                    {p.imageUrl && (
                      <img
                        src={p.imageUrl}
                        alt={p.shortName ?? p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-3">
                    <p className="line-clamp-2 text-xs font-semibold text-neutral-900">
                      {p.shortName ?? p.name}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                      {p.category}
                    </p>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="text-sm font-semibold text-[#8b1e2d]">
                        ₹{p.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[10px] text-neutral-400 line-through">
                        ₹{p.mrp.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}


