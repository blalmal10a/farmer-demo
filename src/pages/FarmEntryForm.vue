<template>
  <q-page padding>
    <h5 class="q-ma-none q-pb-md">
      {{ date.formatDate(farm.form.date, 'MMMM') }} ni {{ date.formatDate(farm.form.date, 'D') }}, {{
        date.formatDate(farm.form.date, 'YYYY') }}-a in thlai thar seng dan dinhmun ziak lut rawh le.
    </h5>
    <q-form
      class="row q-col-gutter-md"
      @submit="farm.onSubmitForm($router)"
    >

      <template
        v-for="(item, index) in farm.fields"
        :key="index"
      >
        <div
          class="col-12 col-sm-6 col-lg-4"
          v-if="item.optional ? item.optional() : true"
        >
          <q-input
            dense
            outlined
            v-if="!item.component"
            v-bind="item.props"
            v-model="farm.form[item.key]"
          >
            <template
              v-if="item.before"
              v-slot:prepend
            >
              <q-item-label caption>
                {{ item.before() }}
              </q-item-label>
            </template>
          </q-input>

          <q-select
            outlined
            dense
            v-if="item.component == 'select'"
            v-bind="item.props"
            v-model="farm.form[item.key]"
          ></q-select>
        </div>


      </template>

      <!-- <div class="col-12 q-mt-md">
                <q-date
                  flat
                  bordered
                  title="I pian ni thlang rawh"
                  class="full-width"
                  default-view="Years"
                  v-model="farm.form.date_of_birth"
                ></q-date>
              </div> -->
      <div class="q-mt-lg col-12 row">
        <div class="col-12 col-md-6 col-lg-4">
          <q-btn
            :loading="farm.loadingSubmit"
            color="positive"
            type="submit"
            label="Submit"
            class="full-width"
          >

          </q-btn>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { date } from 'quasar';
import { farm } from 'src/scripts/farm-entry';


</script>
