import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB724ERPtmM_gm3K2H63fbfKEjrU3jwVsQ",
    authDomain: "character-finder-70853.firebaseapp.com",
    projectId: "character-finder-70853",
    storageBucket: "character-finder-70853.appspot.com",
    messagingSenderId: "122301174396",
    appId: "1:122301174396:web:14ba70377dbcb829656ff9",
    measurementId: "G-C0Y1ED8FZP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
