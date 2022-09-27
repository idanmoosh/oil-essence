import { useEffect, useState } from 'react';

const Product = props => {
  const [image, setImage] = useState(null);
  const { name, description, imgLink, price } = props.product;

  useEffect(() => (imgLink ? setImage(imgLink) : setImage(null)));
  return (
    <div className='oneProductContainer'>
      <div className='productDetails'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <div className='imgContainer' alt={name}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default Product;
