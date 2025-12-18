import Image from "next/image";
import Link from "next/link";
import { RestaurantCustomer } from "../types/restaurant";
import { ThemeClasses } from "../theme/themeClasses";

interface HeroProps {
  customer: RestaurantCustomer;
  themeClasses?: ThemeClasses;
}

export default function Hero({ customer, themeClasses }: HeroProps) {
  return (
    <section className="relative h-96 md:h-125 flex items-center justify-center text-center text-white">
      <Image
        src={customer.heroImage}
        alt={`${customer.name} hero image`}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1
          className={`text-4xl md:text-6xl font-bold mb-4 ${
            themeClasses?.heroText || "text-white"
          }`}
        >
          {customer.name}
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 ${
            themeClasses?.heroText || "text-white"
          }`}
        >
          {customer.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={customer.primaryCtaUrl}
            className={`${
              themeClasses?.accentButton || "bg-red-600 hover:bg-red-700"
            } ${
              themeClasses?.accentButtonText || "text-white"
            } px-6 py-3 rounded-lg font-semibold`}
          >
            {customer.primaryCtaText}
          </Link>
          <Link
            href={customer.secondaryCtaUrl}
            className={`${
              themeClasses?.secondaryButton ||
              "border border-white text-white hover:bg-white hover:bg-opacity-10"
            } px-6 py-3 rounded-lg font-semibold`}
          >
            {customer.secondaryCtaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
