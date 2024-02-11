import { reactive } from "vue";
import { firebase } from "src/boot/firebase";

const main = reactive({
  onConfirmLogout
})

function onConfirmLogout(router) {
  try {
    router.push({ name: 'home' }).then(
      () => {
        firebase.auth().signOut()

      }
    )
  } catch (error) {
    console.error(error.message);
  }
}
export { main }
