import React from 'react';
import { useState } from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.16;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const[amount, setAmound] = useState('');


  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Paid With</strong>
              </div>
              <div className="col-1 text-right">
              <form>
                <input type="number" name="name" onInput={e => setAmound(e.target.value)}/>
                </form>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Change</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${ amount - totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('The Sell was Successful !')}>
                Buy
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
