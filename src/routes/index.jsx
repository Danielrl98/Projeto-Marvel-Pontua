import React, { useContext, useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import Perfil from "../pages/perfil/perfil";
import Character from "../pages/character/character";
import Login from "../pages/login/login";
import { Context } from "../context/Auth";

function Rotas() {
 

  const Private = ({children}) => {
   
   
    const { authenticate } = useContext(Context)
   
    if(!authenticate){
      return <Navigate to='/' />
    }

    return children
    
   
}

  return (
    <React.Fragment>
         <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/dashboard" element={<Private> <Dashboard/> </Private>} />
          <Route path="/perfil" element={ <Private> <Perfil/> </Private> } exact />
          <Route path="/character/:id" element={<Private> <Character /> </Private>} exact />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default Rotas;
