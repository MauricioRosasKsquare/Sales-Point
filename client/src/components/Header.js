import { useState } from "react";
import  ModalAdd  from './ModalAdd'
import ModalTickets from "./ModalTickets";

export default function Header(props) {

  const [modalAddShow, setModalAddShow] = useState(false);
  const [modalTicketsShow, setModalTicketsShow] = useState(false);

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
        <button onClick={() => setModalTicketsShow(true)} className="button">See Tickets</button>
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
          <button onClick={() => setModalAddShow(true)} className="button">
            Add Product
          </button>
        </div>
      </div>
    </header>
    <ModalTickets show={modalTicketsShow}  onHide={() => setModalTicketsShow(false)} />
    <ModalAdd onNew={props.onNew} show={modalAddShow}  onHide={() => setModalAddShow(false)} />

    </>
  );
}
