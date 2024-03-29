import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
        <App />
   </BrowserRouter>
);

reportWebVitals();
