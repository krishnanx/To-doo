import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firestore';
import Cookies from 'js-cookie';
export const Authentication = createContext();
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null);
    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              console.log(user)
            } else {
              setUser(null);
            }
          });
        } else {
          setUser(null);
        }
      }, []);
  return (
    <div>
        <Authentication.Provider value={[user,setUser]}>
            {children}
        </Authentication.Provider>
    </div>
  )
}

export default AuthContext