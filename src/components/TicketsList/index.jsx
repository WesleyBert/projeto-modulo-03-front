
import './styled.css'

export function TicketsList({value, date, status}){   

    return(
        <div className="tickets-details">
        <div className="tickets-info">
          <span className="tickets-info-title">{date}</span>
          <span className="tickets-info-subtitle">{status}</span>
          <span className="tickets-info-subtitle">R$ {value}</span>
        </div>
      </div>
    );
}