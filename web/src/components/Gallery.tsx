import Image from "next/image";
import { RestaurantCustomer } from "../types/restaurant";

interface GalleryProps {
  customer: RestaurantCustomer;
}

export default function Gallery({ customer }: GalleryProps) {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Galleri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {customer.galleryImages.map((image, index) => (
            <div key={index} className="aspect-square relative">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
