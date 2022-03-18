import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GeneralProvider} from './context/context'
import {SpeechProvider} from '@speechly/react-client'

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId='7f748e52-82ae-4dec-87a7-d6ad5d7d420b' language="en-US"></SpeechProvider>
    <GeneralProvider><App /></GeneralProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


