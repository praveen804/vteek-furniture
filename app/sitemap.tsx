export default function sitemap() {
  const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const currentDate = new Date().toISOString();

  const PAGES = [
    // Core Pages
    { path: '/', changeFrequency: 'monthly', priority: 1.0 },
    { path: '/about', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },

    // Product-related
    { path: '/products', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/wishlist', changeFrequency: 'weekly', priority: 0.6 },
    { path: '/cart', changeFrequency: 'daily', priority: 0.7 },
    { path: '/checkout', changeFrequency: 'daily', priority: 0.8 },

    // User account
    { path: '/login', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/register', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/user', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/addAddress', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/address', changeFrequency: 'yearly', priority: 0.2 },

    // Order-related
    { path: '/order', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/order-success', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/view-order-details', changeFrequency: 'weekly', priority: 0.6 },
  ];

  return PAGES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));
}
