<template>
  <v-footer app height="40" class="d-flex justify-center align-center">
    <div class="d-flex align-center">
      <span class="text-caption mr-4">&copy; {{ new Date().getFullYear() }} imgeovanny.dev</span>

      <v-btn icon size="40" :href="'https://github.com/GioTaipe'" target="_blank" class="mx-2">
        <v-icon size="18">mdi-github</v-icon>
      </v-btn>
      <v-btn icon size="40" :href="'https://www.linkedin.com/in/geovanny-tipan-taipe-47a2371a1/'" target="_blank" class="mx-2">
        <v-icon size="18">mdi-linkedin</v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>
