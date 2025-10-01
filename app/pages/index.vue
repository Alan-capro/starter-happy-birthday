<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden mobile-optimized">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
      <div class="absolute top-20 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-bounce" style="animation-delay: 0.5s;"></div>
      <div class="absolute bottom-20 left-20 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-bounce" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-10 right-10 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-bounce" style="animation-delay: 1.5s;"></div>
    </div>

    <!-- 主要内容 -->
    <div class="text-center z-10 max-w-md mx-auto">
      <!-- 生日蛋糕图标 -->
      <div class="mb-8">
        <div class="text-8xl animate-pulse">🎂</div>
      </div>

      <!-- 主标题 -->
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
        生日快乐！
      </h1>

      <!-- 副标题 -->
      <p class="text-xl text-gray-600 mb-8 animate-fade-in" style="animation-delay: 0.3s;">
        愿你的每一天都充满阳光与快乐 ✨
      </p>

      <!-- 祝福卡片 -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8 animate-slide-up" style="animation-delay: 0.6s;">
        <div class="text-6xl mb-4">🎉</div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-3">特别的日子</h2>
        <p class="text-gray-600 leading-relaxed">
          今天是你的生日，愿所有的美好都围绕着你。<br>
          祝你健康快乐，心想事成！
        </p>
      </div>

      <!-- 互动按钮 -->
      <div class="space-y-4 animate-fade-in" style="animation-delay: 0.9s;">
        <UButton
          size="xl"
          color="primary"
          variant="solid"
          class="w-full touch-feedback"
          @click="showConfetti"
        >
          <template #leading>
            <div class="text-2xl">🎊</div>
          </template>
          点击庆祝！
        </UButton>

        <UButton
          size="lg"
          color="gray"
          variant="outline"
          class="w-full touch-feedback"
          @click="playMusic"
        >
          <template #leading>
            <div class="text-xl">🎵</div>
          </template>
          播放生日歌
        </UButton>
      </div>
    </div>

    <!-- 底部装饰 -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-fade-in" style="animation-delay: 1.2s;">
      Made with ❤️ for you
    </div>
  </div>
</template>

<script setup>
// 庆祝动画
const showConfetti = () => {
  // 简单的庆祝效果
  const button = document.querySelector('button')
  if (button) {
    button.classList.add('animate-pulse')
    setTimeout(() => {
      button.classList.remove('animate-pulse')
    }, 1000)
  }
}

// 播放音乐（模拟）
const playMusic = () => {
  // 这里可以添加实际的音频播放逻辑
  alert('🎵 生日快乐歌播放中...')
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}
</style>
