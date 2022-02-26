import { initializeApp } from "@firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDXX4mLutCeVgWPze2JKGEnWzbX7f594A0",
  authDomain: "crewdentialsv2.firebaseapp.com",
  projectId: "crewdentialsv2",
  storageBucket: "crewdentialsv2.appspot.com",
  messagingSenderId: "906782370751",
  appId: "1:906782370751:web:c26c777602b8524ef9cf0a",
  measurementId: "G-LKW71H8KM6",
};

export const firebaseApp = initializeApp(firebaseConfig);
