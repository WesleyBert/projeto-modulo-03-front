import './styled.css';

export function TourismCard({photo,alt,title,subTitle,description,value}){
    return(
        <div className="tourism-details">
        <img src={photo} alt={alt} />
        <div className="tourism-info">
          <span className="tourism-info-title">{title}</span>
          <span className="tourism-info-subtitle">{subTitle}</span>
          <span className="tourism-info-title">{description}</span>
          <span className="tourism-info-subtitle">{value}</span>
        </div>
      </div>
    );
}