import { RestaurantCustomer } from "../types/restaurant";

interface QuickInfoProps {
  customer: RestaurantCustomer;
}

export default function QuickInfo({ customer }: QuickInfoProps) {
  const today = new Date()
    .toLocaleString("en-US", { weekday: "long" })
    .toLowerCase();
  const hours =
    customer.openingHours[today as keyof typeof customer.openingHours] ||
    "Stängt";

  return (
    <section className="relative py-6">
      {/* Glass panel */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-black/40 backdrop-blur-md ring-1 ring-white/10">
          <div className="grid grid-cols-1 gap-6 px-6 py-6 text-center md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Dagens öppettider
              </h3>
              <p className="text-white/90">{hours}</p>
              {customer.openingHours.specialNote && (
                <p className="mt-1 text-sm text-white/70">
                  {customer.openingHours.specialNote}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Adress</h3>
              <p className="text-white/90">
                {customer.address}, {customer.city}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Telefon</h3>
              <a
                href={`tel:${customer.phone}`}
                className="text-white/90 underline underline-offset-4 hover:text-white"
              >
                {customer.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
