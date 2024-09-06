import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import App from './App'


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
);