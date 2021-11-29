import Modal from "react-modal"
import {useState} from "react";
import axios from 'axios';

Modal.setAppElement('#root')
const customStyles = {
  content: {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '60%',
    transform: 'translate(-40%, -10%)',
  },
};

function ModalAdd( props ){

    const [productName, setProductName] = useState()
    const [productPrice, setProductPrice] = useState()

 
    function handleOnClick(e){

        e.preventDefault();
        
        axios.post('http://localhost:5000/products', { 
            name: productName,
            price: productPrice })
        .then(function (response) {
            props.onHide()
            props.onNew()
              })
        .catch(function (error) {
            console.log(error);
        });
        
        
        setProductPrice()
        setProductName()

    }

  return(
    <div className="Modal">

      <Modal isOpen={props.show} onRequestClose={ props.onHide } style={customStyles}>
        <h3>Add a product</h3>
        <h5>Product Name</h5> 
        <input type="text" onChange = { (e) => setProductName(e.target.value) } />
        <h5>Price</h5>
        <input type="number"  onChange = { (e) => setProductPrice(e.target.value) } />
        <button onClick={ handleOnClick } >Add Product</button>
        <button onClick={ props.onHide } > Close </button>
      </Modal>
    </div>
  )
}

export default ModalAdd
        