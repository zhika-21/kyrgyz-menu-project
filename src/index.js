import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GeneralProvider } from './context/context'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact/Contact';
import Footer from "./pages/Footer/Footer"

ReactDOM.render(
  <React.StrictMode>
    <GeneralProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </GeneralProvider>
  </React.StrictMode >,
  document.getElementById('root')
);



