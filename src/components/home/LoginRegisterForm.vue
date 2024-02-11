<template>
  <div class="row justify-center">
    <q-card
      v-show="!registration.customForm"
      style="width: min(400px, 90vw); margin-top: 20vh;"
    >
      <q-card-section>
        <div>
          <div id="firebaseui-auth-container"></div>
          <div class="row justify-center">
            <q-btn
              class="q-pa-none"
              no-caps
              style="width: 220px;"
              color="primary"
              @click="registration.customForm = true"
            >
              <div class="full-width row text-left">
                <div class="col-auto q-px-md">
                  <q-icon name="emoji_people" />
                </div>
                <div class="col">
                  Ka hmang thiam lo
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card
      v-if="registration.customForm"
      style="width: min(400px, 90vw); "
    >
      <!-- margin-top: calc((100vh - 450px)/5); -->
      <q-card-section>
        <div class="row justify-center">
          <div class="">
            <q-form
              class="row"
              @submit="registration.submitCustomForm()"
            >
              <div
                class="col-12"
                v-for="(item, index) in registration.fields"
                :key="index"
              >
                <q-input
                  dense
                  outlined
                  class="q-mt-md"
                  :type="item.type ?? 'text'"
                  v-if="!item.component"
                  v-bind="item.props"
                  v-model="registration.form[item.key]"
                ></q-input>
                <q-select
                  outlined
                  dense
                  class="q-mt-md"
                  v-if="item.component == 'select'"
                  v-bind="item.props"
                  v-model="registration.form[item.key]"
                ></q-select>
              </div>

              <div class="col-12 q-mt-md">
                <div>
                  <q-date
                    flat
                    bordered
                    title="I pian ni thlang rawh"
                    class="full-width"
                    default-view="Years"
                    mask="YYYY-MM-DD"
                    v-model="registration.form.date_of_birth"
                  ></q-date>
                </div>
                <div class="q-mt-md">
                  <q-btn
                    :loading="registration.loadingSubmit"
                    color="positive"
                    class="full-width"
                    type="submit"
                    label="Submit"
                  >

                  </q-btn>
                </div>
              </div>

              <div class="col-12 q-mt-md">
                <q-btn
                  @click="registration.customForm = false"
                  color="grey"
                  class="full-width"
                  label="Back"
                >

                </q-btn>
              </div>
            </q-form>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup>
import { home } from 'src/scripts/home';

import { registration } from 'src/scripts/registration'
</script>
<style>
.q-date__header-subtitle {
  display: none;
}

.q-date--portrait-standard .q-date__header {
  pointer-events: none;
  background-color: none;
  height: auto;
}
</style>
