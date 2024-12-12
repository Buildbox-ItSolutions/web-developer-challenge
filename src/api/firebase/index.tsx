// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxEVopUXniCDxAYUzGOphoEAzTni0pxpY",
  authDomain: "buildbox-1e9eb.firebaseapp.com",
  projectId: "buildbox-1e9eb",
  storageBucket: "buildbox-1e9eb.appspot.com",
  messagingSenderId: "908076855772",
  appId: "1:908076855772:web:2f1e169f8a1e02bce21f19",
  measurementId: "G-1ESQB8Q3XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);