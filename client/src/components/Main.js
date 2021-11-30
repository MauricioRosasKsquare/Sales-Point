import React from 'react';
//import Product from './Product';
import Pagination from './Pagination';


export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="wrapper">
      <Pagination products={products} onAdd={onAdd} />
      </div>
    </main>
  );
}
//<Product products={products} onAdd={onAdd} />