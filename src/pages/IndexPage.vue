<template>
  <q-page padding>
    <LoginRegisterForm v-show="!home.loading && !home.user" />
    <q-card
      flat
      :class="{
        'q-pb-md q-px-md ': $q.screen.gt.sm,
        'q-pb-sm q-px-sm': $q.screen.sm,
        'q-pb-xs q-px-xs': $q.screen.xs,
      }"
    >
      <q-table
        title="Farming records"
        v-if="home.user"
        :rows="home.rows"
        :columns="home.columns"
        :loading="home.loadingTable"
        grid
        hide-pagination
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
    </q-card>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue';

import { home } from 'src/scripts/home'
import LoginRegisterForm from 'src/components/home/LoginRegisterForm.vue';
import { useRouter } from 'vue-router';
import { date } from 'quasar';
const cardData = [
  // {
  //   key: 'date',
  //   label: 'Date',
  // }
]
onMounted(() => {
  home.getEntries();
})
</script>
