import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContext from './Context';
import {BrowserRouter as Router} from 'react-router-dom'
// import CartContext from './CartConfig/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserContext>
        {/* <CartContext> */}
            <App />
        {/* </CartContext> */}
      </UserContext>
    </Router>
  </React.StrictMode>
);


