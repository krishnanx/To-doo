import React, { useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Cookies from 'js-cookie';
import {
    getFirestore,collection,getDocs,addDoc
} from 'firebase/firestore'
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence
} from 'firebase/auth'
export const AddData = ()=>{

}


     // Import the functions you need from the SDKs you need

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBa6Kv1wJNHSC6IsUXkjC0jjYs5KBn8Ky0",
      authDomain: "to-doo-b8587.firebaseapp.com",
      projectId: "to-doo-b8587",
      storageBucket: "to-doo-b8587.appspot.com",
      messagingSenderId: "343664035395",
      appId: "1:343664035395:web:742b3171056807dd90b6f6",
      measurementId: "G-5QS4V3W3DV"
      };
  
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      
      const analytics = getAnalytics(app);
      //init services
      export const db = getFirestore()
      export const auth = getAuth(app)
      export const provider = new GoogleAuthProvider();

      //collection reference
      export const colRef = collection(db,'Database')
      export const colRefC = collection(db,'completed')

     
      
  

       
  


