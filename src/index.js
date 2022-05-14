import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { PollProvider } from './context/PollContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PollProvider>
      <App />
    </PollProvider>
  </React.StrictMode>
);
