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
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Dagens öppettider
            </h3>
            <p className="text-gray-700">{hours}</p>
            {customer.openingHours.specialNote && (
              <p className="text-sm text-gray-600 mt-1">
                {customer.openingHours.specialNote}
              </p>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Adress</h3>
            <p className="text-gray-700">
              {customer.address}, {customer.city}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Telefon</h3>
            <a
              href={`tel:${customer.phone}`}
              className="text-gray-700 hover:text-gray-900"
            >
              {customer.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
