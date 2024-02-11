import { reactive } from "vue";
import { firebase } from "src/boot/firebase";

const main = reactive({
  onConfirmLogout
})

function onConfirmLogout() {
  try {
    firebase.auth().signOut()
  } catch (error) {
    console.error(error.message);
  }
}
export { main }
