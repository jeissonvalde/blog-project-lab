import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

const baseURLElem = document.getElementsByTagName('base') as HTMLCollectionOf<HTMLElement>;
let baseUrl = baseURLElem[0] ? baseURLElem[0].getAttribute('href') as string : '/';

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
)