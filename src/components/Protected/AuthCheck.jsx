import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firestore';

const useAuthCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return isAuthenticated;
};

export default useAuthCheck;
