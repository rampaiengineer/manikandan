import { products } from "@/data/products";
import { ShopFilters } from "@/components/ShopFilters";

export const metadata = {
  title: "Shop All Metal Products | Meenakshi & Meenakshi",
  description:
    "Browse premium stainless steel, brass, copper and heritage pooja utensils – dabba, handi, uruli, vilakku and more.",
};

export default function ShopPage() {
  return (
    <div className="section-padding">
      <div className="container-fluid">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b1e2d]">
            Shop
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-neutral-900 sm:text-3xl">
            All Metal Collections
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-neutral-600">
            Discover carefully curated steel, brass, copper and heritage pieces
            for cooking, serving, storage and pooja – all with clear
            specifications and transparent pricing.
          </p>
        </header>

        <ShopFilters allProducts={products} />
      </div>
    </div>
  );
}


