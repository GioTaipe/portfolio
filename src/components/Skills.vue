<template>
  <v-container fluid class="pa-0">
    <h2 class="text-h5 mb-6 text-center">{{ t('skillsTitle') }}</h2>
    <v-row class="skills-grid justify-center" align="center">
      <v-col
        v-for="skill in skills"
        :key="skill.name"
        cols="6"
        sm="4"
        md="2"
        class="d-flex flex-column align-center mb-6"
      >
        <div class="bubble d-flex align-center justify-center">
          <v-img :src="getLogo(skill.logo)" alt="" class="logo-img" />
        </div>
        <div class="text-caption mt-2 text-center">{{ skill.name }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import i18n from '@/i18n'

const { locale, t } = useI18n()
const skills = computed(() => i18n.global.messages[locale.value].skills)

const getLogo = (file) => new URL(`../assets/logos/${file}`, import.meta.url).href
</script>

<style scoped>
.bubble {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, background-color 0.3s;
}

/* Estilo para modo claro */
.v-theme--light .bubble {
  background-color: #f5f5f5;
}

/* Estilo para modo oscuro */
.v-theme--dark .bubble {
  background-color: #2c2c2c;
}

.bubble:hover {
  transform: scale(1.05);
}

.logo-img {
  width: 60%;
  height: 60%;
  object-fit: contain;
}


</style>
