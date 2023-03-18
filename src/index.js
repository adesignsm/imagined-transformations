import React from 'react';
import App from './App';
import * as ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<React.StrictMode>
    	<BrowserRouter>
      		<App />
    	</BrowserRouter>
  	</React.StrictMode>

);

reportWebVitals();
