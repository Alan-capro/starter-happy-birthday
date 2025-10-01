// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  // 静态生成配置
  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  // 路由规则 - 所有页面都预渲染
  routeRules: {
    '/': { prerender: true }
  },

  // 静态站点生成配置
  ssr: false,
  
  // 确保静态生成
  generate: {
    fallback: true
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
