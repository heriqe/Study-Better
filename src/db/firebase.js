// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjUYXlqkYfdewk0tZ2KKBGexGPp787DwU",
  authDomain: "studybetter-bd084.firebaseapp.com",
  projectId: "studybetter-bd084",
  storageBucket: "studybetter-bd084.firebasestorage.app",
  messagingSenderId: "180344267683",
  appId: "1:180344267683:web:c0065e7732870c31137016",
  measurementId: "G-ZLZ4B8H72J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);


export { auth, googleProvider };