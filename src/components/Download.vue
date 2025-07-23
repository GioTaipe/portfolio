<template>
    <v-btn color="primary" :href="fileUrl" download>
        <v-icon left>mdi-download</v-icon>
        <slot></slot>
    </v-btn>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    fileUrl: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: 'Download resume'
    }
})
</script>
