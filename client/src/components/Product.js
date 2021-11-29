import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  const image = 'https://picsum.photos/id/180/2400/1600'
  return (
    <div>
      <img className="small" src={image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
