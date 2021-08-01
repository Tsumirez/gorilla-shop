import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBDQ2prRfypRhZVbzd8EjAZI3oRyKrLkSs",
  authDomain: "gorilla-shop.firebaseapp.com",
  projectId: "gorilla-shop",
  storageBucket: "gorilla-shop.appspot.com",
  messagingSenderId: "506837299996",
  appId: "1:506837299996:web:95723a9f246e5eb56fc0d9",
  measurementId: "G-M88H12Z9C1",
};

export const createUserProfileDocument = async (userAuth, extraData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...extraData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
