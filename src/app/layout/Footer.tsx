import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#1a1a1a] text-neutral-200">
      <div className="container-fluid section-padding grid gap-10 md:grid-cols-3">
        {/* Brand & Metal Icons */}
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-[#c9a64d]">
            MEENAKSHI & MEENAKSHI
          </p>
          <p className="mt-3 text-xl font-semibold text-white">
            Metal Heritage Since 1970
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            Premium stainless steel, brass and copper collections crafted for
            traditional Indian kitchens around the world.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/icon-steel.svg"
                alt="Steel icon"
                className="h-7 w-7"
                loading="lazy"
              />
              <span className="text-xs text-neutral-300">Steel</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/icon-brass.svg"
                alt="Brass icon"
                className="h-7 w-7"
                loading="lazy"
              />
              <span className="text-xs text-neutral-300">Brass</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/icon-copper.svg"
                alt="Copper icon"
                className="h-7 w-7"
                loading="lazy"
              />
              <span className="text-xs text-neutral-300">Copper</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            Store: No 178, 1st Agraharam, Salem - 636001, Tamil Nadu, India
          </p>
        </div>

        {/* Shop & Help */}
        <div>
          <h3 className="text-sm font-semibold text-white">Shop by Metal</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li>
              <Link href="/shop/steel">Steel Products</Link>
            </li>
            <li>
              <Link href="/shop/brass">Brass & Pooja</Link>
            </li>
            <li>
              <Link href="/shop/copper">Copper Collection</Link>
            </li>
            <li>
              <Link href="/heritage">Heritage Collections</Link>
            </li>
          </ul>

          <h3 className="mt-6 text-sm font-semibold text-white">Customer Care</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li>
              <Link href="/customer-service/shipping">Shipping & Delivery</Link>
            </li>
            <li>
              <Link href="/customer-service/returns">Returns & Refunds</Link>
            </li>
            <li>
              <Link href="/customer-service/contact">Contact Support</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Policies */}
        <div>
          <h3 className="text-sm font-semibold text-white">Contact & Support</h3>
          <p className="mt-3 text-xs text-neutral-400">
            English Support: John – 9626666840
            <br />
            Tamil & WhatsApp Orders: Siva – 9626666440
          </p>
          <p className="mt-3 text-xs text-neutral-500">
            Mon – Sat: 10:30 AM – 07:00 PM IST
          </p>
          <div className="mt-4 text-[11px] text-neutral-500">
            <p className="mb-1">
              <Link href="/customer-service/shipping" className="underline">
                Shipping Policy
              </Link>{" "}
              ·{" "}
              <Link href="/customer-service/returns" className="underline">
                Return &amp; Refund Policy
              </Link>
            </p>
            <p>Privacy Policy · Terms &amp; Conditions</p>
          </div>
          <p className="mt-4 text-xs text-neutral-600">
            © {new Date().getFullYear()} Meenakshi &amp; Meenakshi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

