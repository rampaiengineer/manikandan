"use client";

import { useMemo, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { products } from "@/data/products";

function scoreProduct(name: string, description: string, tags: string[], query: string): number {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  const n = name.toLowerCase();
  const d = description.toLowerCase();
  let score = 0;

  if (n === q) score += 30;
  if (n.includes(q)) score += 20;
  if (d.includes(q)) score += 10;
  if (tags.some((t) => t.toLowerCase().includes(q))) score += 15;

  // Simple keyword boosts
  if (q.includes("dabba") && (n.includes("dabba") || d.includes("dabba"))) score += 10;
  if (q.includes("handi") && (n.includes("handi") || d.includes("handi"))) score += 10;
  if (q.includes("bottle") && (n.includes("bottle") || d.includes("bottle"))) score += 8;

  return score;
}

export function HeroSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const scored = products
      .map((p) => ({
        product: p,
        score: scoreProduct(p.name, p.description, p.tags ?? [], query),
      }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    return scored.map((x) => x.product);
  }, [query]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (suggestions[0]) {
      router.push(`/product/${suggestions[0].slug}`);
    } else if (query.trim()) {
      router.push(`/shop?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="relative mt-6 max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 shadow-sm shadow-[#c9a64d1a]"
      >
        <Search className="h-4 w-4 text-neutral-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 120)}
          placeholder="Search: 2L steel handi, sambadam set, copper kalasam..."
          className="h-8 flex-1 bg-transparent text-xs outline-none placeholder:text-neutral-400 sm:text-sm"
        />
        <button
          type="submit"
          className="hidden rounded-full bg-[#8b1e2d] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#68121f] sm:inline-block"
        >
          Search
        </button>
      </form>

      {focused && suggestions.length > 0 && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white text-xs shadow-lg">
          {suggestions.map((p) => (
            <button
              key={p.id}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                router.push(`/product/${p.slug}`);
              }}
              className="flex w-full flex-col items-start gap-0.5 px-4 py-2.5 text-left hover:bg-neutral-50"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {p.category}
              </span>
              <span className="text-xs font-medium text-neutral-900 line-clamp-1">
                {p.shortName ?? p.name}
              </span>
              <span className="text-[11px] text-neutral-500 line-clamp-1">
                ₹{p.price.toLocaleString("en-IN")}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


