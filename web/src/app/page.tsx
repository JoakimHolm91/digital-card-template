import Hero from "../components/Hero";
import QuickInfo from "../components/QuickInfo";
import FeaturedItems from "../components/FeaturedItems";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import FindUs from "../components/FindUs";
import Footer from "../components/Footer";
import customer from "../customer.restaurant.json";
import { getThemeClasses } from "../theme/themeClasses";

const themeClasses = getThemeClasses(customer.theme);

export default function Home() {
  return (
    <main>
      <Hero customer={customer} themeClasses={themeClasses} />
      <QuickInfo customer={customer} />
      <FeaturedItems customer={customer} themeClasses={themeClasses} />
      <Gallery customer={customer} themeClasses={themeClasses} />
      <Reviews customer={customer} themeClasses={themeClasses} />
      <FindUs customer={customer} themeClasses={themeClasses} />
      <Footer customer={customer} />
    </main>
  );
}
