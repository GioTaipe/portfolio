<template>
  <v-container class="d-flex justify-center">
    <v-form ref="formRef" class="contact-form" :class="{ 'dark-mode': theme.global.name.value === 'dark' }"
      @submit.prevent="sendEmail">

      <p class="title">{{ t('contactTitle') }}</p>
      <p class="message">{{ t('contactInfo') }}</p>

      <label>
        <input required v-model="form.name" placeholder=" " type="text" class="input" />
        <span>{{ t('contactName') }}</span>
      </label>

      <label>
        <input required v-model="form.email" placeholder=" " type="email" class="input" />
        <span>{{ t('contactEmail') }}</span>
      </label>

      <label>
        <textarea required v-model="form.message" placeholder=" " class="input" rows="4"></textarea>
        <span>{{ t('contactMessage') }}</span>
      </label>

      <button class="submit" type="submit">{{ t('contactSend') }}</button>

      <p class="status" v-if="status">
        <span :class="status.success ? 'success' : 'error'">{{ status.message }}</span>
      </p>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'

const { t } = useI18n()
const theme = useTheme()
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

emailjs.init(publicKey)

const formRef = ref(null)
const form = ref({
  name: '',
  email: '',
  message: ''
})

const status = ref(null)

const isValidForm = () => {
  const { name, email, message } = form.value

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!name.trim() || !email.trim() || !message.trim()) {
    status.value = { success: false, message: 'Todos los campos son obligatorios.' }
    return false
  }

  if (!emailRegex.test(email)) {
    status.value = { success: false, message: 'Por favor introduce un correo válido.' }
    return false
  }

  return true
}

const sendEmail = async () => {
  if (!isValidForm()) return

  try {
    await emailjs.send(serviceId, templateId, {
      from_name: form.value.name,
      from_email: form.value.email,
      message: form.value.message
    })

    status.value = { success: true, message: t('contactSent') }
    form.value = { name: '', email: '', message: '' }
    formRef.value.reset()
    setTimeout(() => (status.value = null), 3000)
  } catch (error) {
    console.error(error)
    status.value = { success: false, message: 'Error al enviar el mensaje.' }
  }
}

</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 400px;
  background-color: #fff;
  padding: 25px;
  border-radius: 20px;
  position: relative;
}
.contact-form.dark-mode {
  background-color: #1e1e1e;
  color: #e0e0e0;
}

.contact-form.dark-mode .input {
  background-color: #2a2a2a;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-form.dark-mode .input + span {
  color: #aaa;
}

.contact-form.dark-mode .input:valid + span {
  color: #90ee90;
}

.contact-form.dark-mode .submit {
  background-color: #3b82f6;
}

.contact-form.dark-mode .submit:hover {
  background-color: #2563eb;
}

.title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
}

.title::after {
  animation: pulse 1s linear infinite;
}

.message {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

label {
  position: relative;
  width: 100%;
}

.input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
  outline: none;
  resize: none;
  font-family: inherit;
}

.input+span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  pointer-events: none;
  transition: 0.3s ease;
}

.input:focus+span,
.input:valid+span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.input:valid+span {
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transition: 0.3s ease;
  cursor: pointer;
}

.submit:hover {
  background-color: rgb(56, 90, 194);
}

.status {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>