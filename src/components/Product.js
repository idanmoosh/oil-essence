const Product = props => {
  const product = props.product;

  return (
    <div className='oneProductContainer'>
      <div className='productDetails'>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      <div className='imgContainer' alt={product.name}>
        {/*  <img
          src={require(Product.imgLink)}
          key={product.id}
          alt={product.name}
        />*/}
      </div>
    </div>
  );
};

export default Product;
