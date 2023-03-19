import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartsContext } from '../../context/cartsContext';
import Chart from '../../components/chart/Chart';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import { BackButton } from '../../components/backButton/BackButton';
import './CartDetails.scss';

export const CartDetails = () => {
  const { data, setData } = useContext(CartsContext);
  const { cartId } = useParams<{ cartId: string }>();
  useTitle(`Cart Details`);

  if (!data) {
    return <h2>Loading data...</h2>;
  }

  // Targeting specific cart with products
  const productsList = data?.find(
    cart => Number(cart.id) === Number(cartId)
  )?.products;

  // basic prices
  const prices = productsList.map(
    (product: { total: number; quantity: number }) => {
      return Math.floor(product.total / product.quantity);
    }
  );

  // discounted prices
  const discountedPrice = productsList.map(
    (product: { discountedPrice: number; quantity: number }) => {
      return Math.floor(product.discountedPrice / product.quantity);
    }
  );

  // products titles
  const title = productsList.map((product: { title: string }) => product.title);

  return (
    <div className='chart-container'>
      <BackButton />
      <div>
        <Chart
          prices={prices}
          discountedPrice={discountedPrice}
          title={title}
        />
      </div>
    </div>
  );
};
