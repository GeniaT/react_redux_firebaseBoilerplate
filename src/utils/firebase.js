import * as firebase from 'firebase';

// To remplace with config from new app setup from firebase:
const config = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "",
    messagingSenderId: "xxx"
  };

firebase.auth.Auth.Persistence.LOCAL; //https://firebase.google.com/docs/auth/web/auth-state-persistence
firebase.initializeApp(config);


const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthprovider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, facebookAuthprovider };
