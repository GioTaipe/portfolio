<template>
  <v-app-bar app flat>
    <div class="d-flex align-center" style="margin-left: 30px;">
      <v-img
        src="@/assets/profile.png"
        width="60"
        height="60"
        class="mr-2 avatar-img"
        alt="Avatar"
        cover
      />
    </div>
    <v-toolbar-title>iamgeovanny.dev</v-toolbar-title>
    <v-spacer />

    <Download file-url="/CV.pdf">
      {{ t('resume') }}
    </Download>

    <v-btn icon @click="$emit('toggleLang')">
      {{ $i18n.locale === 'es' ? 'EN' : 'ES' }}
    </v-btn>

    <v-btn icon @click="$emit('toggleTheme')">
      <v-icon>
        {{ dark ? 'mdi-weather-sunny' : 'mdi-moon-waning-crescent' }}
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import Download from './Download.vue'
import { useI18n } from 'vue-i18n'
import { defineProps } from 'vue'

defineProps(['dark'])

const { t } = useI18n()
</script>

<style scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
}
</style>
