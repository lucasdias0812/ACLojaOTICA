import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicSample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.ray-ban.com/is/image/RayBan/8053672878356__STD__shad__qt.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2" />
      <Card.Body>
        <Card.Title>Oculos de Sol Rayban</Card.Title>
        <Card.Text>
            Lente com 100% de proteção de UV
        </Card.Text>
        <Button variant="success">Comprar</Button>
      </Card.Body>
    </Card>

  );
}


export default BasicSample;