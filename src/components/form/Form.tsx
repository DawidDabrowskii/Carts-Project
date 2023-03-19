import './Form.scss';
import { useContext, useState, ChangeEvent, FormEvent } from 'react';
import { NewProductsContext } from '../../context/newProductsContext';
import { BackButton } from '../backButton/BackButton';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';

const Form = () => {
  useTitle('AddProduct');
  const initialProduct = {
    title: '',
    total: 0,
    discountedPrice: 0,
    quantity: 1,
    id: Math.floor(Math.random() * 10000 + 100),
  };

  const { newProducts, setNewProducts } = useContext(NewProductsContext);
  const [product, setProduct] = useState(initialProduct);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newProducts === undefined) return;

    setNewProducts([...newProducts, product]);
    setProduct(initialProduct);

    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <BackButton />
      <h2 className='form-title'>Add new Product</h2>
      <p className='info'>
        Please keep in mind that 'Price' and 'Discounted Price' are total values
        so they are divided by quantity amount
      </p>
      <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
          {showModal && (
            <div className='product-modal'>{`Product was added`}</div>
          )}
          <div className='form-item'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              onChange={handleInput}
              name='title'
              value={product.title}
              required
            />
          </div>
          <div className='form-item'>
            <label htmlFor='total'>Price</label>
            <input
              type='number'
              onChange={handleInput}
              name='total'
              value={product.total}
              required
            />
          </div>
          <div className='form-item'>
            <label htmlFor='discountedPrice'>Discounted Price</label>
            <input
              type='number'
              onChange={handleInput}
              name='discountedPrice'
              value={product.discountedPrice}
              required
            />
          </div>
          <div className='form-item'>
            <label htmlFor='quantity'>Quantity</label>
            <input
              type='number'
              onChange={handleInput}
              name='quantity'
              value={product.quantity}
              required
            />
          </div>
          <button>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
