import { Suspense } from "react";
import { getHeritageProducts } from "@/data/products";
import { ShopFilters } from "@/components/ShopFilters";

export const metadata = {
  title: "Heritage Collections | Meenakshi & Meenakshi",
  description:
    "Explore curated bridal and festival metal sets in brass and copper – vilakku, kalasam, uruli and pooja collections for auspicious occasions.",
};

export default function HeritagePage() {
  const heritageProducts = getHeritageProducts();

  return (
    <div className="section-padding">
      <div className="container-fluid">
        <header className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b1e2d]">
            Heritage Collections
          </p>
          <h1 className="mt-3 text-2xl font-semibold heading-gradient sm:text-3xl">
            Auspicious Metal Sets for Weddings, Pooja & Festivals.
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            From brass vilakku sets to copper kalasam and uruli, each heritage
            piece is chosen to honour tradition, temple-inspired aesthetics and
            everyday practicality. Ideal for weddings, housewarmings and
            festival gifting.
          </p>
        </header>

        <Suspense
          fallback={
            <p className="text-xs text-neutral-500">Loading heritage sets…</p>
          }
        >
          <ShopFilters allProducts={heritageProducts} />
        </Suspense>
      </div>
    </div>
  );
}


