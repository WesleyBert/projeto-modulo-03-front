export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-successo" id="navegacao-cadastro">
            <a className="navbar-brand" href="index.html"><img src="img/badge-vr.svg" alt="" width="60" height="40"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul className=" navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link " href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  " href="promocao.html">Promoção</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link " href="contato.html">Contato</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link " href="index.html">Cadastro</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input className="form-control me-2" type="search" placeholder="pesquisar" aria-label="Pesquisar" />
                    <button className="btn btn-outline-success" type="submit">Pesquisar</button>
            </form>
        </div>
     </nav >
    );
}