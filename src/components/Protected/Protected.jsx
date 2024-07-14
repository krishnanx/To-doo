import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthCheck from './AuthCheck';

const Protected = ({ children }) => {
  const isAuthenticated = useAuthCheck();
  console.log(isAuthenticated)
  if (isAuthenticated) {
    return <Navigate to="/important" />;
  }

  return children;
};

export default Protected
