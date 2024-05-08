import { ThemeProvider } from './components/theme-provider';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';

export interface products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function App(): JSX.Element {
  const [products, setProducts] = useState<products[]>([]);

  const getProducts = async (url: string): Promise<void> => {
    try {
      const products = await fetch(url);
      const data = await products.json();

      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts('https://fakestoreapi.com/products?limit=6');
  }, []);

  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <h1 className="text-center text-3xl pt-10 font-bold">My Store</h1>
      <div className="flex justify-center my-10 px-5">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5 max-w-[25rem] md:max-w-[45rem]">
          {products.length > 0 &&
            products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
        </div>
      </div>
    </ThemeProvider>
  );
}
