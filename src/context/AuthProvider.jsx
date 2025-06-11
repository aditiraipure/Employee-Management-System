import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //  localStorage.clear()
  
  const [userData, setUserData] = useState([]);

  
  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage() || {};
    setUserData(employees || []); // fallback to [] if employees is undefined
  }, []);
  
 

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;