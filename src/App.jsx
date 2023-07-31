import React from 'react';
import Rotas from './routes';
import { ContextProvider } from './context/context';
import history from './config/history';


function App() {
  
  return (
    <React.Fragment>
       <ContextProvider >
          <Rotas history={history}/>  
      </ContextProvider> 
    </React.Fragment>
  )
}

export default App
