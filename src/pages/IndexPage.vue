<template>
  <q-page class="flex flex-center">
    <q-inner-loading :showing="home.loading">
      <q-spinner-hourglass
        size="70px"
        color="primary"
      />
    </q-inner-loading>

    <div id="firebaseui-auth-container"></div>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue';

import { home } from 'src/scripts/home'
const showfirebaseUI = computed(() => {
  return home.user == null
})
onMounted(() => {

  // home.checkAuth()
})
</script>
