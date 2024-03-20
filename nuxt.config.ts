// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  buildModules: [
    '@nuxtjs/vuex',
  ],
  app: {
    baseURL: '/my-resume/',
    buildAssetsDir: 'assets',
  }
})