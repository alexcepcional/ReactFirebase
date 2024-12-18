import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsW7iuY1qVl6ejZORPVwT_Bit9gEecUMA",
  authDomain: "trade-mark-77595.firebaseapp.com",
  projectId: "trade-mark-77595",
  storageBucket: "trade-mark-77595.firebasestorage.app",
  messagingSenderId: "1057944711041",
  appId: "1:1057944711041:web:d57f540745ffd1844a8280"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)