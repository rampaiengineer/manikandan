export const metadata = {
  title: "Returns & Refunds | Meenakshi & Meenakshi",
};

export default function ReturnsPage() {
  return (
    <div className="section-padding">
      <div className="container-fluid max-w-3xl">
        <h1 className="text-2xl font-semibold text-neutral-900">
          Returns & Refunds
        </h1>
        <p className="mt-3 text-sm text-neutral-600">
          Our return and refund guidelines are inspired by the original
          Meenakshi & Meenakshi policies, adapted for a clearer and more modern
          shopping experience.
        </p>

        <div className="mt-6 space-y-4 text-xs text-neutral-700">
          <section>
            <h2 className="text-sm font-semibold text-neutral-900">
              Damaged or Defective Products
            </h2>
            <p className="mt-2">
              If you receive a damaged or defective item, please share clear
              photos and your order details with our support team within 48
              hours of delivery. After review, we will arrange for:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>A replacement of the same product (subject to stock), or</li>
              <li>
                A refund as per the condition of the product and packaging.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-neutral-900">
              Return Shipping
            </h2>
            <p className="mt-2">
              In alignment with the note on the current website, customers are
              requested to send any products requiring service or return through
              reliable transport (lorry services or equivalent). The{" "}
              <span className="font-semibold">
                cost of sending the product to us is borne by the customer
              </span>
              , while Meenakshi & Meenakshi will take care of the freight
              charges for sending the repaired or replacement product back to
              you.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-neutral-900">
              Non-Refundable Orders
            </h2>
            <p className="mt-2">
              As clearly stated in the reminder on the existing platform, once
              an order is successfully placed and processed, the{" "}
              <span className="font-semibold">
                amount is generally non-refundable
              </span>
              . Refunds are considered only in genuine cases such as confirmed
              damage, mis-shipment or non-availability of stock.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-neutral-900">
              Support for Returns
            </h2>
            <p className="mt-2">
              For any return or refund queries, please contact our dedicated
              Complaints & Returns team using the numbers listed on the
              Customer Service page. We will guide you step by step and keep you
              updated throughout the process.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


