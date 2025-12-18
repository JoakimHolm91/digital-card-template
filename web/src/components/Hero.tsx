import Image from 'next/image';
import Link from 'next/link';
import { RestaurantCustomer } from '../types/restaurant';

interface HeroProps {
  customer: RestaurantCustomer;
}

export default function Hero({ customer }: HeroProps) {
  return (
    <section className="relative h-96 md:h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src={customer.heroImage}
        alt={`${customer.name} hero image`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{customer.name}</h1>
        <p className="text-xl md:text-2xl mb-8">{customer.tagline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={customer.primaryCtaUrl}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
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