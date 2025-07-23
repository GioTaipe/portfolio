<template>
  <v-app>
    <Header @toggle-theme="toggleTheme" @toggle-lang="toggleLang" />

    <v-main>
      <v-container class="main-container">
        <!-- Hero Section -->
        <section class="hero-section">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="text-h5 font-weight-bold mb-4">{{ t('greeting') }}</h1>
            
            </v-col>
            <v-col cols="12" md="3" class="text-center">
              <v-avatar size="200" class="mx-auto elevation-2">
                <v-img src="@/assets/IMG_3403.jpg" alt="Foto de perfil" cover />
              </v-avatar>
            </v-col>
          </v-row>
        </section>

        <!-- Content Sections -->
        <section class="section-space">
          <Projects />
        </section>

        <section class="section-space">
          <Experience />
        </section>

        <section class="section-space">
          <Study />
        </section>

        <section class="section-space">
          <v-row justify="center" align="start">
            <v-col cols="12" md="6">
              <Skills />
            </v-col>
            <v-col cols="12" md="6">
              <Contact />
            </v-col>
          </v-row>
        </section>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>


<script setup>
import { useI18n } from 'vue-i18n'
import { getCurrentInstance } from 'vue'
import Header from './components/Header.vue'
import Study from './components/Study.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'
import Contact from './components/Contact.vue'


// i18n
const { t, locale } = useI18n()

// vuetify instance
const app = getCurrentInstance()
const vuetify = app.appContext.config.globalProperties.$vuetify

function toggleTheme() {
  vuetify.theme.global.name.value =
    vuetify.theme.global.name.value === 'dark' ? 'light' : 'dark'
}

function toggleLang() {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<style>
.main-container {
  max-width: 1000px;
  padding: 80px 24px 60px;
  margin: auto;
}

.hero-section {
  margin-bottom: 80px;
}

.section-space {
  margin-top: 80px;
  margin-bottom: 80px;
}

.subtitle-1 {
  color: #555;
  line-height: 1.6;
  font-size: 1.1rem;
}

.v-avatar {
  border-radius: 50%;
  border: 3px solid #e0e0e0;
}

</style>
