import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJ_WCBzb_LrydoQTS-VIzAulQg56FQdWI",
    authDomain: "welock-chat.firebaseapp.com",
    databaseURL: "https://welock-chat.firebaseio.com",
    projectId: "welock-chat",
    storageBucket: "welock-chat.appspot.com",
    messagingSenderId: "810193047764",
    appId: "1:810193047764:web:a0824cf346214eb04fab41",
    measurementId: "G-MK7KEMLLXP"
  };

  
var app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.database();