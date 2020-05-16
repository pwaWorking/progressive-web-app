import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyAZTgrqZ_4VMbCm8tN1koseTOck7yd-BYw",
  authDomain: "duatpwndpwa.firebaseapp.com",
  databaseURL: "https://duatpwndpwa.firebaseio.com",
  projectId: "duatpwndpwa",
  storageBucket: "duatpwndpwa.appspot.com",
  messagingSenderId: "1038294861031",
  appId: "1:1038294861031:web:bf17fc893ed9c51de74e42",
  measurementId: "G-TM0FWV2DHM"
}; // 4. Get Firebase Configuration
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BO0m5kmbUaYg00jU5VQYwr4bL-kwrwEBjZDuO8Gk7tKqvZ1WHsurdmGTQkaW3vQjTPF8JanEo7vH02rlVD-H1fM"); // 1. Generate a new key pair

// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log(token)
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')