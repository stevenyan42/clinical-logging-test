import dotenv from 'dotenv';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    sendEmailVerification, 
    sendPasswordResetEmail 
} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import admin from "firebase-admin";
import serviceAccount from "../firebaseService.json" assert { type:'json' };  
dotenv.config();

const firebaseConfig = {
apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

initializeApp(firebaseConfig);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    admin
};