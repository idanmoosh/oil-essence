import Product from './Product';
import { useEffect, useState } from 'react';

export default function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/store')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className='StoreBody'>
      <div className='ProductsContainer'>
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
