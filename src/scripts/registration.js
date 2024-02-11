import { firebase } from "src/boot/firebase";
import { reactive } from "vue";

const registration = reactive({
  loadingSubmit: false,
  customForm: false,
  form: {
    name: '',
    phone: '',
    phone_confirmation: '',
    date_of_birth: '',
    // date_of_birth: '1990/01/01',
    // date_of_birth: '1990/01/01',
  },
  fields: [
    {
      key: 'name',
      props: {
        label: 'Name',
        rules: [val => !!val || 'I hming ziak lut rawh'],
        hint: 'I hming pum ziak lut rawh',
      },
    },

    {
      key: 'phone',
      props: {
        label: 'Phone',
        mask: '##########',
        rules: [val => !!val || 'I phone no. ziak lut rawh'],
        hint: 'I phone number ziak lut rawh'
      },
    },
    {
      key: 'phone_confirmation',
      props: {
        lazy: true,
        mask: '##########',
        label: 'Phone confirm',
        rules: [val => !!val || 'I phone no. ziak lut leh rawh', val => val == registration.form.phone || 'Phone numbers are not same.'],
        hint: 'I phone number ziak lut nawn leh rawh',
      },
    },
    {
      key: 'date_of_birth',
      type: 'date',
      props: {
        lazy: true,
        label: 'Date of Birth',
        rules: [val => !!val || 'I pian ni ziak lut rawh'],
        hint: 'I phone number ziak lut nawn leh rawh',
      },
    },




    // {

    //   key: 'birht_year',
    //   props: {
    //     mask: '####',
    //     label: 'Pian kum',
    //     rules: [val => !!val || 'I hming ziak lut rawh'],
    //   },
    // },

    // {

    //   key: 'birht_month',
    //   component: 'select',
    //   props: {
    //     label: 'Pian thla',
    //     rules: [val => !!val || 'I hming ziak lut rawh'],
    //     options: [
    //       'January',
    //       'February',
    //       'March',
    //       'April',
    //       'May',
    //       'June',
    //       'July',
    //       'August',
    //       'September',
    //       'October',
    //       'November',
    //       'December ',
    //     ]
    //   },

    // },


    // {
    //   key: 'birth_date',
    //   props: {
    //     mask: '##',
    //     label: 'Pian ni',
    //     rules: [val => !!val || 'I hming ziak lut rawh'],
    //   },
    // },

  ],
  submitCustomForm
})


function submitCustomForm() {
  const email = `${registration.form.phone}@farmers.demo`
  const password = registration.form.date_of_birth
  firebase.auth().fetchSignInMethodsForEmail(email)
    .then((methods) => {
      if (methods.length > 0) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        // Proceed to password input or other actions
      } else {
        console.log('Email does not exist:', email);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(function (userCredential) {
            // User is signed in anonymously
            var user = userCredential.user;
            console.log("User signed in anonymously with UID:", user.uid);

            // Update the user's profile
            return user.updateProfile({
              displayName: registration.form.name,
              photoURL: registration.form.phone
            });
          })
          .then(function () {
            console.log("Profile updated successfully.");
          })
          .catch(function (error) {
            // Handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Error signing in anonymously or updating profile: ", errorCode, errorMessage);
          });
      }
    })
    .catch((error) => {
      console.error('Error fetching sign-in methods:', error);
    });


}

// Call the function to sign in and update the profile
export {
  registration
}
