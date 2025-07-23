<template>
  <v-container>
    <h2 class="text-h5 mb-4 text-center">{{ t('projectsTitle') }}</h2>
    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        md="12"
      >
        <v-card class="mb-4" rounded="xl" elevation="2">
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>
            {{ project.description }}
            <v-row dense class="mt-2">
              <v-col
                v-for="(tech, tIndex) in project.tech"
                :key="tIndex"
                cols="auto"
                class="d-flex align-center"
              >
                <v-icon size="20" class="mr-1">{{ tech.icon }}</v-icon>
                <span class="text-caption">{{ tech.name }}</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn :href="project.link" target="_blank" color="primary">GitHub</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { messages, locale, t } = useI18n()

const projects = computed(() => messages.value[locale.value].projects)
</script>
