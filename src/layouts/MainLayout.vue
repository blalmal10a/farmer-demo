<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- v-if="home.user" -->
        <q-btn
          v-if="false"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title @click="$router.push('/')">
          <span class="cursor-pointer">FARMER DEMO</span>
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
      v-if="false"
    >
      <!-- v-if="home.user" -->
      <q-list>

      </q-list>
    </q-drawer>

    <q-page-container>
      <div>
        <q-inner-loading :showing="home.loading">
          <q-spinner-hourglass
            size="70px"
            color="primary"
          />
        </q-inner-loading>
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref } from 'vue';
import { main } from 'src/boot/main'
import { home } from 'src/scripts/home'
const leftDrawerOpen = ref(false)
</script>
