import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App/App';
import { TodoProvider } from './Components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
