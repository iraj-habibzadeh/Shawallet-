import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7cf7f544 = () => interopDefault(import('..\\pages\\bridge.vue' /* webpackChunkName: "pages/bridge" */))
const _21a20eb8 = () => interopDefault(import('..\\pages\\buyAndSell.vue' /* webpackChunkName: "pages/buyAndSell" */))
const _3b7ac9e6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _55801ba4 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))

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
    component: _7cf7f544,
    name: "bridge___en"
  }, {
    path: "/buyAndSell",
    component: _21a20eb8,
    name: "buyAndSell___en"
  }, {
    path: "/fa",
    component: _3b7ac9e6,
    name: "index___fa"
  }, {
    path: "/profile",
    component: _55801ba4,
    name: "profile___en"
  }, {
    path: "/fa/bridge",
    component: _7cf7f544,
    name: "bridge___fa"
  }, {
    path: "/fa/buyAndSell",
    component: _21a20eb8,
    name: "buyAndSell___fa"
  }, {
    path: "/fa/profile",
    component: _55801ba4,
    name: "profile___fa"
  }, {
    path: "/",
    component: _3b7ac9e6,
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
