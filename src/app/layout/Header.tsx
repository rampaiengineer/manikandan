"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, Phone, User, X } from "lucide-react";

const mainNav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/heritage", label: "Heritage Collections" },
  { href: "/about", label: "About" },
  { href: "/customer-service", label: "Customer Service" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
      <div className="container-fluid flex h-16 items-center justify-between gap-3 sm:h-20">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#c9a64d] to-[#b87333] text-white shadow-md">
            <span className="text-lg font-semibold">MM</span>
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold tracking-wide text-[#1a1a1a] sm:text-lg">
              Meenakshi & Meenakshi
            </p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8b1e2d] sm:text-xs">
              Since 1970 · Metal Heritage
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-800 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative pb-1 transition hover:text-[#8b1e2d]"
            >
              {item.label}
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#c9a64d] to-[#b87333] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-700 shadow-sm hover:border-[#c9a64d] hover:text-[#8b1e2d] sm:inline-flex">
            <Phone className="h-3.5 w-3.5 text-[#c9a64d]" />
            <span>Support</span>
          </button>
          <Link
            href="/account"
            className="hidden rounded-full border border-neutral-200 bg-white p-2 text-neutral-700 shadow-sm hover:border-[#c9a64d] hover:text-[#8b1e2d] sm:inline-flex"
          >
            <User className="h-4 w-4" />
          </Link>
          <Link
            href="/cart"
            className="relative inline-flex items-center gap-1.5 rounded-full bg-[#8b1e2d] px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-[#8b1e2d3d] hover:bg-[#68121f] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c9a64d] text-[11px] font-semibold text-black">
              0
            </span>
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-sm hover:border-[#c9a64d] hover:text-[#8b1e2d] lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white/95 backdrop-blur lg:hidden">
          <div className="container-fluid py-3">
            <nav className="flex flex-col gap-1 text-sm font-medium text-neutral-800">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2 hover:bg-neutral-50"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                    Go
                  </span>
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-2 text-xs text-neutral-600">
                <Phone className="h-3.5 w-3.5 text-[#c9a64d]" />
                <span>Support: 9626666840 / 9626666440</span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}


