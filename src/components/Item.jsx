import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({product}) => (
    <Card key={product.id} style={{ width: '16rem'}} className='tarjetas'>
        <Card.Img variant="top" src={product.imagen} />
        <Card.Body>
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Text>
                {product.categoria}
                {product.precio}
            </Card.Text>
            <Link to={`/item/${product.id}`}>
            <Button variant="primary">Detalles</Button>
            </Link>
        </Card.Body>
    </Card>
)