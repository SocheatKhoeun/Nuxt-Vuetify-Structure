export default defineNuxtConfig({
  // Disable SSR if not needed
  ssr: false,

  css: [
    'vuetify/styles', // Include Vuetify styles
    '@mdi/font/css/materialdesignicons.min.css', // Include MDI CSS
  ],

  build: {
    transpile: ['vuetify'], // Transpile Vuetify
  },

  app: {
    head: {
      title: 'UAS System', // App title
      meta: [
        {
          name: 'description',
          content:
            'University Attendance System - Streamline attendance management for educational institutions.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo/error-1.jpg' }, // Favicon
      ],
    },
  },

  devServer: {
    port: 5000, // Change the port if needed
  },

  runtimeConfig: {
    public: {
      USER_PRIVATE_API: process.env.USER_PRIVATE_API, // Environment variables
      USER_PUBLIC_API: process.env.USER_PUBLIC_API,
      ADMIN_PUBLIC_API: process.env.ADMIN_PUBLIC_API,
      ADMIN_PRIVATE_API: process.env.ADMIN_PRIVATE_API,
    },
  },

  compatibilityDate: '2025-12-07',
});