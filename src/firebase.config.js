import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  child,
  push,
  set,
  get,
  onValue,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "chat-room-c2ecd.firebaseapp.com",
  databaseURL:
    "https://chat-room-c2ecd-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "bucket.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
