export default {
  // Nuxt.js modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-adsense'
  ],
  // Nuxt.js dev-modules
  buildModules: [
    //'@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],
  // Sitemap config...
  sitemap: {
    hostname: 'https://yugeshbaral.com.np',
    defaults: {
      changefreq: 'daily'
    }
  },
  // Google adsense...
  'google-adsense': {
    id: ''
  },
  // Google analytics...
  googleAnalytics: {
    id: ''
  }
}
