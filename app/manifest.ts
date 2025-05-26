export default function manifest() {
  return {
    name: 'Luxe Furniture — Premium Home & Office Furnishings',
    short_name: 'Luxe Furniture',
    description:
      'Shop Luxe Furniture online for elegant, handcrafted furniture. Discover premium collections for living, dining, office, and bedroom spaces with fast shipping and excellent customer service.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#882adb',
    orientation: 'portrait',
    scope: '/',
    lang: 'en',
    dir: 'ltr',
    categories: ['ecommerce', 'furniture', 'home decor', 'interior design'],

    icons: [
      {
        src: '/favicon/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],

    shortcuts: [
      // 🌟 Shopping Experience
      {
        name: 'Shop Products',
        short_name: 'Shop',
        description: 'Browse all furniture collections',
        url: '/products',
        icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
      },
      {
        name: 'My Wishlist',
        short_name: 'Wishlist',
        description: 'View and manage your saved items',
        url: '/wishlist',
        icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
      },
      {
        name: 'Shopping Cart',
        short_name: 'Cart',
        description: 'Check your shopping cart',
        url: '/cart',
        icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
      },
      {
        name: 'Checkout',
        short_name: 'Checkout',
        description: 'Complete your purchase securely',
        url: '/checkout',
        icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
      },

      // 🧑 User & Account
      {
        name: 'Login',
        short_name: 'Login',
        description: 'Access your Luxe Furniture account',
        url: '/login',
        icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
      },
      {
        name: 'Register',
        short_name: 'Register',
        description: 'Create a new Luxe Furniture account',
        url: '/register',
        icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
      },
      {
        name: 'My Account',
        short_name: 'Account',
        description: 'Manage your profile and preferences',
        url: '/user',
        icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
      },
      {
        name: 'Track Order',
        short_name: 'Orders',
        description: 'Track and view your orders',
        url: '/order',
        icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
      },

      // 📚 Info Pages
      {
        name: 'About Luxe Furniture',
        short_name: 'About',
        description: 'Learn more about our brand and team',
        url: '/about',
        icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
      },
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch with our support team',
        url: '/contact',
        icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
      },
      {
        name: 'Blog & Articles',
        short_name: 'Blog',
        description: 'Read insights and guides on interior design and furniture trends',
        url: '/blog',
        icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
      },
    ],
  };
}
