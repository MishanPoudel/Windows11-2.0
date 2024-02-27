import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Taskbar from './components/Taskbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Taskbar/>
  </React.StrictMode>
);
