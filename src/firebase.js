import firebase from "firebase/app";
import "firebase/database";

let config = {
    apiKey: "AIzaSyDdICBzFRSHuU_JKFUgY4VbSLEooNpVJx4",
    authDomain: "gw2db-6cb51.firebaseapp.com",
    databaseURL: "https://gw2db-6cb51-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gw2db-6cb51",
    storageBucket: "gw2db-6cb51.appspot.com",
    messagingSenderId: "1004135867206",
    appId: "1:1004135867206:web:7aa2f45e288ea64deb7b47"
  };

firebase.initializeApp(config);
export default firebase.database();
