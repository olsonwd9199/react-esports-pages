import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPylhsbiH0iGunfr7Vx7mNf2ttUGuuios",
    authDomain: "esports-66da3.firebaseapp.com",
    projectId: "esports-66da3",
    storageBucket: "esports-66da3.appspot.com",
    messagingSenderId: "972930521008",
    appId: "1:972930521008:web:b85e6b148e4f9600a62875",
    measurementId: "G-YRXFD914LC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);