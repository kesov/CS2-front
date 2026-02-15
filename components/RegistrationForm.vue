<template>
  <div class="registration-form min-h-screen py-12 relative overflow-hidden">
    <!-- Атмосферный фон CS2 -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[url('https://storage.yandexcloud.net/s3-metaratings-storage/images/71/a4/71a4624b2db8237948f0a41c0925e1ba.png')] bg-cover bg-center opacity-70"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-cs-dark/90 via-cs-dark/70 to-cs-dark/90"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-yellow-900/20 via-transparent to-orange-900/20"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Заголовок с эффектом -->
        <div class="text-center mb-12 relative">
          <div class="absolute -top-10 left-1/4 text-2xl opacity-20">⚡</div>
          <div class="absolute -bottom-5 right-1/4 text-2xl opacity-20">🎯</div>
          
          <div class="inline-block mb-6 p-4 bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-pink-500/20 rounded-2xl border border-blue-500/30 backdrop-blur-md">
            <span class="text-4xl filter drop-shadow-lg">📝</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              РЕГИСТРАЦИЯ КОМАНДЫ
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Заполните форму для участия в турнире CS2 Championship
          </p>
        </div>

        <!-- Форма -->
        <div class="bg-gray-900/60 border border-blue-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl shadow-blue-900/20">
          <form @submit.prevent="submitForm" class="space-y-8">
            <!-- Информация о команде -->
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                ИНФОРМАЦИЯ О КОМАНДЕ
              </h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="group">
                  <label class="block text-gray-300 mb-2 text-sm font-medium">Название команды *</label>
                  <div class="relative">
                    <input
                      v-model="formData.team_name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="Введите название"
                    >
                  </div>
                </div>
                
                <div class="group">
                  <label class="block text-gray-300 mb-2 text-sm font-medium">Имя капитана *</label>
                  <div class="relative">
                    <input
                      v-model="formData.captain_name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="Полное имя капитана"
                    >
                  </div>
                </div>
                
                <div class="group">
                  <label class="block text-gray-300 mb-2 text-sm font-medium">Телефон *</label>
                  <div class="relative">
                    <input
                      v-model="formData.phone"
                      type="tel"
                      required
                      class="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="+7 (XXX) XXX-XX-XX"
                    >
                  </div>
                </div>
                
                <div class="group">
                  <label class="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                  <div class="relative">
                    <input
                      v-model="formData.email"
                      type="email"
                      class="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="email@example.com"
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Игроки -->
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></div>
                СОСТАВ КОМАНДЫ (5 ИГРОКОВ)
              </h3>
              
              <div v-for="(player, index) in formData.players" :key="index" 
                   class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 space-y-4 backdrop-blur-sm hover:border-purple-500/30 transition-all">
                <div class="flex items-center justify-between">
                  <h4 class="text-lg font-bold text-white flex items-center gap-3">
                    <span class="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-sm">
                      {{ index + 1 }}
                    </span>
                    ИГРОК {{ index + 1 }}
                  </h4>
                  <div class="flex gap-2">
                    <span v-if="player.is_captain" 
                          class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30 flex items-center gap-1">
                      <span>👑</span>
                      <span>Капитан</span>
                    </span>
                    <span v-if="player.is_contact_person" 
                          class="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30 flex items-center gap-1">
                      <span>📞</span>
                      <span>Контакт</span>
                    </span>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-gray-400 text-xs mb-1 uppercase tracking-wider">ФИО *</label>
                    <input
                      v-model="player.full_name"
                      type="text"
                      required
                      class="w-full px-3 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                      placeholder="Иванов Иван Иванович"
                    >
                  </div>
                  
                  <div>
                    <label class="block text-gray-400 text-xs mb-1 uppercase tracking-wider">Дата рождения *</label>
                    <input
                      v-model="player.birth_date"
                      type="date"
                      required
                      class="w-full px-3 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                    >
                  </div>
                  
                  <div>
                    <label class="block text-gray-400 text-xs mb-1 uppercase tracking-wider">Ник в игре *</label>
                    <input
                      v-model="player.nickname"
                      type="text"
                      required
                      class="w-full px-3 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                      placeholder="s1mple"
                    >
                  </div>
                  
                  <div>
                    <label class="block text-gray-400 text-xs mb-1 uppercase tracking-wider">Телефон *</label>
                    <input
                      v-model="player.phone"
                      type="tel"
                      required
                      class="w-full px-3 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                      placeholder="+7 (XXX) XXX-XX-XX"
                    >
                  </div>
                  
                  <div class="md:col-span-2">
                    <label class="block text-gray-400 text-xs mb-1 uppercase tracking-wider">Ссылка на Steam *</label>
                    <input
                      v-model="player.steam_link"
                      type="url"
                      required
                      class="w-full px-3 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                      placeholder="https://steamcommunity.com/id/..."
                    >
                  </div>
                  
                  <div class="flex items-center gap-6 pt-2">
                    <label class="flex items-center gap-2 cursor-pointer group">
                      <div class="relative">
                        <input
                          type="radio"
                          :name="`captain_${index}`"
                          :checked="player.is_captain"
                          @change="handleCaptainChange(index)"
                          class="w-4 h-4 text-blue-500 bg-gray-900 border-gray-600 focus:ring-blue-500/20 focus:ring-2"
                        >
                      </div>
                      <span class="text-gray-300 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                        <span>👑</span>
                        <span>Капитан</span>
                      </span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer group">
                      <div class="relative">
                        <input
                          type="radio"
                          :name="`contact_${index}`"
                          :checked="player.is_contact_person"
                          @change="handleContactPersonChange(index)"
                          class="w-4 h-4 text-purple-500 bg-gray-900 border-gray-600 focus:ring-purple-500/20 focus:ring-2"
                        >
                      </div>
                      <span class="text-gray-300 group-hover:text-purple-400 transition-colors flex items-center gap-1">
                        <span>📞</span>
                        <span>Контактное лицо</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Уведомление -->
            <div class="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 border border-blue-500/40 rounded-xl p-5 backdrop-blur-sm">
              <div class="flex items-start gap-3">
                <span class="text-blue-400 text-xl">ℹ️</span>
                <div>
                  <p class="text-blue-300 text-sm leading-relaxed">
                    <span class="font-bold text-white">ВАЖНО:</span> После отправки заявки ваша команда будет находиться на рассмотрении. 
                    После подтверждения, вам необходимо будет приехать по адресу 
                    <span class="font-bold text-white bg-gray-900/50 px-2 py-1 rounded">г. Кисловодск, ул. Свердлова, д 1</span> 
                    для согласования условий и оплаты.
                  </p>
                </div>
              </div>
            </div>

            <!-- Сообщение об успехе/ошибке -->
            <div v-if="message" 
                id="success-message"
                class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-8 rounded-xl border-4 backdrop-blur-sm animate-slide-up"
                :class="message.type === 'success' 
                ? 'bg-green-500 border-green-700 text-white' 
                : 'bg-red-500 border-red-700 text-white'"
                style="box-shadow: 0 0 50px rgba(0,0,0,0.5); min-width: 300px; text-align: center;">
                <div class="flex flex-col items-center gap-3">
                    <span class="text-4xl">{{ message.type === 'success' ? '✅' : '❌' }}</span>
                    <div class="flex-1">
                    <p class="font-bold text-xl">{{ message.text }}</p>
                    <p v-if="message.details" class="text-sm opacity-90 mt-2">{{ message.details }}</p>
                    </div>
                    <button @click="closeMessage" class="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
                        Закрыть
                    </button>
                </div>
            </div>

            <!-- Кнопки -->
            <div class="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <button 
                type="submit" 
                :disabled="loading"
                class="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:opacity-90 disabled:opacity-50 transition-all overflow-hidden"
              >
                <span class="relative z-10 flex items-center gap-2">
                  <span v-if="loading" class="animate-spin">⚡</span>
                  <span>{{ loading ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАЯВКУ' }}</span>
                  <span v-if="!loading" class="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button 
                type="button" 
                @click="resetForm"
                class="group px-10 py-4 border-2 border-orange-500 text-orange-500 rounded-xl font-bold text-lg hover:bg-orange-500 hover:text-white transition-all"
              >
                <span class="flex items-center gap-2">
                  <span>⟲</span>
                  <span>ОЧИСТИТЬ ФОРМУ</span>
                </span>
              </button>
            </div>
          </form>
        </div>

        <!-- CS2 атрибутика -->
        <div class="mt-8 text-center">
          <div class="inline-flex items-center gap-4 px-6 py-3 bg-gray-900/40 backdrop-blur-sm rounded-full border border-gray-700/50">
            <span class="text-gray-400 text-sm flex items-center gap-2">
              <span class="text-blue-400">⚡</span>
              <span>#CS2Championship</span>
            </span>
            <span class="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span class="text-gray-400 text-sm flex items-center gap-2">
              <span class="text-purple-400">🎮</span>
              <span>8 команд</span>
            </span>
            <span class="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span class="text-gray-400 text-sm flex items-center gap-2">
              <span class="text-pink-400">🏆</span>
              <span>50 000₽</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  team_name: '',
  captain_name: '',
  phone: '',
  email: '',
  players: Array(5).fill().map(() => ({
    full_name: '',
    birth_date: '',
    nickname: '',
    steam_link: '',
    phone: '',
    is_captain: false,
    is_contact_person: false
  }))
})

const loading = ref(false)
const message = ref(null)

// Получаем базовый URL API
const config = useRuntimeConfig()
const apiBase = config.public.apiBase

// Обработка выбора капитана
const handleCaptainChange = (selectedIndex) => {
  formData.value.players.forEach((player, index) => {
    player.is_captain = index === selectedIndex
  })
}

// Обработка выбора контактного лица
const handleContactPersonChange = (selectedIndex) => {
  formData.value.players.forEach((player, index) => {
    player.is_contact_person = index === selectedIndex
  })
}

const resetForm = () => {
  formData.value = {
    team_name: '',
    captain_name: '',
    phone: '',
    email: '',
    players: Array(5).fill().map(() => ({
      full_name: '',
      birth_date: '',
      nickname: '',
      steam_link: '',
      phone: '',
      is_captain: false,
      is_contact_person: false
    }))
  }
  message.value = null
}

const submitForm = async () => {
  loading.value = true
  message.value = null

  try {
    const captain = formData.value.players.find(p => p.is_captain)
    const contactPerson = formData.value.players.find(p => p.is_contact_person)
    
    if (!captain) throw new Error('Укажите капитана команды')
    if (!contactPerson) throw new Error('Укажите контактное лицо')

    console.log('Отправка данных на:', `${apiBase}/api/register-team`)
    console.log('Данные формы:', JSON.stringify(formData.value, null, 2))

    const response = await fetch(`${apiBase}/api/register-team`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData.value)
    })

    console.log('Статус ответа:', response.status)
    
    const responseData = await response.json()
    console.log('Ответ от сервера:', responseData)

    if (response.ok) {
      message.value = {
        type: 'success',
        text: 'ЗАЯВКА ОТПРАВЛЕНА!',
        details: 'Мы свяжемся с вами в ближайшее время для подтверждения.'
      }
      console.log('Message set:', message.value)
    } else {
      throw new Error(responseData.errors 
        ? Object.values(responseData.errors).flat().join(', ') 
        : 'Ошибка при отправке')
    }
  } catch (error) {
    console.error('Ошибка:', error)
    message.value = {
      type: 'error',
      text: 'ОШИБКА',
      details: error.message
    }
  } finally {
    loading.value = false
  }
}
  const closeMessage = () => {
  message.value = null
  resetForm() // Очищаем форму только когда закрывают сообщение
}
</script>

<style scoped>
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}

.registration-form {
  position: relative;
}

input, button {
  transition: all 0.2s ease;
}

input[type="radio"] {
  accent-color: #8b5cf6;
  cursor: pointer;
}
</style>