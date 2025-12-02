export const metadata = {
  title: "My Account | Meenakshi & Meenakshi",
};

export default function AccountPage() {
  return (
    <div className="section-padding">
      <div className="container-fluid max-w-3xl">
        <h1 className="text-2xl font-semibold text-neutral-900">My Account</h1>
        <p className="mt-3 text-sm text-neutral-600">
          This section will host your profile, saved addresses, order history
          and wishlist – designed for both local and international metal
          shoppers.
        </p>
        <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 bg-white/80 p-6 text-sm text-neutral-500">
          Authentication and account features (login, registration, order
          tracking) will be implemented here in the next development phase.
        </div>
      </div>
    </div>
  );
}


