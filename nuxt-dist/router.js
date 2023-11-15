import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5e1f6182 = () => interopDefault(import('..\\pages\\bridge.vue' /* webpackChunkName: "pages/bridge" */))
const _a7b6ffce = () => interopDefault(import('..\\pages\\buyAndSell.vue' /* webpackChunkName: "pages/buyAndSell" */))
const _6f25110c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _339d0de3 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bridge",
    component: _5e1f6182,
    name: "bridge___en"
  }, {
    path: "/buyAndSell",
    component: _a7b6ffce,
    name: "buyAndSell___en"
  }, {
    path: "/fa",
    component: _6f25110c,
    name: "index___fa"
  }, {
    path: "/profile",
    component: _339d0de3,
    name: "profile___en"
  }, {
    path: "/fa/bridge",
    component: _5e1f6182,
    name: "bridge___fa"
  }, {
    path: "/fa/buyAndSell",
    component: _a7b6ffce,
    name: "buyAndSell___fa"
  }, {
    path: "/fa/profile",
    component: _339d0de3,
    name: "profile___fa"
  }, {
    path: "/",
    component: _6f25110c,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
