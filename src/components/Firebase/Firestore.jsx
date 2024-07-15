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
    const apiKey = `${import.meta.env.VITE_APP_API_KEY}`
    const authDomain = `${import.meta.env.VITE_APP_AUTH_DOMAIN}`
    const projectId = `${import.meta.env.VITE_APP_PROJECT_ID}`
    const storageBucket= `${import.meta.env.VITE_APP_STORAGE_BUCKET}`
    const messagingSenderId= `${import.meta.env.VITE_APP_MESSAGING_SENDER_ID}`
    const appId = `${import.meta.env.VITE_APP_APP_ID}`
    const measurementId = `${import.meta.env.VITE_APP_MEASUREMENT_ID}`
    const firebaseConfig = {
        apiKey:`${apiKey}`,
        authDomain:`${authDomain}`,
        projectId:`${projectId}`,
        storageBucket:`${storageBucket}`,
        messagingSenderId:`${messagingSenderId}`,
        appId:`${appId}`,
        measurementId:`${measurementId}`
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

     
      
  

       
  


