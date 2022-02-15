import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiGu1b_0SCPj8KSEgz_eXhr6WILSTaPa0",
  authDomain: "disney-clone-f27d1.firebaseapp.com",
  projectId: "disney-clone-f27d1",
  storageBucket: "disney-clone-f27d1.appspot.com",
  messagingSenderId: "48892863723",
  appId: "1:48892863723:web:c3aa150d012e0ad2f3caae",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };

export default db;
