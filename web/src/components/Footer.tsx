import { RestaurantCustomer } from "../types/restaurant";

interface FooterProps {
  customer: RestaurantCustomer;
}

export default function Footer({ customer }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{customer.name}</h3>
            <p className="text-gray-400">{customer.tagline}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-400">
              {customer.address}, {customer.city}
            </p>
            {customer.phone && (
              <p className="text-gray-400">{customer.phone}</p>
            )}
            {customer.email && (
              <p className="text-gray-400">{customer.email}</p>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Följ oss</h3>
            <div className="flex space-x-4">
              {customer.socialLinks.instagram && (
                <a
                  href={customer.socialLinks.instagram}
                  className="text-gray-400 hover:text-white"
                >
                  Instagram
                </a>
              )}
              {customer.socialLinks.facebook && (
                <a
                  href={customer.socialLinks.facebook}
                  className="text-gray-400 hover:text-white"
                >
                  Facebook
                </a>
              )}
              {customer.socialLinks.tiktok && (
                <a
                  href={customer.socialLinks.tiktok}
                  className="text-gray-400 hover:text-white"
                >
                  TikTok
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {customer.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
