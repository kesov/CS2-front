<template>
  <div class="min-h-screen bg-cs-dark overflow-hidden">
    <!-- Кинематографичный фон -->
    <div class="fixed inset-0 z-0 opacity-50">
      <div class="absolute inset-0 bg-[url('https://kartinka.top/images/31/1156-2560x1440-kartinka-top.jpg')] bg-cover bg-center scale-105 animate-slow-zoom"></div>
      
      <div class="absolute top-0 right-0 w-1/2 h-full bg-[url('https://kartinka.top/images/31/1172-2560x1440-kartinka-top.jpg')] bg-contain bg-no-repeat bg-right opacity-15 animate-float"></div>
      
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 20px);"></div>
      </div>
      
      <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-purple-900/30"></div>
    </div> 

    <div class="relative z-10">
      <!-- Герой секция -->
      <section class="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-20 left-[10%] text-4xl text-blue-500/20 animate-float-slow">⚡</div>
          <div class="absolute top-40 right-[15%] text-5xl text-purple-500/20 animate-float-slow" style="animation-delay: 1s">🎯</div>
          <div class="absolute bottom-40 left-[20%] text-4xl text-red-500/20 animate-float-slow" style="animation-delay: 2s">💣</div>
          <div class="absolute bottom-20 right-[25%] text-5xl text-green-500/20 animate-float-slow" style="animation-delay: 3s">🔫</div>
          <div class="absolute top-1/3 left-[40%] text-6xl text-yellow-500/10 animate-float-slow" style="animation-delay: 4s">🏆</div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10 text-center">
          <div class="mb-6">
            <div class="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span class="text-sm uppercase tracking-widest text-gray-300">AURA</span>
              <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            </div>
          </div>
          
          <div class="relative mb-8">
            <div class="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            
            <h1 class="relative text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.05em] leading-none">
              <span class="cs2-title inline-block">
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x" 
                      style="font-family: 'Anton', 'Bebas Neue', 'Impact', 'Arial Black', sans-serif; text-transform: uppercase; letter-spacing: -2px; transform: scaleY(1.1); text-shadow: 0 0 30px rgba(59,130,246,0.5);">
                  CS2
                </span>
                <span class="block text-5xl md:text-7xl lg:text-8xl -mt-4 md:-mt-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white"
                      style="font-family: 'Anton', 'Bebas Neue', 'Impact', 'Arial Black', sans-serif; text-transform: uppercase; letter-spacing: 8px; transform: scaleY(1.2); text-shadow: 0 0 20px rgba(255,255,255,0.3);">
                  CHAMPIONSHIP
                </span>
              </span>
            </h1>
            
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md"></div>
          </div>
          
          <div class="flex flex-wrap justify-center items-center gap-6 mb-10">
            <div class="relative">
              <div class="absolute inset-0 bg-blue-500/20 blur-xl"></div>
              <div class="relative px-8 py-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-md border border-blue-500/30 rounded-2xl">
                <span class="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span class="text-blue-400">📅</span>
                  <span>14-15 февраля 2026</span>
                </span>
              </div>
            </div>
            <div class="relative">
              <div class="absolute inset-0 bg-purple-500/20 blur-xl"></div>
              <div class="relative px-8 py-4 bg-gradient-to-r from-purple-500/10 to-pink-600/10 backdrop-blur-md border border-purple-500/30 rounded-2xl">
                <span class="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span class="text-purple-400">📍</span>
                  <span>КИСЛОВОДСК</span>
                </span>
              </div>
            </div>
            <div class="relative">
              <div class="absolute inset-0 bg-orange-500/20 blur-xl"></div>
              <div class="relative px-8 py-4 bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-md border border-orange-500/30 rounded-2xl">
                <span class="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span class="text-orange-400">🏆</span>
                  <span>50 000₽</span>
                </span>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <button 
              @click="scrollToRegistration"
              class="group relative px-12 py-6 overflow-hidden rounded-2xl"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span class="relative z-10 text-white font-black text-xl md:text-2xl uppercase tracking-wider flex items-center gap-3">
                <span class="text-2xl">🎮</span>
                <span>ЗАРЕГИСТРИРОВАТЬ КОМАНДУ</span>
                <span class="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </span>
              
              <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div class="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                <div class="absolute bottom-0 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style="animation-delay: 0.5s"></div>
              </div>
            </button>
            
            <a 
              href="#info"
              class="group relative px-12 py-6 overflow-hidden rounded-2xl"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="absolute -inset-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="absolute inset-0 opacity-10" style="background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 10px);"></div>
              
              <span class="relative z-10 text-white font-black text-xl md:text-2xl uppercase tracking-wider flex items-center gap-3">
                <span class="text-2xl">📋</span>
                <span>ПОДРОБНЕЕ О ТУРНИРЕ</span>
                <span class="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </span>
              
              <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div class="absolute top-1/4 right-1/4 w-1 h-1 bg-orange-300 rounded-full animate-ping"></div>
                <div class="absolute bottom-1/3 left-1/3 w-1 h-1 bg-orange-300 rounded-full animate-ping" style="animation-delay: 0.3s"></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Основной контент -->
      <main>
        <section id="info">
          <TournamentInfo />
        </section>
        
        <section id="registration" ref="registrationSection">
          <ClientOnly>
            <RegistrationForm />
            <template #fallback>
              <div class="min-h-screen flex items-center justify-center">
                <div class="text-white text-xl">Загрузка формы регистрации...</div>
              </div>
            </template>
          </ClientOnly>
        </section>
      </main>

      <!-- Футер -->
      <footer class="relative mt-20 border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        
        <div class="container mx-auto px-4 py-12 relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div class="space-y-4">
              <h3 class="text-3xl font-black" style="font-family: 'Anton', 'Bebas Neue', sans-serif; letter-spacing: -1px;">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">CS2</span>
                <span class="text-white">.</span>
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Крупнейший LAN-турнир по Counter-Strike 2 в Кисловодске. 
                Профессиональная организация, мощное оборудование и достойные призы.
              </p>
              <div class="flex gap-4 pt-2">
                <div class="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-colors cursor-pointer">
                  <span>📘</span>
                </div>
                <div class="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-colors cursor-pointer">
                  <span>📷</span>
                </div>
                <div class="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 hover:bg-pink-500/20 transition-colors cursor-pointer">
                  <span>🎮</span>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-xl font-bold text-white flex items-center gap-2">
                <span class="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                КОНТАКТЫ
              </h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-3 text-gray-400">
                  <span class="text-blue-400 mt-1">📍</span>
                  <div>
                    <p class="text-white font-medium">Компьютерный клуб AURA</p>
                    <p class="text-sm">г. Кисловодск, ул. Свердлова, д 1</p>
                  </div>
                </li>
                <li class="flex items-center gap-3 text-gray-400">
                  <span class="text-purple-400">📞</span>
                  <div>
                    <p class="text-white font-medium">+7 (999) 999-99-99</p>
                  </div>
                </li>
                <li class="flex items-center gap-3 text-gray-400">
                  <span class="text-pink-400">📧</span>
                  <div>
                    <p class="text-white font-medium">auratournament@mail.ru</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-xl font-bold text-white flex items-center gap-2">
                <span class="w-1 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></span>
                НАВИГАЦИЯ
              </h4>
              <ul class="space-y-2">
                <li>
                  <a href="#info" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span class="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                    <span>О турнире</span>
                  </a>
                </li>
                <li>
                  <a href="#registration" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span class="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                    <span>Регистрация</span>
                  </a>
                </li>
                <li>
                  <NuxtLink to="/admin" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span class="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-pink-500 transition-colors"></span>
                    <span>Админ-панель</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="pt-8 border-t border-white/10">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
              <p class="text-gray-500 text-sm">
                © 2026 CS2 CHAMPIONSHIP. Все права защищены.
              </p>
              <div class="flex items-center gap-6">
                <span class="text-gray-500 text-sm flex items-center gap-2">
                  <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>8 команд • DOUBLE ELIMINATION</span>
                </span>
                <div class="flex items-center gap-3">
                  <span class="text-gray-500 text-sm">Партнеры:</span>
                  <span class="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-xs font-bold border border-pink-500/30">LIT ENERGY</span>
                  <span class="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold border border-blue-500/30">AURA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TournamentInfo from '../components/TournamentInfo.vue'
import RegistrationForm from '../components/RegistrationForm.vue'

const registrationSection = ref(null)

onMounted(() => {
  if (window.location.hash === '#info') {
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }
})

const scrollToRegistration = () => {
  registrationSection.value?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}

const scrollToInfo = () => {
  const infoSection = document.getElementById('info')
  if (infoSection) {
    infoSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style>
/* Импорт крутых шрифтов */
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Black+Ops+One&display=swap');

/* Кастомные анимации */
@keyframes slow-zoom {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes scroll {
  0% { transform: translateY(0); opacity: 1; }
  75% { transform: translateY(15px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}

.animate-slow-zoom {
  animation: slow-zoom 20s ease-in-out infinite;
}

.animate-float {
  animation: float 15s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 5s ease infinite;
}

.animate-scroll {
  animation: scroll 2s ease infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 5s ease infinite;
}

.hero-section {
  background: radial-gradient(circle at 50% 50%, #0a0e17 0%, #05070a 100%);
  position: relative;
}

html {
  scroll-behavior: smooth;
}

:root {
  --cs-dark: #0a0e17;
  --cs-darker: #05070a;
}

.bg-cs-dark {
  background-color: var(--cs-dark);
}

.cs2-title {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--cs-darker);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #2d5af1, #8a2be2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #3a6aff, #9b3cff);
}
</style>