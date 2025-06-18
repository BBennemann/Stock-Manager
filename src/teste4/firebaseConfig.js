import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAC9QA2Y067fgC3REPp-tGL0QwFBS1IjVM",
  authDomain: "estoque-unika.firebaseapp.com",
  projectId: "estoque-unika",
  storageBucket: "estoque-unika.firebasestorage.app",
  messagingSenderId: "1081951183790",
  appId: "1:1081951183790:web:6cf2576f4afc7b1039de3f"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
