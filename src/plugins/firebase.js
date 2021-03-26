import Vue from 'vue';
import firebase from "firebase";
import store from "../store";

var firebaseConfig = {
  apiKey: "AIzaSyDCoLxYpS-YJNZ6_w2o4IfHcUd4QREFESM",
  authDomain: "workshop-web-app.firebaseapp.com",
  projectId: "workshop-web-app",
  storageBucket: "workshop-web-app.appspot.com",
  messagingSenderId: "867501455010",
  appId: "1:867501455010:web:2d3d7229d9a98bb12149fb",
  measurementId: "G-MPNJMZNLHH"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("addUser", { name: user.displayName, email: user.email });
});

Vue.prototype.$firebase = firebase;

export default firebase;
