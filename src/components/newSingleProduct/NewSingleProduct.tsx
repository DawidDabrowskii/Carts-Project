import { useState } from 'react';
import { useContext } from 'react';
import { NewProductsContext } from '../../context/newProductsContext';
import './NewSingleProduct.scss';

const NewSingleProduct = ({ product }: { product: any }) => {
  const { newProducts, setNewProducts } = useContext(NewProductsContext);
  const { id } = product;

  const [selectedId, setSelectedId] = useState<number>();

  const handleDelete = () => {
    if (typeof id === 'number') {
      setSelectedId(id);
      console.log(id);

      // Removing selected product
      setNewProducts(newProducts?.filter(product => product.id !== id));
    }
  };

  return (
    <li className='single-product'>
      <p className='product-title'>Product: {product.title}</p>
      <p className='product-quantity'>Quantity: {product.quantity}</p>
      <button className='delete-btn' onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default NewSingleProduct;
