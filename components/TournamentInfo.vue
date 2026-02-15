<template>
  <div class="tournament-info min-h-screen">
    <!-- Основной фон с CS2 заставкой -->
    <div class="absolute inset-0 z-0">

      <!-- Темный градиент (сделаем светлее) -->
      <div class="absolute inset-0 bg-gradient-to-b from-cs-dark/80 via-cs-dark/40 to-cs-dark/10"></div>
      
      <!-- Карта Dust2 как текстура (светлее) -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0 bg-[url('https://kartinka.top/images/31/1162-2438x1219-kartinka-top.jpg')] bg-cover bg-center"></div>
      </div>
    </div>

    <div class="relative z-10 py-12">
      <div class="container mx-auto px-4">
        <!-- Заголовок -->
        <div class="text-center mb-12 relative">
          <div class="inline-block mb-6 p-4 bg-gradient-to-r from-blue-500/20 to-red-600/20 border border-red-500/30 rounded-2xl backdrop-blur-sm">
            <div class="text-4xl">🎮</div>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white font-[Arial_Black] tracking-tight">
            ТУРНИР ПО <span class="text-orange-500">CS</span>2
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Профессиональный турнир по Counter-Strike 2
          </p>
        </div>

        <!-- Основная информация -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="bg-gray-900/60 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span class="text-blue-400 text-xl">⏰</span>
              </div>
              <h3 class="text-lg font-bold text-white">ДАТА И ВРЕМЯ</h3>
            </div>
            <p class="text-gray-300">14-15 февраля 2026</p>
            <p class="text-gray-300">Старт в 12:00</p>
            <div class="mt-3 text-sm text-blue-400 font-mono">MR12 • Best of 3</div>
          </div>
          
          <div class="bg-gray-900/60 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-red-500/50 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <span class="text-red-400 text-xl">📍</span>
              </div>
              <h3 class="text-lg font-bold text-white">МЕСТО ПРОВЕДЕНИЯ</h3>
            </div>
            <p class="text-gray-300">Компьютерный клуб AURA</p>
            <p class="text-gray-300 text-sm">г. Кисловодск, ул. Свердлова, д 1</p>
            <div class="mt-3 text-sm text-red-400 font-mono">LAN-турнир</div>
          </div>
          
          <div class="bg-gray-900/60 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-green-500/50 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span class="text-green-400 text-xl">👥</span>
              </div>
              <h3 class="text-lg font-bold text-white">ФОРМАТ ТУРНИРА</h3>
            </div>
            <p class="text-gray-300">8 команд × 5 игроков</p>
            <p class="text-gray-300">Double Elimination</p>
            <div class="mt-3 text-sm text-green-400 font-mono">Турнир с нижней сеткой</div>
          </div>
        </div>

        <!-- Система турнира с картинкой -->
        <div class="mb-16 relative">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <div class="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <span class="text-blue-300 text-xl">📊</span>
                </div>
                DOUBLE ELIMINATION
              </h2>
              <p class="text-gray-300 mb-4 leading-relaxed">
                <span class="text-blue-400 font-bold">DOUBLE ELIMINATION</span> — самая честная система проведения турниров. 
                После первой проигранной карты команда не выбывает, а переходит в нижнюю сетку, где продолжает борьбу за призы.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-3 text-gray-300">
                  <span class="text-green-400 mt-1">✓</span>
                  <span><span class="text-white font-medium">8 команд</span> — 3 победителя</span>
                </li>
                <li class="flex items-start gap-3 text-gray-300">
                  <span class="text-green-400 mt-1">✓</span>
                  <span><span class="text-white font-medium">Финалы:</span> Best of 5</span>
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  8 КОМАНД
                </span>
                <span class="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  DOUBLE ELIMINATION
                </span>
              </div>
            </div>
            
            <div class="relative">
              <div class="bg-gray-900/60 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                <div class="text-center mb-3">
                  <h4 class="text-lg font-bold text-white mb-1">СХЕМА ТУРНИРА</h4>
                  <p class="text-gray-400 text-sm">Формат DOUBLE ELIMINATION</p>
                </div>
                <img 
                  src="https://esports.ru/wp-content/uploads/2025/05/2135170667-3-768x561.jpg" 
                  alt="Турнирная сетка"
                  class="w-full h-auto rounded-lg border border-gray-700/50"
                />
                <p class="text-gray-400 text-sm mt-3 text-center">
                  Наглядная схема проведения турнира
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Призовой фонд -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-center mb-8 text-white">
            <span class="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              ПРИЗОВОЙ ФОНД
            </span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gradient-to-b from-gray-900/80 to-gray-800/80 border-2 border-yellow-500/40 rounded-xl p-8 text-center relative overflow-hidden backdrop-blur-sm">
              <div class="absolute top-4 left-4 text-yellow-500/20 text-2xl">🥇</div>
              <div class="text-4xl font-bold text-yellow-400 mb-3">50 000₽</div>
              <div class="text-xl font-bold text-white mb-2">1 МЕСТО</div>
              <p class="text-gray-300">Денежный приз</p>
              <div class="mt-4">
                <div class="inline-flex items-center gap-2 text-yellow-300 text-sm">
                  <span>🏆</span>
                  <span>Чемпион турнира</span>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-b from-gray-900/80 to-gray-800/80 border-2 border-purple-500/40 rounded-xl p-8 text-center relative overflow-hidden backdrop-blur-sm">
              <div class="absolute top-4 left-4 text-purple-500/20 text-2xl">🥈</div>
              <div class="text-2xl font-bold text-purple-400 mb-3">RAZER VIPER V2 PRO</div>
              <div class="text-xl font-bold text-white mb-2">2 МЕСТО</div>
              <p class="text-gray-300">Игровая мышь</p>
              <div class="mt-4">
                <div class="inline-flex items-center gap-2 text-purple-300 text-sm">
                  <span>⚡</span>
                  <span>Профессиональный девайс</span>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-b from-gray-900/80 to-gray-800/80 border-2 border-orange-500/40 rounded-xl p-8 text-center relative overflow-hidden backdrop-blur-sm">
              <div class="absolute top-4 left-4 text-orange-500/20 text-2xl">🥉</div>
              <div class="text-2xl font-bold text-orange-400 mb-3">500₽ × 5</div>
              <div class="text-xl font-bold text-white mb-2">3 МЕСТО</div>
              <p class="text-gray-300">На баланс в комьютерном клубе AURA</p>
              <div class="mt-4">
                <div class="inline-flex items-center gap-2 text-orange-300 text-sm">
                  <span>🎮</span>
                  <span>Игровое время</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Условия и партнеры -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Условия участия -->
          <div class="bg-gradient-to-br from-gray-900/70 to-gray-800/70 border border-cyan-500/30 rounded-xl p-8 relative overflow-hidden backdrop-blur-sm">
            <h3 class="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
              <div class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <span class="text-cyan-300">📋</span>
              </div>
              УСЛОВИЯ УЧАСТИЯ
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center flex-shrink-0">
                  <span class="text-blue-400">💰</span>
                </div>
                <div>
                  <span class="font-bold text-white">ВЗНОС:</span>
                  <span class="text-gray-300 ml-2">5 000₽ с команды</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center flex-shrink-0">
                  <span class="text-green-400">👥</span>
                </div>
                <div>
                  <span class="font-bold text-white">СОСТАВ:</span>
                  <span class="text-gray-300 ml-2">5 игроков</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center flex-shrink-0">
                  <span class="text-purple-400">💻</span>
                </div>
                <div>
                  <span class="font-bold text-white">ОБОРУДОВАНИЕ:</span>
                  <span class="text-gray-300 ml-2">Предоставляется организатором</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 bg-red-500/20 rounded flex items-center justify-center flex-shrink-0">
                  <span class="text-red-400">🥤</span>
                </div>
                <div>
                  <span class="font-bold text-white">ДЛЯ ИГРОКОВ:</span>
                  <span class="text-gray-300 ml-2">Напитки от LIT ENERGY</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 bg-orange-500/20 rounded flex items-center justify-center flex-shrink-0">
                  <span class="text-orange-400">🎮</span>
                </div>
                <div>
                  <span class="font-bold text-white">КАРТЫ:</span>
                  <span class="text-gray-300 ml-2">Пик/бан системы как на мейджорах</span>
                </div>
              </li>
            </ul>
          </div>

          <!-- Партнеры -->
          <div class="bg-gradient-to-br from-gray-900/70 to-gray-800/70 border border-pink-500/30 rounded-xl p-8 relative overflow-hidden backdrop-blur-sm">
            <h3 class="text-2xl font-bold mb-6 text-pink-400 flex items-center gap-3">
              <div class="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <span class="text-pink-300">🌟</span>
              </div>
              ПАРТНЕРЫ ТУРНИРА
            </h3>
            <div class="space-y-6">
              <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-lg border border-pink-500/20">
                <div class="text-3xl text-pink-400">⚡</div>
                <div>
                  <h4 class="text-xl font-bold text-pink-300">LIT ENERGY</h4>
                  <p class="text-gray-300 text-sm">Официальный энергетический напиток</p>
                  <p class="text-pink-200/70 text-xs mt-1">Для всех участников турнира</p>
                </div>
              </div>
              <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg border border-blue-500/20">
                <div class="text-3xl text-blue-400">🏢</div>
                <div>
                  <h4 class="text-xl font-bold text-blue-300">AURA GAMING</h4>
                  <p class="text-gray-300 text-sm">Игровая площадка турнира</p>
                  <p class="text-blue-200/70 text-xs mt-1">Профессиональное оборудование</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Важная информация -->
        <div class="bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-orange-500/30 rounded-xl p-6 mb-8 backdrop-blur-sm">
          <div class="flex items-start gap-4">
            <div class="text-2xl text-orange-400 mt-1">ℹ️</div>
            <div>
              <h4 class="text-lg font-bold text-white mb-2">ВАЖНАЯ ИНФОРМАЦИЯ</h4>
              <p class="text-gray-300">
                • Регистрация команд открыта до 10 февраля 2026<br>
                • Все матчи играются оффлайн в компьютерном клубе AURA<br>
                • Карты выбираются по системе пик/бан перед каждой партией<br>
                • Для участия необходимо подтвердить возраст (16+)<br>
                • После регистрации с вами свяжется администратор для подтверждения
              </p>
            </div>
          </div>
        </div>

        <!-- Хештеги -->
        <div class="text-center">
          <div class="inline-flex flex-wrap justify-center gap-3 text-gray-400 text-sm mb-4">
            <span class="px-3 py-1.5 bg-gray-800/50 rounded-lg">#CS2Championship</span>
            <span class="px-3 py-1.5 bg-gray-800/50 rounded-lg">#KislovodskEsports</span>
            <span class="px-3 py-1.5 bg-gray-800/50 rounded-lg">#CS2Russia</span>
          </div>
          <p class="text-gray-500 text-xs">
            Турнир проводится при поддержке сообщества Counter-Strike 2 и партнера Lit Energy. Все права защищены.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Компонент только для отображения
</script>

<style scoped>
.tournament-info {
  position: relative;
}

/* Улучшенная читаемость текста на фоне */
:global(.text-gray-300) {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Контраст для заголовков */
:global(.text-white) {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}
</style>