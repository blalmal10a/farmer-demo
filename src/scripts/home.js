import { firebase, firebaseAuthUI, uiConfig } from "src/boot/firebase";
import { reactive } from "vue";
import { Loading, QSpinnerHourglass } from 'quasar';

const home = reactive({
  loading: false,
  customForm: false,
  user: null,
  rows: [],
  checkAuth,
  getEntries,
  columns: [

    {
      label: 'Date',
      name: 'date',
      field: 'date',
      align: 'left',
    },
    {
      label: 'Thlai',
      name: 'vegetable',
      field: 'vegetable',
      align: 'left',
    },

    {
      label: 'Tam zawng',
      name: 'quantity',
      field: row => `${row.measurement}  ${row.quantity}`,
      align: 'left',
    },
    {
      label: 'Rih zawng (KG)',
      name: 'weight',
      field: 'weight',
      align: 'left',
    },
  ]
})
// quantity, weight, measurement, date, vegetable
function checkAuth(router) {
  try {
    Loading.show({
      spinner: QSpinnerHourglass
    })
    home.loading = true;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/v8/firebase.User
        var uid = user.uid;
        home.user = user
        if (!home.rows?.length) {
          home.getEntries()
        }
        Loading.hide()

        home.loading = false;

      } else {
        Loading.hide()
        router.push({ name: 'home' }).then(
          () => {
            firebaseAuthUI.start('#firebaseui-auth-container', uiConfig);
          }
        )
        home.loading = false;
        home.user = null
      }
    });
  } catch (error) {
    Loading.hide()
  }
}

function getEntries() {
  const db = firebase.firestore();
  if (!home.user?.email) return;
  db.collection(home.user.email).orderBy('date', 'desc').get().then(
    (items) => {
      home.rows = []
      items.forEach(
        data => {
          home.rows.push(data.data())
        }
      )
    }
  )

}
export {
  home
}
