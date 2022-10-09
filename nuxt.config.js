export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'spa',


  head: {
    title: 'linkedin-colon',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [ ['@nuxtjs/firebase',
    {
      config: {
        apiKey: "AIzaSyC1R1-oXUGS2lL_pBYRlvv-GaPi8F14Xsk",
        authDomain: "nuxt-firebaseauth-72ffc.firebaseapp.com",
        projectId: "nuxt-firebaseauth-72ffc",
        storageBucket: "nuxt-firebaseauth-72ffc.appspot.com",
        messagingSenderId: "249132870316",
        appId: "1:249132870316:web:9213d5e809e346de654d09",
        measurementId: "G-YXF285L1TF"
      },
      services: {
        auth: true // Just as example. Can be any other service.
      }
    }
  ]
],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
