import CartsList from '../../components/cartsList/CartsList';
import './Home.scss';
import NewProductsList from '../../components/newProductsList/NewProductsList';
import { useTitle } from '../../hooks/useTitle';

export const Home = () => {
  useTitle('Home');
  return (
    <div>
      <CartsList />
      <NewProductsList />
    </div>
  );
};
