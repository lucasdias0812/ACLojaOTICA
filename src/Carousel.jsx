import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://vargasengenhariabr.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-08-03-at-14.43.30-1140x876.jpeg" height={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>NewÓtica</h3>
          <p>Qualidade e Segurança na entrega e compra de seu Óculos!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://s2.glbimg.com/89TXoFXqFsecDPQO6OIxfFvDU98=/smart/e.glbimg.com/og/ed/f/original/2019/05/31/otica-chillibeans-21.jpg" height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>NewÓtica</h3>
          <p>Visite a nossa loja ou adquira pelo site!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.meioemensagem.com.br/wp-content/uploads/2019/06/Otica-ChilliBeans-16_575_300.jpg" height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>NewÓtica</h3>
          <p>
            Venha Garanitir o seu Óculos de melhor qualidade!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;