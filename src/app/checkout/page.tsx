export const metadata = {
  title: "Checkout | Meenakshi & Meenakshi",
};

export default function CheckoutPage() {
  return (
    <div className="section-padding">
      <div className="container-fluid max-w-3xl">
        <h1 className="text-2xl font-semibold text-neutral-900">Checkout</h1>
        <p className="mt-3 text-sm text-neutral-600">
          Secure checkout for your Meenakshi & Meenakshi metal order. Fill in
          your address, review shipping and complete payment safely.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr,1fr]">
          <div className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-5 text-xs text-neutral-700">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Step 1 · Shipping Details
            </p>
            <p>
              A full address and shipping form will be implemented here – with
              support for India & international deliveries (Europe, USA,
              Australia and more).
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Step 2 · Payment
            </p>
            <p>
              Payment gateway integration (Stripe / Razorpay International) will
              appear in this section with card, UPI and net banking options.
            </p>
          </div>

          <aside className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5 text-xs text-neutral-700">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Order Summary
            </p>
            <p>
              A concise breakdown of items, metal type, quantity and prices will
              be displayed here, along with shipping charges and coupon
              discounts.
            </p>
            <p className="mt-2 text-[11px] text-neutral-500">
              By placing this order you agree to our Shipping Policy and Return
              & Refund Policy, aligned with the original Meenakshi & Meenakshi
              terms.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}


