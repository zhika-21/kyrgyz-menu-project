import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GeneralProvider} from './context/context'
import {BrowserRouter} from 'react-router-dom'




ReactDOM.render(
  <React.StrictMode>
    <GeneralProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GeneralProvider>
  </React.StrictMode >,
  document.getElementById('root')
);



