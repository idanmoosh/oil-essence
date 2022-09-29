import Product from './Product';
//import { useEffect, useState } from 'react';

const DB = [
  {
    id: 1,
    name: 'Oil Diffuser',
    description: 'Oil Diffuser - Dry Oil diffusion for space perfuming',
    price: 100,
    imgLink: './media/HeroImage.jpg',
  },
  {
    id: 2,
    name: 'Seasonal perfume blends',
    description: 'set of 3 seasonally blended Oil Essence perfumes',
    price: 50,
    imgLink: './media/samples.jpg',
  },
  {
    id: 3,
    name: 'Premium Seasonal Membership',
    description: 'Yearly subsciption which supllies 12 bottles',
    price: 20,
    imgLink: './media/4-2.png',
  },
  {
    id: 4,
    name: 'samples',
    description: 'set of all of our seasons variety (in small samples)',
    price: 20,
    imgLink: './media/oilbottles.jpg',
  },
];

export default function Store() {
  /*
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/store')
      .then(res => res.json())
      .then(data => setProducts(data));
  });*/
  return (
    <div className='StoreBody'>
      <div className='ProductsContainer'>
        {DB.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
