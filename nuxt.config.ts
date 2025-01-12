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
  ]
})