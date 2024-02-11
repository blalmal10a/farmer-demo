<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="home.user"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          FARMER DEMO
        </q-toolbar-title>
        <q-btn
          v-if="home.user"
          flat
          dense
          round
          icon="logout"
          @click="main.onConfirmLogout()"
        ></q-btn>


      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      v-if="home.user"
    >
      <q-list>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref } from 'vue';
import { main } from 'src/boot/main'
import { home } from 'src/scripts/home'
const leftDrawerOpen = ref(false)
</script>
