import { RestaurantCustomer } from '../types/restaurant';

interface FindUsProps {
  customer: RestaurantCustomer;
}

export default function FindUs({ customer }: FindUsProps) {
  return (
    <section id="find-us" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Find Us</h2>
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            {customer.address}, {customer.city}
          </p>
          <a
            href={customer.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}