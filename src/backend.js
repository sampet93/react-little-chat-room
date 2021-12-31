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

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "chat-room-c2ecd.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL:
    "https://chat-room-c2ecd-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "bucket.appspot.com",
};

function backend() {
  const app = initializeApp(firebaseConfig);

  // Get a reference to the database service
  const database = getDatabase(app);

  // Get messages from Firebase
  const dbRef = ref(database);

  const getMessages = () => {
    const messages = [];
    get(child(dbRef, `messages/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          messages = snapshot.val();
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return messages;
  };
}

export default backend;
