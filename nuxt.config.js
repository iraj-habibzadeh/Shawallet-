require('dotenv').config()



export default {
  buildDir: 'nuxt-dist',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ShaWallet | Smart Wallet For Buy And Sell CryptoCurrncy On WEB3 ',
    meta: [
      { charset: 'utf-8' },
      // { name: 'google-site-verification', content: 'tASRdlQWe-O2j5boAlfazXb4-CEyAUfCwx_30gA383U' },
      { hid: 'content', name: 'content', content: 'ShaWallet website content' },
      { hid: 'robots', name: 'robots', content: 'width=device-width, initial-scale=1' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#ffffff' },
      { hid: 'theme-color', name: 'theme-color', content: '#67B68C' },
      { hid: 'description', name: 'description', content: 'Plant a forest and support rural communities worldwide. ShaWallet uses Web3 to unlock new opportunities in Climate Finance.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'ShaWallet' },
      { hid: 'og:title', property: 'og:title', content: 'ShaWallet | Planters Without Borders' },
      { hid: 'og:description', name: 'og:description', content: 'Plant a forest and support rural communities worldwide. ShaWallet uses Web3 to unlock new opportunities in Climate Finance.' },
      { hid: 'og:url', property: 'og:url', content: 'https://ShaWallet.com' },
      { hid: 'og:image', property: 'og:image', content: 'https://ShaWallet.com/featureImage/jake-hills.jpg' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'ShaWallet | Planters Without Borders' },
      { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en' }
    ],
    
    // link: [
    //   { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/png', href: '/apple-touch-icon.png' },
    //   { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' },
    //   { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' },
    //   { rel: 'manifest', href: '/site.webmanifest' },
    //   { rel: 'mask-icon', href: '//safari-pinned-tab.svg', color: '#5bbad5' },
    // ]
  },
  loading: {
    color: 'rgba(103,182,140,0.62)',
    failedColor: 'rgba(238,45,14,0.69)',
    height: '3px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 16px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss'
  ],
  
  middleware: [],
  router: {
    linkActiveClass: 'active-link'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/web3.js', ssr: false },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
  ],
  sitemap: {
    hostname: 'https://ShaWallet.com',
    gzip: true,
    // sitemaps: [
    //   {
    //     path: '/sitemap-static.xml',
    //     exclude: [
    //       '/spend',
    //       '/spend/*',
    //       '/stats',
    //     ],
    //     routes: [
    //       {
    //         url: '/',
    //         changefreq: 'monthly',
    //         priority: 1,
    //         lastmod: '2022-01-19T13:30:00.000Z'
    //       },
    //       {
    //         url: '/genesis',
    //         changefreq: 'monthly',
    //         priority: 0.9,
    //         lastmod: '2022-01-19T13:30:00.000Z'
    //       },
    //       {
    //         url: '/partnerships',
    //         changefreq: 'monthly',
    //         priority: 0.8,
    //         lastmod: '2022-01-19T13:30:00.000Z'
    //       },
    //       {
    //         url: '/forest/referral',
    //         changefreq: 'monthly',
    //         priority: 0.8,
    //         lastmod: '2022-01-19T13:30:00.000Z'
    //       },
    //       {
    //         url: '/about',
    //         changefreq: 'monthly',
    //         priority: 0.7,
    //         lastmod: '2022-01-19T13:30:00.000Z'
    //       },
    //       {
    //         url: '/contact',
    //         changefreq: 'monthly',
    //         priority: 0.7,
    //         lastmod: '2022-01-19T13:30:00.000Z'
    //       }
    //     ]
    //   },
    //   {
    //     path: '/sitemap-trees.xml',
    //     exclude: ['/**'], //exlcude all static routes
    //     routes: () => {
    //       let treeRoutes = []
    //       for (let i = 1; i <= 10; i++) {
    //         treeRoutes.push(`/tree/${i}`);
    //       }
    //       return treeRoutes;
    //     },
    //     // routes: async () => {
    //     //   const { data } = await axios.get('/trees')
    //     //   return data.map((user) => `/tree/${user.username}`)
    //     // }
    //   }
    // ]
  },
  fontawesome: {
    component: 'fa',
    imports: [{
      set: '@fortawesome/free-solid-svg-icons', // Solid icons
      icons: ['faEye', 'faPlaneDeparture', 'faExternalLinkAlt', 'faLifeRing', 'faTrophy', 'faBell', 'faTree', 'faCalendarAlt', 'faCaretDown', 'faBars', 'faCaretRight', 'faTimes', 'faAngleRight', 'faPhoneSquareAlt', 'faEnvelope', 'faAngleDown', 'faArrowCircleDown', 'faArrowCircleUp', 'faUser', 'faShoppingCart', 'faSearch', 'faUsers', 'faAngleDoubleDown', 'faAngleDoubleUp']
    },
    {
      set: '@fortawesome/free-brands-svg-icons', // Brand icons
      icons: ['faEthereum', 'faCcStripe', 'faCcVisa', 'faFacebook', 'faInstagram', 'faTelegram', 'faWhatsapp', 'faTwitter', 'faLinkedinIn']
    }
    ]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*/*',

    },
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  i18n: {
    locales: [
      {
      name: 'English',
      code: 'en',
      iso: 'en-US',
      file: 'en.js',
      dir: 'ltr'
    },
      {
        name: 'Farsi',
        code: 'fa',
        iso: 'fa-FA',
        file: 'fa.js',
        dir: 'rtl'
      },
      // {
      //   name: 'Turkish',
      //   code: 'tr',
      //   iso: 'tr-TR',
      //   file: 'tr.js'
      // },
      // {
      //   name: 'Arabic',
      //   code: 'ar',
      //   iso: 'ar-AR',
      //   file: 'ar.js'
      // }
    ],
    defaultLocale: 'en',
    loadLanguagesAsync: true,
    lazy: true,
    seo: true,
    langDir: 'lang/',
    detectBrowserLanguage: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  }
}
