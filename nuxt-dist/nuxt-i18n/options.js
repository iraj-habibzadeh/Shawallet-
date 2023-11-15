export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"name":"English","code":"en","iso":"en-US","file":"en.js","dir":"ltr"},{"name":"Farsi","code":"fa","iso":"fa-FA","file":"fa.js","dir":"rtl"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "D:\\Projects\\ShaWallet\\ShaWallet\\lang",
  rootRedirect: null,
  detectBrowserLanguage: false,
  differentDomains: false,
  seo: true,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  loadLanguagesAsync: true,
  normalizedLocales: [{"name":"English","code":"en","iso":"en-US","file":"en.js","dir":"ltr"},{"name":"Farsi","code":"fa","iso":"fa-FA","file":"fa.js","dir":"rtl"}],
  localeCodes: ["en","fa"],
}

export const localeMessages = {
  'en.js': () => import('../..\\lang\\en.js' /* webpackChunkName: "lang-en.js" */),
  'fa.js': () => import('../..\\lang\\fa.js' /* webpackChunkName: "lang-fa.js" */),
}
