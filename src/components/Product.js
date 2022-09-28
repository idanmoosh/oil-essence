const Product = props => {
  const { name, description, imgLink, price } = props.product;

  return (
    <div className='oneProductContainer'>
      <div className='productDetails'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <img src={imgLink} className='productImage' alt={name} />
    </div>
  );
};

export default Product;
