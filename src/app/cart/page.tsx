export const metadata = {
  title: "Your Cart | Meenakshi & Meenakshi",
};

export default function CartPage() {
  return (
    <div className="section-padding">
      <div className="container-fluid max-w-3xl">
        <h1 className="text-2xl font-semibold text-neutral-900">Your Cart</h1>
        <p className="mt-3 text-sm text-neutral-600">
          Review your selected metal products before checkout. Quantities,
          variants and shipping will be confirmed on the next step.
        </p>
        <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 bg-white/80 p-6 text-sm text-neutral-500">
          Cart logic will be wired here in the next phase (add/remove items,
          quantity, totals and coupons). For now this page acts as a design and
          content placeholder.
        </div>
      </div>
    </div>
  );
}


