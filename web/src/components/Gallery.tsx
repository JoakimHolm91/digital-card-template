import Image from "next/image";
import { RestaurantCustomer } from "../types/restaurant";
import { ThemeClasses } from "../theme/themeClasses";

interface GalleryProps {
  customer: RestaurantCustomer;
  themeClasses?: ThemeClasses;
}

export default function Gallery({ customer, themeClasses }: GalleryProps) {
  return (
    <section
      className={`py-12 ${themeClasses?.pageBg ?? "bg-zinc-900"} ${
        themeClasses?.pageText ?? "text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${
            themeClasses?.pageText ?? "text-white"
          }`}
        >
          Galleri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {customer.galleryImages.map((image, index) => (
            <div key={index} className="aspect-square relative">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
