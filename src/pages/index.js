import ProductList from '@containers/ProductList';
import { useAuth } from '@hooks/useAuth';


export default function Home() {
  const auth = useAuth();
  return (
    <>
    <ProductList />
    </>
  );
};
