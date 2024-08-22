import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import ContextProvider from './context/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      

             
          <App />
           
          
    </ContextProvider>
  </React.StrictMode>
);

  