import React, { useEffect } from 'react'
import {colRef} from './Firebase/Firestore';
import {getDocs, onSnapshot} from 'firebase/firestore'
export const FetchData =()=>{
    /*const response = await getDocs(colRef)
    ////console.log(response)
    return response
    //const tasksData = response.docs.map(doc => doc.data());
          ////console.log(tasksData); // This should only log once when data is fetched
          //setTodo(tasksData)*/
        
            /*return new Promise((resolve, reject) => {
                onSnapshot(colRef, (snapshot) => {
                    const docs = snapshot.docs;
                    resolve(docs);
                    ////console.log(docs)
                }, (error) => {
                    reject(error);
                });
            
                // Optionally, return unsubscribe function for cleanup
                // return unsubscribe;
            });*/
       
    }        
    
   
    

