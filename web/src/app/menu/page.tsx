import Footer from "../../components/Footer";
import customer from "../../customer.restaurant.json";

export default function Menu() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Vår meny
        </h1>
        {customer.menuSections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 border-white/10 pb-2">
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex justify-between items-start border-white/10 pb-4"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">
                      {item.name}
                    </h3>
                    <p className="text-zinc-300 mt-1">{item.description}</p>
                  </div>
                  <div className="text-lg font-semibold text-white ml-4">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Footer customer={customer} />
    </main>
  );
}
