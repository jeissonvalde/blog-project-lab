import React from 'react';
import { createRoot } from 'react-dom/client';
import  { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

const baseURLElem = document.getElementsByTagName('base') as HTMLCollectionOf<HTMLElement>;
let baseUrl = baseURLElem[0] ? baseURLElem[0].getAttribute('href') as string : '/';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename={baseUrl}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
)