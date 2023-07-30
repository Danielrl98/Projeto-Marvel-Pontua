import React,{ createContext, useEffect, useState } from "react";

const Context = createContext();
import api from "../config/api";
import history  from '../config/history'


function Auth({children}){

    const [authenticate, setAuthenticate] = useState(false)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
          api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`;
          setAuthenticate(true);

        }
    
        setLoading(false);
      }, []);
      

     async function handleLogin(){
     
        await api.post('/authenticate',{user: {id:5,name:'teste',a:"t"}})
        .then( (success) =>{
            console.log(success)
           let token =  success.data.token
            
            setAuthenticate(true)
            api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`;
            localStorage.setItem('token', JSON.stringify(token) )
            history.push('/dashboard');
            location.reload();

        }) .catch( (error) => console.log(error) )
        
    }
    function handleLogout(){
        setAuthenticate(false);
        api.defaults.headers.Authorization = undefined;
        localStorage.removeItem('token')
        history.push('/');
        location.reload();
    }

    if(loading){
        return
    } 
   return(
    <Context.Provider value={{ authenticate, handleLogin,handleLogout }} >
        {children}
    </Context.Provider>
   )
}

export { Context, Auth }