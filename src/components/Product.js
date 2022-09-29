import { Link } from 'react-router-dom';
const Product = props => {
  const { id, name, description, imgLink, price } = props.product;

  return (
    <Link to={`/store/${id}`} className='oneProductContainer'>
      <div className='productDetails'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <img src={imgLink} className='productImage' alt={name} />
    </Link>
  );
};

export default Product;
