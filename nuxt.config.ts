export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000'
    }
  },

  srcDir: './',

  app: {
    head: {
      title: 'CS2 Championship - Кисловодск',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Турнир по Counter-Strike 2 в Кисловодске' }
      ]
    }
  },
  
  // Отключаем SSR полностью
  ssr: true,
  
  devtools: { enabled: false },

  pages: true,
  
  compatibilityDate: '2026-02-13'
})