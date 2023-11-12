import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './index.css';
import App from './App';

//React 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

//React 17.0.2
const root = document.getElementById('root');
render(<App />, root);