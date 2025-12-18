import Hero from "../components/Hero";
import QuickInfo from "../components/QuickInfo";
import FeaturedItems from "../components/FeaturedItems";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import FindUs from "../components/FindUs";
import Footer from "../components/Footer";
import customer from "../customer.restaurant.json";

export default function Home() {
  return (
    <main>
      <Hero customer={customer} />
      <QuickInfo customer={customer} />
      <FeaturedItems customer={customer} />
      <Gallery customer={customer} />
      <Reviews customer={customer} />
      <FindUs customer={customer} />
      <Footer customer={customer} />
    </main>
  );
}
