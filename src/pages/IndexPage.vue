<template>
  <q-page padding>
    <LoginRegisterForm v-show="!home.loading && !home.user" />
    \
    <q-table>
      <template v-slot:top-right>
        <div>
          <q-btn
            no-caps
            icon="add"
            label="Add Entry"
          ></q-btn>
        </div>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue';

import { home } from 'src/scripts/home'
import LoginRegisterForm from 'src/components/home/LoginRegisterForm.vue';
const showfirebaseUI = computed(() => {
  return home.user == null
})
onMounted(() => {
  //
})
</script>
