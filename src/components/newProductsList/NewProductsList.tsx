import { NewProductsContext } from '../../context/newProductsContext';
import { useContext } from 'react';
import NewSingleProduct from '../newSingleProduct/NewSingleProduct';
import { Link } from 'react-router-dom';
import './NewProductsList.scss';

const NewProductsList = () => {
  const { newProducts, setNewProducts } = useContext(NewProductsContext);

  if (!newProducts) {
    return <h2>Loading data...</h2>;
  }

  return (
    <div className='new-products-container'>
      {newProducts.length > 0 ? (
        <>
          <h2 className='new-products-title'>New products list </h2>

          <Link to='products' className='product-item'>
            <button className='products-chart-btn'>Products Chart</button>
          </Link>
        </>
      ) : (
        <>
          <h2>New products list is empty</h2>
          <p>Add products to see the list</p>
        </>
      )}
      <ul className='new-products-list'>
        {newProducts &&
          newProducts.map((product: any, id: number) => (
            <NewSingleProduct product={product} key={id} />
          ))}
      </ul>
    </div>
  );
};

export default NewProductsList;
