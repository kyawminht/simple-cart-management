import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './components/productContext';
import SidebarProvider from './components/SidebarProvider';
import CartContextProvider from './components/CartContextProvider';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CartContextProvider>
  <SidebarProvider>
   <ProductProvider>
    <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </ProductProvider>
 </SidebarProvider>
 </CartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
