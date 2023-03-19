import { useContext } from 'react';
import Cart from '../cart/Cart';
import { CartsContext } from '../../context/cartsContext';

import './CartsList.scss';

const CartsList = () => {
  const { data, setData } = useContext(CartsContext);

  if (!data) {
    return <h2>Loading data...</h2>;
  }

  return (
    <div>
      <h2 className='carts-title'>Cartslist</h2>
      <div className='carts-container'>
        <ul className='carts-list'>
          {data && data.map((cart: any) => <Cart cart={cart} key={cart.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default CartsList;
