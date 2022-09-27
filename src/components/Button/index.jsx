export function Button({ onClick, name }) {

   return(
    <div className="button_container" onClick={onClick}>
        <button type="submit" className="btn-success btn-lg ">{name}</button>
    </div>
);
}