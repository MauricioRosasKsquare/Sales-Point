import { useState } from 'react';
import axios from 'axios';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.16;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = (itemsPrice + taxPrice + shippingPrice);

  const[amount, setAmound] = useState('');

  

  function handleBuy(){

    axios.post('http://localhost:5000/tickets', {
          products: cartItems,
          total: totalPrice,
          date: Date.now(),
          status: "Active"
        })
        .then(function (response) {

            alert('The sell was successful !')
            onRemove({},true)
              })
        .catch(function (error) {
            console.log(error);
        }); 
  }

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item._id} className="row">
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

            {((Math.round((amount - totalPrice )* 100) / 100 ) >= 0)  ? <div className="row">
              <div className="col-2">
                <strong>Change</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${ (amount - totalPrice).toFixed(2) }</strong>
              </div>
            </div> : <></>}
            <hr />
            <div className="row">
              <button disabled={ !((Math.round((amount - totalPrice )* 100) / 100 ) >= 0) } onClick={handleBuy}>
                Buy
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );

  
}
