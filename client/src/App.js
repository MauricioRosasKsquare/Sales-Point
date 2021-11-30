import { useState, useEffect } from 'react';
import axios from 'axios';
import Basket from './components/Basket';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Main from './components/Main';


function App() {

  const  [products, setProducts]  = useState([]);
  const  [mount, setMount]  = useState(false);
  const  [isaddedProduct, setIsAddedProduct] = useState(0)
  const  [isDashView, setIsDashView] = useState(false)
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if(!mount) {
      setMount(true);
   }
    axios.get("http://localhost:5000/products")
    .then((res) => {
      setProducts(res.data)
    });

    axios.get("http://localhost:5000/tickets")
    .then((res) => {
        setTickets(res.data)
    });

  }, [ mount , isaddedProduct ]);

  
  const [cartItems, setCartItems] = useState([]);
 

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product, sell) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (sell){
      return setCartItems([]);
    }
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  return (
    <div className="App">
      <Header view={isDashView} dash={() => setIsDashView(!isDashView)} onNew={ () => setIsAddedProduct(isaddedProduct+1)} countCartItems={cartItems.length}></Header>
      <div className="row">
        {!isDashView ? <> 
                        <Main products={products} onAdd={onAdd}></Main>
                        <Basket
                          cartItems={cartItems}
                          onAdd={onAdd}
                          onRemove={onRemove}
                        />
                      </>
                      :
                      
                      <Dashboard tickets={tickets} />
        }
      </div>
    </div>
  );
}

export default App;

