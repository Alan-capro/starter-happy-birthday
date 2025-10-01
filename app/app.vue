<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'zh-CN'
  }
})

const title = '生日快乐！🎉'
const description = '一个温馨的生日祝福页面，专为移动端优化'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UMain class="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      <NuxtPage />
    </UMain>
  </UApp>
</template>
