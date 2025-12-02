"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import type { Product, MetalType } from "@/types/product";

interface ShopFiltersProps {
  allProducts: Product[];
}

type MetalFilter = "all" | MetalType;

type PriceFilter = "all" | "lt500" | "500to1500" | "gt1500";

function scoreProductSemantic(product: Product, query: string): number {
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  const tokens = q.split(/\s+/).filter(Boolean);

  const haystack = [
    product.name,
    product.shortName ?? "",
    product.description,
    product.category,
    product.subcategory ?? "",
    product.metal,
    ...(product.tags ?? []),
  ]
    .join(" ")
    .toLowerCase();

  let score = 0;

  // Full phrase match
  if (haystack.includes(q)) score += 25;

  // Token presence
  for (const token of tokens) {
    if (haystack.includes(token)) {
      score += 8;
    }
  }

  // Strong boosts for common kitchen terms
  if (q.includes("dabba") && haystack.includes("dabba")) score += 12;
  if (q.includes("handi") && haystack.includes("handi")) score += 12;
  if (q.includes("bottle") && haystack.includes("bottle")) score += 10;
  if (q.includes("sambadam") && haystack.includes("sambadam")) score += 10;
  if (q.includes("pooja") && haystack.includes("pooja")) score += 10;

  // Metal hints
  if (q.includes("steel") && product.metal === "steel") score += 8;
  if (q.includes("brass") && product.metal === "brass") score += 8;
  if (q.includes("copper") && product.metal === "copper") score += 8;

  return score;
}

interface SelectOption {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
}

function SearchableSelect({
  value,
  onChange,
  options,
  placeholder,
}: SearchableSelectProps) {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState("");

  const selected = options.find((o) => o.value === value);
  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="relative min-w-[180px] text-xs">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-left text-neutral-800 shadow-sm hover:border-[#c9a64d]"
      >
        <span className="line-clamp-1">
          {selected?.label ?? placeholder ?? "Select"}
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
      </button>

      {open && (
        <div className="absolute z-30 mt-1 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
          <div className="border-b border-neutral-100 px-2 py-1.5">
            <input
              autoFocus
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Type to filter..."
              className="h-7 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-2 text-[11px] outline-none placeholder:text-neutral-400"
            />
          </div>
          <div className="max-h-52 overflow-y-auto py-1 text-xs">
            {filtered.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                  setTerm("");
                }}
                className={`flex w-full items-center px-3 py-1.5 text-left hover:bg-neutral-50 ${
                  opt.value === value ? "bg-neutral-50 font-semibold" : ""
                }`}
              >
                <span className="line-clamp-1">{opt.label}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="px-3 py-2 text-[11px] text-neutral-400">
                No matches
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function ShopFilters({ allProducts }: ShopFiltersProps) {
  const [query, setQuery] = useState("");
  const [metalFilter, setMetalFilter] = useState<MetalFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [heritageOnly, setHeritageOnly] = useState(false);
  const [pageSize, setPageSize] = useState<number>(24);
  const [page, setPage] = useState<number>(1);

  // Initialize query state from the current URL's search params on the client
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get("query") ?? "";
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, []);

  const categories = useMemo(
    () => Array.from(new Set(allProducts.map((p) => p.category))).sort(),
    [allProducts]
  );

  const categoryOptions: SelectOption[] = useMemo(
    () => [
      { value: "all", label: "All categories" },
      ...categories.map((cat) => ({
        value: cat,
        label: cat,
      })),
    ],
    [categories]
  );

  const priceOptions: SelectOption[] = [
    { value: "all", label: "All prices" },
    { value: "lt500", label: "Below ₹500" },
    { value: "500to1500", label: "₹500 – ₹1500" },
    { value: "gt1500", label: "Above ₹1500" },
  ];

  const pageSizeOptions: SelectOption[] = [
    { value: "24", label: "24 / page" },
    { value: "50", label: "50 / page" },
    { value: "100", label: "100 / page" },
  ];

  useEffect(() => {
    // Reset to first page whenever filters or search change
    setPage(1);
  }, [query, metalFilter, categoryFilter, priceFilter, heritageOnly, allProducts.length]);

  const filteredProducts = useMemo(() => {
    const base = allProducts.filter((p) => {
      if (heritageOnly && !p.isHeritage) return false;
      if (metalFilter !== "all" && p.metal !== metalFilter) return false;
      if (categoryFilter !== "all" && p.category !== categoryFilter) return false;

      if (priceFilter === "lt500" && p.price >= 500) return false;
      if (priceFilter === "500to1500" && (p.price < 500 || p.price > 1500))
        return false;
      if (priceFilter === "gt1500" && p.price <= 1500) return false;

      return true;
    });

    if (!query.trim()) {
      // No search query: sort by price so the grid feels organised
      return [...base].sort((a, b) => a.price - b.price);
    }

    const scored = base
      .map((p) => ({
        product: p,
        score: scoreProductSemantic(p, query),
      }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score);

    return scored.map((x) => x.product);
  }, [allProducts, metalFilter, categoryFilter, priceFilter, heritageOnly, query]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="mt-6 space-y-6">
      {/* Search + metal quick filter row */}
      <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white/80 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
            Search
          </p>
          <div className="mt-2 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 shadow-sm shadow-[#c9a64d1a]">
            <Search className="h-4 w-4 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: 2L steel handi, sambadam set, copper kalasam..."
              className="h-8 flex-1 bg-transparent text-xs outline-none placeholder:text-neutral-400 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:w-[260px]">
          {(["all", "steel", "brass", "copper"] as MetalFilter[]).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setMetalFilter(value)}
              className={`inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-medium transition ${
                metalFilter === value
                  ? "bg-[#8b1e2d] text-white"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-[#c9a64d] hover:text-[#8b1e2d]"
              }`}
            >
              {value === "all"
                ? "All Metals"
                : value === "steel"
                ? "Steel"
                : value === "brass"
                ? "Brass"
                : "Copper"}
            </button>
          ))}
        </div>
      </div>

      {/* Secondary filters row */}
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Category
          </span>
          <SearchableSelect
            value={categoryFilter}
            onChange={setCategoryFilter}
            options={categoryOptions}
            placeholder="All categories"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Price
          </span>
          <SearchableSelect
            value={priceFilter}
            onChange={(v) => setPriceFilter(v as PriceFilter)}
            options={priceOptions}
            placeholder="All prices"
          />
        </div>

        <label className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-800 shadow-sm">
          <input
            type="checkbox"
            checked={heritageOnly}
            onChange={(e) => setHeritageOnly(e.target.checked)}
            className="h-3.5 w-3.5 rounded border-neutral-300 text-[#8b1e2d] focus:ring-[#c9a64d]"
          />
          <span>Heritage only</span>
        </label>

        <button
          type="button"
          onClick={() => {
            setQuery("");
            setMetalFilter("all");
            setCategoryFilter("all");
            setPriceFilter("all");
            setHeritageOnly(false);
          }}
          className="ml-auto inline-flex items-center justify-center rounded-full border border-neutral-200 px-3 py-1.5 text-[11px] font-medium text-neutral-600 hover:border-neutral-400"
        >
          Clear filters
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
        <p>
          Showing{" "}
          <span className="font-semibold text-neutral-800">
            {totalItems === 0 ? 0 : startIndex + 1}
          </span>{" "}
          –{" "}
          <span className="font-semibold text-neutral-800">
            {Math.min(endIndex, totalItems)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-neutral-800">{allProducts.length}</span>{" "}
          items
        </p>

        <div className="flex items-center gap-2">
          <span className="uppercase tracking-[0.18em] text-neutral-400">
            Per page
          </span>
          <SearchableSelect
            value={String(pageSize)}
            onChange={(v) => setPageSize(Number(v) || 24)}
            options={pageSizeOptions}
            placeholder="24 / page"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-3 py-1.5 text-[11px] font-medium text-neutral-600 disabled:cursor-not-allowed disabled:opacity-40 hover:border-neutral-400"
          >
            Prev
          </button>
          <span className="text-[11px] text-neutral-500">
            Page{" "}
            <span className="font-semibold text-neutral-800">{currentPage}</span>{" "}
            of{" "}
            <span className="font-semibold text-neutral-800">{totalPages}</span>
          </span>
          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-3 py-1.5 text-[11px] font-medium text-neutral-600 disabled:cursor-not-allowed disabled:opacity-40 hover:border-neutral-400"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleProducts.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.slug}`}
            className="card-surface flex flex-col overflow-hidden hover:border-[#c9a64d66] hover:shadow-md"
          >
            <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-[#f5f5f5] to-[#e4e4e4]">
              {p.imageUrl ? (
                <img
                  src={p.imageUrl}
                  alt={p.shortName ?? p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  MM METAL
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="line-clamp-2 text-sm font-semibold text-neutral-900">
                {p.shortName ?? p.name}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                {p.category}
              </p>
              {p.sizeLabel && (
                <p className="mt-1 text-[11px] text-neutral-600">
                  Size: {p.sizeLabel}
                </p>
              )}
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-sm font-semibold text-[#8b1e2d]">
                  ₹{p.price.toLocaleString("en-IN")}
                </span>
                <span className="text-[11px] text-neutral-400 line-through">
                  ₹{p.mrp.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="mt-2 text-[11px] text-neutral-500">
                {p.description.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


