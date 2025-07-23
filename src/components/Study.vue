<template>
  <v-container>
    <h2 class="text-h5 mb-4 text-center">{{ t('studyTitle') }}</h2>
    <v-row dense>
      <v-col v-for="(study, index) in studies" :key="study.title" cols="12" sm="6" md="12">
        <v-card class="mb-4" rounded="xl" elevation="2">
          <v-card-title class="text-h6">{{ study.title }}</v-card-title>
          <v-card-subtitle>{{ study.place }}</v-card-subtitle>
          <v-card-text class="text-caption">{{ study.date }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { messages, locale, t } = useI18n()
const studies = computed(() => messages.value[locale.value].studies)
</script>
