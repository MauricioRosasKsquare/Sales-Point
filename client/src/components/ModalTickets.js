import { useEffect, useState } from "react";
import axios from 'axios';
import Modal from "react-modal"

Modal.setAppElement('#root')
const customStyles = {
  content: {
    top: '12%',
    left: '50%',
    right: 'auto',
    marginRight: '-50%',
    width: '60%',
    transform: 'translate(-40%, -10%)'
  }
};

function ModalTickets( props ){


    const [tickets, setTickets] = useState([]);
    const [count, setCount] = useState(0)
    useEffect(() => {

        axios.get("http://localhost:5000/tickets")
        .then((res) => {
            setTickets(res.data)
        });
    }, [count])

    function handleCancel(id){
        axios.patch("http://localhost:5000/tickets", {id:id});
        setCount(count+1)
        alert("Cancelation in process (takes around 30 sec) or refresh the page" )
    }
    
    return(
        <div className="scroll-component">
            <Modal shouldCloseOnEsc={true} isOpen={props.show} onRequestClose={ props.onHide } style={customStyles}>
            {tickets.map((ticket, i) => {
                return( 
                <div  key={i} style={{borderStyle:"solid", color: ticket.status !=="Canceled" ? "black" : "red"  ,borderColor: ticket.status !=="Canceled" ? "black" : "red", marginTop:"10px"}}>
                    <h1 style={{textDecoration:ticket.status ==="Canceled" ? "line-through" :"none"}}>{ticket.status !=="Canceled" ? `Ticket ${i+1}` : `Ticket ${i+1} Canceled`}</h1>
                    <ul>
                        {ticket.products.map((product,i) => {
                            return (<li key={i}> {product.name} x {product.qty} </li>
                            )
                        })}
                    </ul>
                    <h4>Total: ${ticket.total}  {ticket.status !=="Canceled" ? <button onClick={() => handleCancel(ticket._id)}> Cancel </button>: <></> }   </h4>
                    
                </div>
                )
                
            } )}
            
            </Modal>
        </div>
    )
}

export default ModalTickets