import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _33ef54a4 = () => interopDefault(import('../pages/bridge.vue' /* webpackChunkName: "pages/bridge" */))
const _603491f0 = () => interopDefault(import('../pages/buyAndSell.vue' /* webpackChunkName: "pages/buyAndSell" */))
const _7cf45558 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _4ecb00bd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _33ef54a4,
    name: "bridge"
  }, {
    path: "/buyAndSell",
    component: _603491f0,
    name: "buyAndSell"
  }, {
    path: "/profile",
    component: _7cf45558,
    name: "profile"
  }, {
    path: "/",
    component: _4ecb00bd,
    name: "index"
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
