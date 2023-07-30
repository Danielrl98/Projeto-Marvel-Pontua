import React from 'react';
import Rotas from './routes';
import { Auth } from './context/Auth';
import history from './config/history';


function App() {
  
  return (
    <React.Fragment>
       <Auth history={history}>
          <Rotas />  
      </Auth> 
    </React.Fragment>
  )
}

export default App
