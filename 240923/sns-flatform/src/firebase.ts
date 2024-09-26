import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtg98lxHzx_LuQnDgy4uqUgWSafSaC6-I",
  authDomain: "sns-flatform01-bc9a7.firebaseapp.com",
  projectId: "sns-flatform01-bc9a7",
  storageBucket: "sns-flatform01-bc9a7.appspot.com",
  messagingSenderId: "795297993170",
  appId: "1:795297993170:web:6d1c118838c5e896bff80b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
