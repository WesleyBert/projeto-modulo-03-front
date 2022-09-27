import { TicketsCard } from "../../components/TicketsCard";
import disney from "../../assets/disney.jpg";
import dubai from "../../assets/dubai-1.jpg";
import franca from "../../assets/turismo.frança.jpg";
import portugal from "../../assets/hotelportugal.jpg";
import washington from "../../assets/washington.jpg";
import passeioJeep from "../../assets/passeio-jeep.png";
import hotelPortugal from "../../assets/hotelPortugal2.jpg";
import serraNegra from "../../assets/serraNegra.jpg";
import './styles.css'
import { Header } from "../../components/Header";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from "react";
import { TicketService } from "../../services/ticket";
import UserContext from "../../context/userInfoGlobal";
import { TicketsList } from "../../components/ticketsList";

const ticketsList = [
  {
    id: 1,
    title: "Passagem de ida e volta para",
    destination: "Orlando",
    price: "800",
    photo: disney
  },
  {
    id: 2,
    title: "Passagem de ida e volta para",
    destination: "Orlando",
    price: "9800",
    photo: disney
  },
  {
    id: 3,
    title: "Passagem de ida e volta para",
    destination: "Orlando",
    price: "800",
    photo: disney
  },
  {
    id: 4,
    title: "Passagem de ida e volta para",
    destination: "Orlando",
    price: "3800",
    photo: disney
  },
  {
    id: 5,
    title: "Passagem de ida e volta para",
    destination: "Orlando",
    price: "800",
    photo: disney
  },
  {
    id: 6,
    title: "Passagem de ida e volta para",
    destination: "Orlando",
    price: "2.800",
    photo: disney
  },
  {
    id: 7,
    title: "Passagem de ida e volta para",
    destination: "Orlando",
    price: "2.800",
    photo: disney
  }
]

export function Tickets() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { userInfo } = useContext(UserContext);
  const [ allTicketsList, setAllTicketsList ] = useState([]);

  console.log(userInfo);

  const handleTicketsList = async() => {

    try {
    const { data } = await TicketService.searchTicket(userInfo.id);
    setAllTicketsList(data);
    } catch(error) {
      console.log(error);
    } finally {
      setShow(true)
    }
  }

  return (
    <>
      <Header />
      <div className="tickets">
        <Button onClick={handleTicketsList} className="my-tickets">Ver minhas compras</Button>
        <div className="tickets-list">
          {
            ticketsList.map(item => (
              <TicketsCard userInfo={userInfo} key={item.id} title={item.title} photo={item.photo} destination={item.destination} price={item.price} />
            ))
          }
        </div>
      </div>
      <Modal animation={false} show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Lista de passagens compradas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              allTicketsList.map(item => (
                <TicketsList value={item.valor} date={item.dataCompra} status={item.status} />
              ))
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}
