import React, { createContext, useEffect, useState } from "react";
import { firebase } from "../firebase/firebase";

import { getAuth, onIdTokenChanged,signOut } from 'firebase/auth';

const Context = createContext();

function ContextProvider({ children }) {
 
  const [authenticate, setAuthenticate] = useState(true);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  const verifyToken= () => {
  
    const auth = getAuth(firebase);

    // Observa mudanças no token de autenticação
    const unsubscribe =  onIdTokenChanged(auth, (user) => {

      if (user) {
     
        console.log('token valido:', user);
        
        localStorage.setItem('token',user.accessToken)

        setAuthenticate(true);

        
       
      } else {
        setAuthenticate(false);
        console.log('Token invalido');
       
      }
    });

   
    return unsubscribe();
   
 
  }

  async function handleLogout() {
 
    try {
      const auth = getAuth(firebase);
      await signOut(auth);
      console.log('Usuário deslogado com sucesso.');
      localStorage.removeItem("token");
      setUser(null)
      setAuthenticate(false)
     
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
    
  }

  useEffect(() => {
   
    verifyToken()
  
    setLoading(false);
    

  }, [user]);

  if (loading) {
    return;
  }
  return (
    <Context.Provider value={{ authenticate, handleLogout ,setUser,user }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider};
