<template>
  <q-page padding>
    <LoginRegisterForm v-show="!home.loading && !home.user" />
    <q-table
      title="Farming records"
      v-if="home.user"
      :rows="home.rows"
      :columns="home.columns"
      :loading="home.loadingTable"
    >
      <template v-slot:top-right>
        <div>
          <q-btn
            no-caps
            icon="add"
            color="green"
            label="Add Entry"
            :to="{
              name: 'farm-entry'
            }"
          ></q-btn>
        </div>
      </template>
      <template
        v-slot:no-data
        v-if="!home.loadingTable"
      >
        <q-btn
          no-caps
          icon="add"
          color="green"
          label="Add Entry"
          class="full-width"
          :to="{
            name: 'farm-entry'
          }"
        ></q-btn>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue';

import { home } from 'src/scripts/home'
import LoginRegisterForm from 'src/components/home/LoginRegisterForm.vue';
import { useRouter } from 'vue-router';

onMounted(() => {
  home.getEntries();
})
</script>
