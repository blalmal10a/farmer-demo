import { firebase, firebaseAuthUI, uiConfig } from "src/boot/firebase";
import { reactive } from "vue";
import { Loading, QSpinnerHourglass } from 'quasar';

const home = reactive({
  loading: false,
  customForm: false,
  user: null,
  checkAuth
})
function checkAuth() {
  try {

    Loading.show({
      spinner: QSpinnerHourglass
    })
    // home.loading = true;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/v8/firebase.User
        var uid = user.uid;
        home.user = user
        Loading.hide()

        home.loading = false;
      } else {
        Loading.hide()
        home.loading = false;
        home.user = null
        firebaseAuthUI.start('#firebaseui-auth-container', uiConfig);
      }
    });
  } catch (error) {
    Loading.hide()
  }
}
export {
  home
}
