import './styles.css';
import badge from '../../assets/badge-vr.svg';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export function Header() {

    return (
        <div className='header-container'>
            <header className="header">
                <nav id="navegacao-cadastro">
                    <a className="navbar-brand" href="index.html"><img src={badge} alt="" width="60" height="40" /></a>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/home' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/promotion' className="nav-link">Promoção</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/tickets' className="nav-link">Passagens</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/contact' className="nav-link">Contato</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/' className="nav-link">Cadastro</Link>
                        </li>
                    </ul>
                    <form className='header-form'>
                        <input className="form-control" type="search" placeholder="pesquisar" aria-label="Pesquisar" />
                        <Button name="Pesquisar" onClick={() => { }} />
                    </form>
                </nav>
            </header>
            <div className='header-container-message'>
                <p>#Partiumundão: economia para viajar o mundo todo</p>
                <p>Passagens aéreas para destinos incríveis com os melhores tarifas</p>
            </div>
        </div>
    );
}