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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error while creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
