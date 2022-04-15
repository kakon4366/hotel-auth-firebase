// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBRUmde8dRMc_wP0qfBhnTsdFRLi2-hh5U",
	authDomain: "hotel-auth-firebase.firebaseapp.com",
	projectId: "hotel-auth-firebase",
	storageBucket: "hotel-auth-firebase.appspot.com",
	messagingSenderId: "836159169855",
	appId: "1:836159169855:web:c75d34c55bba1db2061f8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
