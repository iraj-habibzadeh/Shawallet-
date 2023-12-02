require('dotenv').config()



export default {
  buildDir: 'nuxt-dist', // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ShaWallet | Smart Wallet For Buy And Sell CryptoCurrncy On WEB3 ', meta: [{ charset: 'utf-8' }, // { name: 'google-site-verification', content: 'tASRdlQWe-O2j5boAlfazXb4-CEyAUfCwx_30gA383U' },
    { hid: 'content', name: 'content', content: 'ShaWallet website content' }, {
      hid: 'robots', name: 'robots', content: 'width=device-width, initial-scale=1'
    }, { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#FAF8F1' }, {
      hid: 'theme-color', name: 'theme-color', content: '#FAF8F1'
    }, { hid: 'keywords', name: 'keywords', content: 'SHA_WALLET,wallet,cryptocurrency,exchange,sha_walet,web3,' }, {
      hid: 'description',
      name: 'description',
      content: 'SHA_WALLET is a secure and user-friendly cryptocurrency wallet and exchange platform. Buy and sell various cryptocurrencies with ease using SHA_WALLET\'s web3 integration and enjoy the benefits of a reliable and efficient trading experience. Start trading today!,SHA_WALLET is a secure and user-friendly cryptocurrency wallet and exchange platform where you can easily buy and sell a variety of cryptocurrencies. With features like web3 integration, SHA_WALLET provides a seamless and secure experience for managing your crypto assets. Learn more about how to use SHA_WALLET for your cryptocurrency transactions.'
    }, { hid: 'og:type', property: 'og:type', content: 'website' }, {
      hid: 'og:site_name', property: 'og:site_name', content: 'ShaWallet'
    }, {
      hid: 'og:title',
      property: 'og:title',
      content: 'ShaWallet | Smart Wallet For Buy And Sell CryptoCurrncy On WEB3 '
    }, {
      hid: 'og:description',
      name: 'og:description',
      content: 'SHA_WALLETis a web3 -enabledcryptocurrency wallet and exchange platform that allows users to securely buy and sell various cryptocurrencies. DiscoverhowtouseSHA_WALLETfor seamless crypto transaction sandmanaging your digital assets. CopydescriptionSHA_WALLETisasecureanduser -friendlycryptocurrencywalletandexchangeplatform.Buyandsellvariouscryptocurrencieswith ease using SHA_WALLET s web3 integration and enjoy the benefits of a reliable and efficient trading experience. Start trading today!Copy descriptionSHA_WALLET isa secureand user - friendlycryptocurrency walletand exchangeplatform whereyou caneasily buyand sella varietyof cryptocurrencies.Withfeatures likeweb3 integration,SHA_WALLET providesa seamlessand secureexperiencefor managingyour cryptoassets.Learnmore abouthow touse SHA_WALLETfor yourcryptocurrency transactions',
    }, { hid: 'og:url', property: 'og:url', content: 'https://ShaWallet.com' }, {
      hid: 'og:image', property: 'og:image', content: '/og-image.jpg'
    }, {
      hid: 'twitter:card', property: 'twitter:card', content: '/og-image.jpg'
    }, {
      hid: 'twitter:title', property: 'twitter:title', content: 'ShaWallet | Planters Without Borders'
    }, {
      hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en'
    }],

    link: [{ rel: 'apple-touch-icon', sizes: '180x180', type: 'image/png', href: '/apple-touch-icon.png' }, {
      rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png'
    }, { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' }, {
      rel: 'browserconfig',
      href: '/browserconfig.xml'
    }, {
      rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#FAF8F1'
    }]
  }, loading: {
    color: 'rgba(103,182,140,0.62)',
    failedColor: 'rgba(238,45,14,0.69)',
    height: '3px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 16px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.scss'],

  middleware: [
    { src: '', }
  ]
  , router: {
    linkActiveClass: 'active-link'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/accountSlice.js', ssr: false }
  ],
  // {src: '~plugins/web3.js', ssr: false}
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [], module: {
    rules: [{
      test: /\.s[ac]ss$/i, use: [// Creates `style` nodes from JS strings
        "style-loader", // Translates CSS into CommonJS
        "css-loader", // Compiles Sass to CSS
        "sass-loader"]
    }]
  }, // Modules: https://go.nuxtjs.dev/config-modules
  modules: [// https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt', // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa', 'nuxt-i18n', 'cookie-universal-nuxt'],
  sitemap: {
    hostname: 'https://www.shawallet.com', gzip: true, sitemaps: [
      {
        path: '/sitemap-static.xml', exclude: ['/profile', '/*', '/buyAndSell/'], routes: [{
          url: '/', changefreq: 'monthly', priority: 1
        }, {
          url: '/profile', changefreq: 'monthly', priority: 0.9
        }, {
          url: '/partnerships', changefreq: 'monthly', priority: 0.8
        }, {
          url: '/buyAndSell', changefreq: 'monthly', priority: 0.8
        }, {
          url: '/bridge', changefreq: 'monthly', priority: 0.7
        }, {
          url: 'https://www.treejer.com/contact',
          changefreq: 'monthly',
          priority: 0.7,
          lastmod: '2022-01-19T13:30:00.000Z'
        }]

      }, {
        path: '/sitemap-shawallet.xml', exclude: ['/**'] //exlcude all static routes
      }]
  },
  fontawesome: {
    component: 'fa', imports: [{
      set: '@fortawesome/free-solid-svg-icons', // Solid icons
      icons: ['faEye', 'faPlaneDeparture', 'faExternalLinkAlt', 'faLifeRing', 'faTrophy', 'faBell', 'faTree', 'faCalendarAlt', 'faCaretDown', 'faBars', 'faCaretRight', 'faTimes', 'faAngleRight', 'faPhoneSquareAlt', 'faEnvelope', 'faAngleDown', 'faArrowCircleDown', 'faArrowCircleUp', 'faUser', 'faShoppingCart', 'faSearch', 'faUsers', 'faAngleDoubleDown', 'faAngleDoubleUp']
    }, {
      set: '@fortawesome/free-brands-svg-icons', // Brand icons
      icons: ['faEthereum', 'faCcStripe', 'faCcVisa', 'faFacebook', 'faInstagram', 'faTelegram', 'faWhatsapp', 'faTwitter', 'faLinkedinIn']
    }]
  }, // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*/*',
        'X-Api-Key': 't2f/bU44LyupidAIsia8oQ==gSnkftcWN8KxroAH',
        'X-CMC_PRO_API_KEY': '97b04997-62c8-4f3a-a922-c08b03a06832'
      }
    },

    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  i18n: {
    defaultLocale: 'en',

    locales: [{
      name: 'English', code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr'
    }, {
      name: 'Farsi', code: 'fa', iso: 'fa-FA', file: 'fa.js', dir: 'rtl'
    }
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
    loadLanguagesAsync: true,
    lazy: true,
    seo: true,
    langDir: 'lang/',
    detectBrowserLanguage: false
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}

}
