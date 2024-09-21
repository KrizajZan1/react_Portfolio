import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/App.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <p>Currently not working properly... working on fix</p>
    <App />
  </StrictMode>
);
