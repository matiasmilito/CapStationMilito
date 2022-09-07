// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1fpDwgfkyoIbM8gYXHnk-nd1JUHZi_WE",
  authDomain: "capstation-ff673.firebaseapp.com",
  projectId: "capstation-ff673",
  storageBucket: "capstation-ff673.appspot.com",
  messagingSenderId: "826697721919",
  appId: "1:826697721919:web:75ab3281588cea1c2eb08a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);