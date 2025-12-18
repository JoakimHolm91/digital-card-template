import { RestaurantCustomer } from "../types/restaurant";
import { ThemeClasses } from "../theme/themeClasses";

interface ReviewsProps {
  customer: RestaurantCustomer;
  themeClasses: ThemeClasses;
}

export default function Reviews({ customer, themeClasses }: ReviewsProps) {
  return (
    <section
      className={`py-16 ${themeClasses.pageBg} ${themeClasses.pageText}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-10 ${themeClasses.pageText}`}
        >
          Vad våra kunder säger
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {customer.reviews.map((review, index) => (
            <div
              key={index}
              className={`${themeClasses.cardBg} rounded-lg shadow-md p-6`}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center">
                  {review.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className={`font-semibold ${themeClasses.cardText}`}>
                    {review.author}
                  </h4>
                  {review.rating && (
                    <div className="text-amber-400">
                      {"★".repeat(review.rating)}
                    </div>
                  )}
                </div>
              </div>
              <p className={themeClasses.cardMutedText}>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
