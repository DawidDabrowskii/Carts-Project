import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { NewProductsContext } from '../../context/newProductsContext';
import { useContext } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { BackButton } from '../../components/backButton/BackButton';

const ProductsChart = () => {
  const { newProducts, setNewProducts } = useContext(NewProductsContext);
  useTitle('Products Chart');

  if (!newProducts) {
    return <h2>Loading data...</h2>;
  }

  // basic prices
  const prices = newProducts.map(
    (product: { total: number; quantity: number }) => {
      return Math.floor(product.total / product.quantity);
    }
  );

  // discounted prices
  const discountedPrice = newProducts.map(
    (product: { discountedPrice: number; quantity: number }) => {
      return Math.floor(product.discountedPrice / product.quantity);
    }
  );

  const title = newProducts.map((product: { title: string }) => product.title);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = [...title];

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: [...prices],
        backgroundColor: '#F44236',
        borderColor: '#F44236',
      },
      {
        label: 'Discounted Price',
        data: [...discountedPrice],
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
      },
    ],
  };
  return (
    <div className='chart-container'>
      <BackButton />
      <p className='info'>To properly see graph add more than 1 product</p>
      <div style={{ width: 1200, height: 600 }}>
        <Line options={{}} data={data} />
      </div>
    </div>
  );
};

export default ProductsChart;
