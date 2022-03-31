import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDuOGuYY_xk31dgn3UW7IBDPkis5lA78Zo",
  authDomain: "quest-sessions.firebaseapp.com",
  projectId: "quest-sessions",
  storageBucket: "quest-sessions.appspot.com",
  messagingSenderId: "610497758593",
  appId: "1:610497758593:web:270102d3305ecbc3249480"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default { db };