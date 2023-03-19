import { createContext, useState, useEffect, ReactNode } from 'react';

export const CartsContext = createContext<{
  data: any[] | undefined;
  setData: React.Dispatch<React.SetStateAction<any[] | undefined>>;
}>({
  data: undefined,
  setData: () => {},
});
interface Props {
  children?: ReactNode;
}

export const CartsProvider = ({ children }: Props) => {
  const [data, setData] = useState<any[] | undefined>();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Could not load the data');
        }
        return response.json();
      })
      .then(cart => setData(cart.carts))
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(true);
      });
  }, []);

  if (error) {
    return <p>Error fetching data</p>;
  }
  if (!data) {
    return <h2 className='loading'>Loading data...</h2>;
  }

  const value = {
    data,
    setData,
  };

  return (
    <CartsContext.Provider value={value}>{children}</CartsContext.Provider>
  );
};
