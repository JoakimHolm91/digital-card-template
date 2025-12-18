import Hero from "../components/Hero";
import QuickInfo from "../components/QuickInfo";
import FeaturedItems from "../components/FeaturedItems";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import FindUs from "../components/FindUs";
import Footer from "../components/Footer";
import customer from "../customer.restaurant.json";
import { getThemeClasses } from "../utils/theme";

const themeClasses = getThemeClasses(customer.theme);

export default function Home() {
  return (
    <main className={themeClasses.background}>
      <Hero customer={customer} themeClasses={themeClasses} />
      <QuickInfo customer={customer} themeClasses={themeClasses} />
      <FeaturedItems customer={customer} themeClasses={themeClasses} />
      <Gallery customer={customer} />
      <Reviews customer={customer} themeClasses={themeClasses} />
      <FindUs customer={customer} />
      <Footer customer={customer} />
    </main>
  );
}
