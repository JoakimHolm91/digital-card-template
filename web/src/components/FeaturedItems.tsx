import { RestaurantCustomer } from "../types/restaurant";

interface FeaturedItemsProps {
  customer: RestaurantCustomer;
}

export default function FeaturedItems({ customer }: FeaturedItemsProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Utvalda rätter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customer.featuredItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-lg font-bold text-gray-900">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
