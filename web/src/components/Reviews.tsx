import { RestaurantCustomer } from "../types/restaurant";

interface ReviewsProps {
  customer: RestaurantCustomer;
}

export default function Reviews({ customer }: ReviewsProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Vad våra kunder säger
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {customer.reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  {review.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    {review.author}
                  </h4>
                  {review.rating && (
                    <div className="text-yellow-400">
                      {"★".repeat(review.rating)}
                    </div>
                  )}
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
