import React from 'react';
import { useOutlet, Navigate } from 'react-router-dom';

const auth = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return true;
  } else {
    return false;
  }
};

const PrivateRoutes = () => {
  const outlet = useOutlet();

  const auth = () => {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  };
  const userAuth = auth();
  if (!userAuth) {
    return <Navigate to='/login' replace />;
  }

  return <div> {outlet}</div>;
};

export default PrivateRoutes;
