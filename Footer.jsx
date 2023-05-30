import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section about">
                <img src="/src/assets/Logo.png" alt="" width={'300px'}/>
                <p>
                  NEWOTICA
                </p>
              </div>
              <div className="footer-section links">
                <h3>Links</h3>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/sobre">Sobre nós</a></li>
                </ul>
              </div>
              <p>
                &copy; {new Date().getFullYear()} NewÓtica. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      );
}

export default Footer