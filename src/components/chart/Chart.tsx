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

interface ChartJsProps {
  prices: number[];
  discountedPrice: number[];
  title: string[];
}

const ChartJsExample = ({ prices, discountedPrice, title }: ChartJsProps) => {
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
    <div style={{ width: 1200, height: 600 }}>
      <Line options={{}} data={data} />
    </div>
  );
};

export default ChartJsExample;
