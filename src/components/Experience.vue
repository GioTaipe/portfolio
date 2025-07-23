<template>
    <v-container>
        <h2 class="text-h5 mb-4 text-center">{{ t('experienceTitle') }}</h2>
        <v-row class="mb-4" justify="center">
            <v-col v-for="job in experience" :key="job.title" cols="12" md="12">
                <v-card class="mb-4" rounded="xl" elevation="2">
                    <v-card-title class="text-h6">{{ job.title }}</v-card-title>
                    <v-card-subtitle>{{ job.company }} — {{ job.date }}</v-card-subtitle>
                    <v-card-text>{{ job.description }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { messages, locale, t } = useI18n()
const experience = computed(() => messages.value[locale.value].experience)
</script>
