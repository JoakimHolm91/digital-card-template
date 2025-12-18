import Image from "next/image";
import { RestaurantCustomer } from "../types/restaurant";
import { ThemeClasses } from "../theme/themeClasses";

interface FeaturedItemsProps {
  customer: RestaurantCustomer;
  themeClasses: ThemeClasses;
}

export default function FeaturedItems({
  customer,
  themeClasses,
}: FeaturedItemsProps) {
  return (
    <section className="relative py-12 min-h-[400px]">
      <Image
        src="/images/hero2.jpg"
        alt="Featured items background"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${themeClasses.heroText}`}
        >
          Utvalda rätter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customer.featuredItems.map((item, index) => (
            <div
              key={index}
              className={`${themeClasses.cardBg} rounded-lg shadow-md p-6`}
            >
              <h3
                className={`text-xl font-semibold ${themeClasses.cardText} mb-2`}
              >
                {item.name}
              </h3>
              <p className={`${themeClasses.cardMutedText} mb-4`}>
                {item.description}
              </p>
              <p className={`text-lg font-bold ${themeClasses.cardText}`}>
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
