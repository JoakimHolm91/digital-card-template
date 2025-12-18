import customer from "../customer.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        {/* Hero Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {customer.name}
          </h1>
          <p className="text-lg text-gray-600">{customer.tagline}</p>
        </div>

        {/* Services Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Services</h2>
          <ul className="space-y-2">
            {customer.services.map((service, index) => (
              <li key={index} className="text-gray-700">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact</h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Phone: </span>
              <a
                href={`tel:${customer.phone}`}
                className="text-blue-600 hover:underline"
              >
                {customer.phone}
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email: </span>
              <a
                href={`mailto:${customer.email}`}
                className="text-blue-600 hover:underline"
              >
                {customer.email}
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-medium">City: </span>
              {customer.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
