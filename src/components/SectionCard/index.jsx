import './styles.css'; 

export function SectionCard({title,description,photo,alt}){

    return(
        <div className="place-detail">
        <img className="place-image" src={photo} alt={alt} />
        <div className="place-description">
          <h2>{title}</h2>
          <p>
            {description}
          </p>
        </div>
        </div>

    )
}