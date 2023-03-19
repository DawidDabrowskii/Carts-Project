import { createContext, useState, ReactNode } from 'react';

export const NewProductsContext = createContext<{
  newProducts: any[] | undefined;
  setNewProducts: React.Dispatch<React.SetStateAction<any[] | undefined>>;
}>({
  newProducts: undefined,
  setNewProducts: () => {},
});
interface Props {
  children?: ReactNode;
}

export const NewProductsProvider = ({ children }: Props) => {
  const [newProducts, setNewProducts] = useState<any[] | undefined>([]);

  const value = {
    newProducts,
    setNewProducts,
  };

  return (
    <NewProductsContext.Provider value={value}>
      {children}
    </NewProductsContext.Provider>
  );
};
