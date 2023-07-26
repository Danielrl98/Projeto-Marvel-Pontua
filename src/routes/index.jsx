import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Dashboard from '../pages/dashboard/dashboard';


function Rotas() {

  return (
    <React.Fragment>
      <Router >
        <Routes>
          <Route path="/" element={<div>teste</div>} exact/>
          <Route path="/dashboard" element={<Dashboard />} exact/>  
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default Rotas
