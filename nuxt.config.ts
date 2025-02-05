// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  css: [        
     'primeicons/primeicons.css',  
    '@/assets/css/tailwind.css',                
  ],
  build: {
    transpile: ['primevue'],
  },
  modules: [
    '@nuxtjs/tailwindcss', 
  ],
  
})
