import { useEffect, useState } from "react";
import axios from 'axios';
import Modal from "react-modal"

Modal.setAppElement('#root')
const customStyles = {
  content: {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '60%',
    transform: 'translate(-40%, -10%)'
  },
};

function ModalTickets( props ){

    const [tickets, setTickets] = useState([]);
    
    useEffect(() => {
        
        axios.get("http://localhost:5000/tickets")
        .then((res) => {
            setTickets(res.data)
        });
    }, [props.show])
    
  return(
    <div className="Modal scroll-component">
      <Modal shouldCloseOnEsc={true} isOpen={props.show} onRequestClose={ props.onHide } style={customStyles}>
      {tickets.map((ticket, i) => {
          return( 
          <div style={{borderStyle:"solid" ,borderColor:"black"}}>
            <h1 key={i}>Ticket {i+1}</h1>
            <ul>
                {ticket.products.map((product,i) => {
                    return (<li key={i}> {product.name} </li>
                    )
                })}
            </ul>
            <h4>Total: ${ticket.total}  <button> Cancel </button> </h4>
            
          </div>
          )
      } )}
      </Modal>
    </div>
  )
}

export default ModalTickets