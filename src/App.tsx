import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { CartDetails } from './pages/CartDetails/CartDetails';
import { Navbar } from './components/navbar/Navbar';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AddProduct from './pages/AddProduct/AddProduct';
import NewProductsChart from './pages/Products/NewProductsChart';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart/:cartId' element={<CartDetails />} />
        <Route path='products' element={<NewProductsChart />} />
        <Route path='add' element={<AddProduct />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
