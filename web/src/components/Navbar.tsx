import Link from "next/link";
import { RestaurantCustomer } from "../types/restaurant";

interface NavbarProps {
  customer: RestaurantCustomer;
}

export default function Navbar({ customer }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            {customer.name}
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Hem
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-gray-900">
              Meny
            </Link>
            <a href="#find-us" className="text-gray-700 hover:text-gray-900">
              Hitta oss
            </a>
          </div>
          <div className="md:hidden">
            {/* Hamburger menu placeholder */}
            <button className="text-gray-700">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
