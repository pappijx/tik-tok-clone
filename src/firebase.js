import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2YGiIj4WMdWXdK26GViUPSztL4QUPwrk",
  authDomain: "tik-tok-clone-3faf9.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-3faf9.firebaseio.com",
  projectId: "tik-tok-clone-3faf9",
  storageBucket: "tik-tok-clone-3faf9.appspot.com",
  messagingSenderId: "301154982390",
  appId: "1:301154982390:web:419d84026eda7e6c184fd7",
  measurementId: "G-R0EGEF6LM7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
