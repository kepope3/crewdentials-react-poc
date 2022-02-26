import { initializeApp } from "@firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDjP0FffLlRe9ueNc6i2x18ilbxi5DC-Nc",
  authDomain: "crewdentials-manager-v2.firebaseapp.com",
  projectId: "crewdentials-manager-v2",
  storageBucket: "crewdentials-manager-v2.appspot.com",
  messagingSenderId: "229478791752",
  appId: "1:229478791752:web:e70a8b3ab7a3314255367d",
  measurementId: "G-1SQNB0SB2J",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const datastore = {
  getUsers: async () => {
    const usersCollection = collection(db, "users");
    const usersSnapshot = await getDocs(usersCollection);
    return usersSnapshot.docs.map((user) => user.data());
  },
};
