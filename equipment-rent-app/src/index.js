import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { UserProvider } from './UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode >
    <
    UserProvider >
    <
    App / >
    <
    /UserProvider> <
    /React.StrictMode>
);