import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { CartsProvider } from './context/cartsContext';
import { NewProductsProvider } from './context/newProductsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartsProvider>
        <NewProductsProvider>
          <App />
        </NewProductsProvider>
      </CartsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
