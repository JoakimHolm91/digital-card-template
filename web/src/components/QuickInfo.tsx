import { RestaurantCustomer } from "../types/restaurant";

interface QuickInfoProps {
  customer: RestaurantCustomer;
  themeClasses: {
    background: string;
    card: string;
    accent: string;
    textOnBackground: string;
    textOnCard: string;
    accentText: string;
  };
}

export default function QuickInfo({ customer, themeClasses }: QuickInfoProps) {
  const today = new Date()
    .toLocaleString("en-US", { weekday: "long" })
    .toLowerCase();
  const hours =
    customer.openingHours[today as keyof typeof customer.openingHours] ||
    "Stängt";

  return (
    <section className={`py-8 ${themeClasses.card}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className={`text-lg font-semibold ${themeClasses.textOnCard}`}>
              Dagens öppettider
            </h3>
            <p className={themeClasses.textOnCard}>{hours}</p>
            {customer.openingHours.specialNote && (
              <p className="text-sm text-gray-600 mt-1">
                {customer.openingHours.specialNote}
              </p>
            )}
          </div>
          <div>
            <h3 className={`text-lg font-semibold ${themeClasses.textOnCard}`}>Adress</h3>
            <p className={themeClasses.textOnCard}>
              {customer.address}, {customer.city}
            </p>
          </div>
          <div>
            <h3 className={`text-lg font-semibold ${themeClasses.textOnCard}`}>Telefon</h3>
            <a
              href={`tel:${customer.phone}`}
              className={`${themeClasses.textOnCard} hover:text-gray-600`}
            >
              {customer.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
