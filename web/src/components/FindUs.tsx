import { RestaurantCustomer } from "../types/restaurant";
import { ThemeClasses } from "../theme/themeClasses";

interface FindUsProps {
  customer: RestaurantCustomer;
  themeClasses: ThemeClasses;
}

export default function FindUs({ customer, themeClasses }: FindUsProps) {
  return (
    <section
      id="find-us"
      aria-labelledby="find-us-heading"
      className={`py-12 ${themeClasses.cardBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="find-us-heading"
          className={`text-3xl font-bold text-center mb-8 ${themeClasses.cardText}`}
        >
          Hitta oss
        </h2>
        <div className="text-center">
          <p
            className={`text-lg ${
              themeClasses?.cardMutedText || "text-gray-700"
            } mb-4`}
          >
            {customer.address}, {customer.city}
          </p>
          <a
            href={customer.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block ${
              themeClasses?.accentButton || "bg-blue-600 hover:bg-blue-700"
            } ${
              themeClasses?.accentButtonText || "text-white"
            } px-6 py-3 rounded-lg font-semibold`}
          >
            Se på Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
