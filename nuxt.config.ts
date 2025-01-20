export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/scss/main.scss', 
    'swiper/swiper-bundle.css'
  ],
  modules: [
    'nuxt-swiper',
  ],
  plugins: [
   '~/plugins/pinia'
  ],
  runtimeConfig: {
    token:
      process.env.NUXT_PUBLIC_TOKEN ||
      'P2XPCG5-WTBMXVN-P8NGB0W-7ZRDB7Z',
    public: {
      baseURL:
        process.env.NUXT_PUBLIC_BASE_URL || 'https://api.kinopoisk.dev/v1.4/',
    },
  },
})