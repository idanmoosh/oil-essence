import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`/store/${id}`)
      .then(res => res.json())
      .then(data => setProductDetails(data));
  }, [id]);

  return (
    <div className='ProductDetails'>
      <img
        src={productDetails.imgLink}
        className='productImage'
        alt={productDetails.name}
      />

      <h3>{productDetails.name}</h3>
      <p>{productDetails.description}</p>
      <p>{productDetails.price}</p>
    </div>
  );
}
