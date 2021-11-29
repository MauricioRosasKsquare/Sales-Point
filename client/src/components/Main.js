import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="wrapper">
        {products.map((product) => (
          <Product key={product._id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
