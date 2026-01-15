import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const loader = document.getElementById('loader');
if (loader) {
    loader.remove();
}
