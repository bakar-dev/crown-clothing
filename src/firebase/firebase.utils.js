import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhbP6yQGyVn_8UyyucNiK1B94wfdM0_Ek",
  authDomain: "crown-clothing-249fd.firebaseapp.com",
  databaseURL: "https://crown-clothing-249fd.firebaseio.com",
  projectId: "crown-clothing-249fd",
  storageBucket: "crown-clothing-249fd.appspot.com",
  messagingSenderId: "135025963219",
  appId: "1:135025963219:web:7d28ffa34b72b95487a426"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
