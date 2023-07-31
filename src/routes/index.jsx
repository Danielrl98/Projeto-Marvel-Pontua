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
import Login from "../pages/login/Login";
import { Context } from "../context/context";
import SelectHero from "../pages/select-hero/select-hero";
import history from "../config/history";

function Rotas() {
 
  const Private = ({children}) => {
   
    const { authenticate } = useContext(Context)
   
    if(authenticate){

      return children

    }
     history.push('/')
     location.reload()
     return
   
}


  return (
    <React.Fragment>
         <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
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
