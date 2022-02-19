import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth"
import { getDatabase, ref, set, push, get, child, remove} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();

export { firebase, auth, database, ref, set, push, get, child, remove}