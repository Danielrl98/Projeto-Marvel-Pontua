import React, { useContext, useEffect, useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import Perfil from "../pages/perfil/perfil";
import Character from "../pages/character/character";
import Login from "../pages/login/loginIndex";
import { Context } from "../context/context";
import SelectHero from "../pages/select-hero/select-hero";
import history from "../config/history";
import ForgotPassword from "../pages/forgot-password/forgot";
import Success from "../pages/sucessForgot/sucess";

function Rotas() {
 
  const Private = ({children}) => {
   
    const { authenticate } = useContext(Context)
   

    if(authenticate){

      return children

    }
   

    if(localStorage.getItem('token')){
        localStorage.removeItem('token')
       return
    }
    
    history.push('/')
    location.reload()
  
   
}


  return (
    <React.Fragment>
         <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/forgot" element={<ForgotPassword />} exact />
          <Route path="/success-forgot" element={<Success />} exact />
          <Route path="/dashboard" element={<Private> <Dashboard/> </Private>} />
          <Route path="/perfil" element={ <Private> <Perfil/> </Private> } exact />
          <Route path="/character/:id" element={<Private> <Character /> </Private>} exact />
          <Route path="/select-hero" element={<Private> <SelectHero /> </Private>}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default Rotas;
