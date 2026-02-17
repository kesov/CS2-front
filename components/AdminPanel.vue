<template>
  <div class="admin-panel min-h-screen py-12 relative overflow-hidden">
    <!-- Фон -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[url('https://storage.yandexcloud.net/s3-metaratings-storage/images/71/a4/71a4624b2db8237948f0a41c0925e1ba.png')] bg-cover bg-center opacity-70"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-cs-dark/90 via-cs-dark/70 to-cs-dark/90"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Заголовок -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              АДМИН-ПАНЕЛЬ
            </span>
          </h1>
          <p class="text-xl text-gray-300">Управление зарегистрированными командами</p>
        </div>

        <!-- Форма ввода пароля -->
        <div v-if="!isAuthenticated" class="max-w-md mx-auto bg-gray-900/60 border border-purple-500/30 rounded-xl p-8 backdrop-blur-md">
          <h2 class="text-2xl font-bold text-white mb-4 text-center">Введите пароль</h2>
          <div class="space-y-4">
            <input 
              type="password" 
              v-model="passwordInput" 
              placeholder="Пароль"
              class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              @keyup.enter="checkPassword"
            >
            <button 
              @click="checkPassword" 
              :disabled="passwordLoading"
              class="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-bold hover:opacity-90 disabled:opacity-50 transition-all"
            >
              {{ passwordLoading ? 'Проверка...' : 'Войти' }}
            </button>
            <p v-if="passwordError" class="text-red-400 text-sm text-center">{{ passwordError }}</p>
          </div>
        </div>

        <!-- Кнопка загрузки (только для авторизованных) -->
        <div v-else class="text-center mb-8">
          <button 
            @click="loadTeams" 
            :disabled="loading"
            class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:opacity-90 disabled:opacity-50 transition-all"
          >
            <span v-if="loading">ЗАГРУЗКА...</span>
            <span v-else>📋 ЗАГРУЗИТЬ КОМАНДЫ</span>
          </button>
          
          <!-- Кнопка выхода -->
          <button 
            @click="logout" 
            class="ml-4 px-8 py-4 bg-gray-700 text-white rounded-xl font-bold text-lg hover:bg-gray-600 transition-all"
          >
            🚪 Выйти
          </button>
        </div>

        <!-- Список команд (с защищенными данными) -->
        <div v-if="teams.length > 0" class="space-y-6">
          <div v-for="team in teams" :key="team.id" 
               class="bg-gray-900/60 border border-blue-500/30 rounded-xl p-6 backdrop-blur-md">
            
            <!-- Информация о команде (публичная часть) -->
            <div class="flex justify-between items-start mb-4">
              <div>
                <h2 class="text-2xl font-bold text-white">{{ team.team_name }}</h2>
                <p class="text-gray-400">Капитан: {{ team.captain_name }}</p>
                <p class="text-gray-400">Статус: 
                  <span :class="{
                    'text-yellow-400': team.status === 'pending',
                    'text-green-400': team.status === 'approved',
                    'text-red-400': team.status === 'rejected'
                  }">
                    {{ team.status === 'pending' ? 'На рассмотрении' : team.status }}
                  </span>
                </p>
                <p class="text-gray-400 text-sm">Дата регистрации: {{ new Date(team.created_at).toLocaleString() }}</p>
              </div>
              
              <!-- Кнопка удаления (только для авторизованных) -->
              <button 
                @click="showDeleteModal(team)"
                class="px-4 py-2 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/30 transition-all"
              >
                🗑️ Удалить
              </button>
            </div>

            <!-- Конфиденциальная информация (видна только после авторизации) -->
            <div v-if="isAuthenticated" class="mt-4 p-4 bg-gray-800/50 rounded-lg border border-green-500/30 mb-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-gray-400 text-sm">Телефон:</p>
                  <p class="text-white font-mono">{{ team.phone }}</p>
                </div>
                <div>
                  <p class="text-gray-400 text-sm">Email:</p>
                  <p class="text-white">{{ team.email || 'не указан' }}</p>
                </div>
              </div>
            </div>

            <!-- Состав команды -->
            <div class="mt-4">
              <h3 class="text-lg font-bold text-white mb-3">Состав:</h3>
              <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
                <div v-for="player in team.players" :key="player.id" 
                     class="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                  <p class="text-white font-bold">{{ player.nickname }}</p>
                  <p class="text-gray-400 text-sm">{{ player.full_name }}</p>
                  
                  <!-- Конфиденциальные данные игрока (видно только после авторизации) -->
                  <div v-if="isAuthenticated" class="mt-2 pt-2 border-t border-gray-700">
                    <p class="text-gray-400 text-xs">📞 {{ player.phone }}</p>
                    <p class="text-gray-400 text-xs truncate">🎮 {{ player.steam_link }}</p>
                  </div>
                  
                  <div class="flex gap-2 mt-1">
                    <span v-if="player.is_captain" class="text-xs text-blue-400">👑 Капитан</span>
                    <span v-if="player.is_contact_person" class="text-xs text-purple-400">📞 Контакт</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Сообщение, если нет команд -->
        <div v-else-if="loaded" class="text-center py-12">
          <p class="text-gray-400 text-xl">Нет зарегистрированных команд</p>
        </div>

        <!-- Модальное окно для удаления -->
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center">
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="showModal = false"></div>
          <div class="relative bg-gray-900 border-2 border-red-500/50 rounded-xl p-8 max-w-md w-full mx-4">
            <h3 class="text-2xl font-bold text-white mb-4">Подтверждение удаления</h3>
            <p class="text-gray-300 mb-4">Вы уверены, что хотите удалить команду <span class="text-white font-bold">{{ selectedTeam?.team_name }}</span>?</p>
            
            <div class="flex gap-3">
              <button 
                @click="deleteTeam" 
                :disabled="deleteLoading"
                class="flex-1 px-4 py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 disabled:opacity-50 transition-all"
              >
                {{ deleteLoading ? 'Удаление...' : 'Удалить' }}
              </button>
              <button 
                @click="showModal = false" 
                class="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition-all"
              >
                Отмена
              </button>
            </div>

            <!-- Сообщение об ошибке -->
            <p v-if="deleteError" class="mt-4 text-red-400 text-sm">{{ deleteError }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const config = useRuntimeConfig()
const apiBase = config.public.apiBase

// Аутентификация
const isAuthenticated = ref(false)
const passwordInput = ref('')
const passwordLoading = ref(false)
const passwordError = ref('')

const teams = ref([])
const loading = ref(false)
const loaded = ref(false)

// Для удаления
const showModal = ref(false)
const selectedTeam = ref(null)
const deleteLoading = ref(false)
const deleteError = ref('')

// Проверка пароля
const checkPassword = () => {
  passwordLoading.value = true
  passwordError.value = ''
  
  setTimeout(() => {
    if (passwordInput.value === '123456') {
      isAuthenticated.value = true
      passwordInput.value = ''
    } else {
      passwordError.value = 'Неверный пароль'
    }
    passwordLoading.value = false
  }, 500) // Имитация задержки
}

// Выход
const logout = () => {
  isAuthenticated.value = false
  teams.value = []
  loaded.value = false
}

const loadTeams = async () => {
  loading.value = true
  try {
    const response = await fetch(`${apiBase}/api/teams`)
    const data = await response.json()
    teams.value = data
    loaded.value = true
  } catch (error) {
    console.error('Ошибка загрузки:', error)
  } finally {
    loading.value = false
  }
}

const showDeleteModal = (team) => {
  selectedTeam.value = team
  deleteError.value = ''
  showModal.value = true
}

const deleteTeam = async () => {
  deleteLoading.value = true
  deleteError.value = ''

  try {
    const response = await fetch(`${apiBase}/api/teams/${selectedTeam.value.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: '123456' })
    })

    const data = await response.json()

    if (response.ok) {
      teams.value = teams.value.filter(t => t.id !== selectedTeam.value.id)
      showModal.value = false
    } else {
      deleteError.value = data.error || 'Ошибка при удалении'
    }
  } catch (error) {
    deleteError.value = 'Ошибка соединения'
  } finally {
    deleteLoading.value = false
  }
}
</script>

<style scoped>
.admin-panel {
  position: relative;
}
</style>