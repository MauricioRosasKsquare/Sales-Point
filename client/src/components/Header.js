import {useState} from "react";
import  ModalAdd  from './Modal'

export default function Header(props) {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <header className="block row center">
      <div>
        <h1>Roses Sales Point</h1>
      </div>
      <div>
        <button onClick={props.dash} className="button"> {props.view ? "See products" : "See dashboard"}</button>
      </div>
      <div>
        
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        {' '}
        <div>
          <button onClick={() => setModalShow(true)} className="button">
            Add Product
          </button>
        </div>
      </div>
    </header>
    
    <ModalAdd onNew={props.onNew} show={modalShow}  onHide={() => setModalShow(false)} />

    </>
  );
}
