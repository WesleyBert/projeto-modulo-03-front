import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import './styles.css';

export function Contact() {
  return (
    <>
      <Header />
      <main>
        <div className="contact">
          <div className="contact-email">
            <h2>Entre em contato com a gente!</h2>
            <input type="text" placeholder="Digite seu nome" />
            <input type="text" placeholder="Digite seu email" />
            <textarea placeholder="Digite sua mensagem.." cols="53" rows="5"></textarea>
            <Button name="Enviar" onClick={() => { }} />
          </div>
          <div className="contact-social"></div>
        </div>
      </main>
    </>
  )
}