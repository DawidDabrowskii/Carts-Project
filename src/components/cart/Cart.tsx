import { Link } from 'react-router-dom';
import { CartsContext } from '../../context/cartsContext';
import { useContext, useState } from 'react';
import './Cart.scss';

const Cart = ({ cart }: { cart: any }) => {
  const { data, setData } = useContext(CartsContext);
  const { id } = cart;

  const [selectedId, setSelectedId] = useState<number>();

  const handleDelete = () => {
    if (typeof id === 'number') {
      setSelectedId(id);

      // Removing selected cart
      setData(data?.filter(cart => cart.id !== id));
    }
  };

  return (
    <li className='cart-container'>
      <p className='cart-title'>Cart: {id}</p>
      <Link to={`cart/${id}`} className='cart-item'>
        <button className='details-btn'>Details</button>
      </Link>
      <button className='delete-btn' onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Cart;
