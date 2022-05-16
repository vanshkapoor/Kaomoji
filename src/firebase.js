import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: `${process.env.FIREBASE_API_KEY}`,
    authDomain: "kaomoji-51685.firebaseapp.com",
    projectId: "kaomoji-51685",
    storageBucket: "kaomoji-51685.appspot.com",
    messagingSenderId: "175076591533",
    appId: "1:175076591533:web:f263077409938851464324",
    measurementId: "G-58V8GVRTHJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)