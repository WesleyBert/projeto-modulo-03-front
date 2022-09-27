import { Button } from 'react-bootstrap';
import './styled.css';
import { TicketService } from '../../services/ticket';

export function TicketsCard({photo,alt,title,destination, price, userInfo}){

  const buyTicket = async() => {
    const dataCompra = new Date();

    try {
    const { data } = await TicketService.buyTicket(parseFloat(price), dataCompra, userInfo.id);
    alert(`Compra com destino para ${destination} pelo usuario ${data?.nome}, realizada com sucesso!`);
    } catch(error) {
      alert('Falha ao realizar compra, por favor tente novamente mais tarde.')
    }
    
  }    

    return(
        <div className="tourism-details">
        <img src={photo} alt={alt} />
        <div className="tourism-info">
          <span className="tourism-info-title">{title}</span>
          <span className="tourism-info-subtitle">{destination}</span>
          <span className="tourism-info-subtitle">R$ {price}</span>
          <Button onClick={buyTicket}>Comprar</Button>
        </div>
      </div>
    );
}