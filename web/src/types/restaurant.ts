export interface RestaurantCustomer {
  name: string;
  tagline: string;
  heroImage: string; // path to image, e.g., "/hero.jpg"
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  phone?: string;
  email?: string;
  address: string;
  city: string;
  googleMapsUrl: string;
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    specialNote?: string;
  };
  featuredItems: {
    name: string;
    description: string;
    price: string;
  }[];
  menuSections: {
    title: string;
    items: {
      name: string;
      description: string;
      price: string;
    }[];
  }[];
  galleryImages: string[]; // array of image paths
  reviews: {
    author: string;
    text: string;
    rating?: number; // optional, e.g., 5
  }[];
  socialLinks: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
}