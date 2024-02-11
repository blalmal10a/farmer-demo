import { firebase, firebaseAuthUI, uiConfig } from "src/boot/firebase";
import { reactive } from "vue";

const home = reactive({
  loading: false,
  showLoginForm: false,
  user: null,
  checkAuth
})
function checkAuth() {
  home.loading = true;
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      home.user = user

      home.loading = false;
    } else {
      home.loading = false;
      home.user = null
      firebaseAuthUI.start('#firebaseui-auth-container', uiConfig);

    }
  });
}
export {
  home
}
