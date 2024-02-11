import { Notify, date } from "quasar";
import { firebase, firebaseAuthUI } from "src/boot/firebase";
import { reactive } from "vue";
import { home } from "./home";


const farm = reactive({
  form: {
    date: date.formatDate(new Date(), 'YYYY-MM-DD'),
    vegetable: '',
    measurement: '',
    quantity: '',
  },
  loadingSubmit: false,
  fields: [],
  onSubmitForm,
  resetForm
})
farm.fields = initializeFarmFields();
function resetForm() {
  farm.form = {
    date: date.formatDate(new Date(), 'YYYY-MM-DD'),
    vegetable: '',
    measurement: '',
    quantity: '',
  }
}
function displayUnit() {
  return farm.form.measurement == 'A dang' ? form.form.custom_measurement : farm.form.measurement
}

function customMeasurementCondition() {
  return farm?.form?.measurement == 'A dang'
}

export {
  farm
}




const db = firebase.firestore();



function onSubmitForm(router) {
  try {
    farm.loadingSubmit = true
    db.collection(home.user?.email).add({
      ...farm.form
    }).finally(() => {
      farm.loadingSubmit = false
      farm.resetForm()
      router.push({
        name: 'home'
      })
    }).catch(
      (error) => {
        Notify.create(error.message)
        console.error(error.message);
      }
    )


  } catch (error) {
    farm.loadingSubmit = false
    Notify.create(error.message)
    console.error(error.message);
  }
}
function initializeFarmFields() {
  return [
    {
      key: 'date',

      props: {
        hint: '',
        label: 'Date',
        type: 'date',
      },
    },


    {
      key: 'vegetable',
      props: {
        label: 'Thlai (eg: Alu, Antam, Behlawi, Balhla, etc)',
        rules: [val => !!val || 'Thlai hming pakaht ziak lut rawh'],

      },
    },

    {
      key: 'measurement',
      component: 'select',
      props: {
        label: 'Tehna',
        rules: [val => !!val || 'Thlai hming pakaht ziak lut rawh'],
        options: [
          'Tel',
          'Fun',
          'Khai',
          'Bag',
          'Pkcup 207 Load',
          '407 truck Load',
          'A dang',
        ]
      },
    },

    {
      key: 'custom_measurement',
      optional: customMeasurementCondition,
      props: {
        label: 'A tehna',
        rules: [val => !!val || 'A tehna fung atana in hman ziak lut rawh'],

      },
    },
    {
      key: 'quantity',
      props: {
        type: 'number',
        label: 'Tam zawng',
        hint: ''
      },
      before: displayUnit
    },
    {
      key: 'weight',
      props: {
        label: 'Thlai thar zawng zawng rih zawng ang hu',
        rules: [val => !!val || 'Thlai thar rih zawng ziak lut rawh'],
        step: '0.01',
        type: 'number',
      },
      before: () => 'Kg'
    },
  ]
}
