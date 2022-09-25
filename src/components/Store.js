import Product from './Product';

const DB = [
  {
    id: 1,
    name: 'Oil Diffuser',
    description: 'Oil Diffuser - Dry Oil diffusion for space perfuming',
    price: 100,
    imgLink: require('../media/5.jpg'),
  },
  {
    id: 2,
    name: 'Seasonal perfume blends',
    description: 'set of 3 seasonally blended Oil Essence perfumes',
    price: 50,
    imgLink: require('../media/5.jpg'),
  },
  {
    id: 3,
    name: 'Premium Seasonal Membership',
    description: 'Yearly subsciption which supllies 12 bottles',
    price: 20,
    imgLink: require('../media/5.jpg'),
  },
  {
    id: 4,
    name: 'samples',
    description: 'set of all of our seasons variety (in small samples)',
    price: 20,
    imgLink: require('../media/5.jpg'),
  },
];
export default function Store() {
  return (
    <div className='StoreBody'>
      <h2>Store</h2>
      <div className='ProductsContainer'>
        {DB.map(index => (
          <Product product={index} key={index} />
        ))}
      </div>
    </div>
  );
}
