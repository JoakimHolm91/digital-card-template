import Image from "next/image";
import Link from "next/link";
import { RestaurantCustomer } from "../types/restaurant";

interface HeroProps {
  customer: RestaurantCustomer;
  themeClasses?: {
    background: string;
    card: string;
    accent: string;
    textOnBackground: string;
    textOnCard: string;
    accentText: string;
  };
}

export default function Hero({ customer, themeClasses }: HeroProps) {
  return (
    <section className="relative h-96 md:h-[500px] flex items-center justify-center text-center text-white">
      <img
        src={customer.heroImage}
        alt={`${customer.name} hero image`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{customer.name}</h1>
        <p className="text-xl md:text-2xl mb-8">{customer.tagline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={customer.primaryCtaUrl}
            className={`${themeClasses?.accent || 'bg-red-600'} hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold`}
          >
            {customer.primaryCtaText}
          </Link>
          <Link
            href={customer.secondaryCtaUrl}
            className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
          >
            {customer.secondaryCtaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
