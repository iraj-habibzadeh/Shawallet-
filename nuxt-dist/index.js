import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_ccc4d3e8 from 'nuxt_plugin_plugin_ccc4d3e8' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_0057e15e from 'nuxt_plugin_bootstrapvue_0057e15e' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_pluginutils_2359394e from 'nuxt_plugin_pluginutils_2359394e' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_5d087e64 from 'nuxt_plugin_pluginrouting_5d087e64' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_0643a78b from 'nuxt_plugin_pluginmain_0643a78b' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_workbox_2e07a7be from 'nuxt_plugin_workbox_2e07a7be' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_b0d75e5e from 'nuxt_plugin_metaplugin_b0d75e5e' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_a7881376 from 'nuxt_plugin_iconplugin_a7881376' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_bf7119bc from 'nuxt_plugin_axios_bf7119bc' // Source: ./axios.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"ShaWallet | Smart Wallet For Buy And Sell CryptoCurrncy On WEB3 ","meta":[{"charset":"utf-8"},{"hid":"content","name":"content","content":"ShaWallet website content"},{"hid":"robots","name":"robots","content":"width=device-width, initial-scale=1"},{"hid":"msapplication-TileColor","name":"msapplication-TileColor","content":"#FAF8F1"},{"hid":"theme-color","name":"theme-color","content":"#FAF8F1"},{"hid":"keywords","name":"keywords","content":"SHA_WALLET,wallet,cryptocurrency,exchange,sha_walet,web3,"},{"hid":"description","name":"description","content":"SHA_WALLET is a secure and user-friendly cryptocurrency wallet and exchange platform. Buy and sell various cryptocurrencies with ease using SHA_WALLET's web3 integration and enjoy the benefits of a reliable and efficient trading experience. Start trading today!,SHA_WALLET is a secure and user-friendly cryptocurrency wallet and exchange platform where you can easily buy and sell a variety of cryptocurrencies. With features like web3 integration, SHA_WALLET provides a seamless and secure experience for managing your crypto assets. Learn more about how to use SHA_WALLET for your cryptocurrency transactions."},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:site_name","property":"og:site_name","content":"ShaWallet"},{"hid":"og:title","property":"og:title","content":"ShaWallet | Smart Wallet For Buy And Sell CryptoCurrncy On WEB3 "},{"hid":"og:description","name":"og:description","content":"SHA_WALLETis a web3 -enabledcryptocurrency wallet and exchange platform that allows users to securely buy and sell various cryptocurrencies. DiscoverhowtouseSHA_WALLETfor seamless crypto transaction sandmanaging your digital assets. CopydescriptionSHA_WALLETisasecureanduser -friendlycryptocurrencywalletandexchangeplatform.Buyandsellvariouscryptocurrencieswith ease using SHA_WALLET s web3 integration and enjoy the benefits of a reliable and efficient trading experience. Start trading today!Copy descriptionSHA_WALLET isa secureand user - friendlycryptocurrency walletand exchangeplatform whereyou caneasily buyand sella varietyof cryptocurrencies.Withfeatures likeweb3 integration,SHA_WALLET providesa seamlessand secureexperiencefor managingyour cryptoassets.Learnmore abouthow touse SHA_WALLETfor yourcryptocurrency transactions"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002FShaWallet.com"},{"hid":"og:image","property":"og:image","content":"\u002Fog-image.jpg"},{"hid":"twitter:card","property":"twitter:card","content":"\u002Fog-image.jpg"},{"hid":"twitter:title","property":"twitter:title","content":"ShaWallet | Planters Without Borders"},{"hid":"og:locale:alternate","property":"og:locale:alternate","content":"en"}],"link":[{"rel":"apple-touch-icon","sizes":"180x180","type":"image\u002Fpng","href":"\u002Fapple-touch-icon.png"},{"rel":"icon","sizes":"32x32","type":"image\u002Fpng","href":"\u002Ffavicon-32x32.png"},{"rel":"icon","sizes":"16x16","type":"image\u002Fpng","href":"\u002Ffavicon-16x16.png"},{"rel":"browserconfig","href":"\u002Fbrowserconfig.xml"},{"rel":"mask-icon","href":"safari-pinned-tab.svg","color":"#FAF8F1"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_ccc4d3e8 === 'function') {
    await nuxt_plugin_plugin_ccc4d3e8(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_0057e15e === 'function') {
    await nuxt_plugin_bootstrapvue_0057e15e(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_2359394e === 'function') {
    await nuxt_plugin_pluginutils_2359394e(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_5d087e64 === 'function') {
    await nuxt_plugin_pluginrouting_5d087e64(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_0643a78b === 'function') {
    await nuxt_plugin_pluginmain_0643a78b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_2e07a7be === 'function') {
    await nuxt_plugin_workbox_2e07a7be(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_b0d75e5e === 'function') {
    await nuxt_plugin_metaplugin_b0d75e5e(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_a7881376 === 'function') {
    await nuxt_plugin_iconplugin_a7881376(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_bf7119bc === 'function') {
    await nuxt_plugin_axios_bf7119bc(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
