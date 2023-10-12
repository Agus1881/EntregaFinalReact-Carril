import {Container, Table} from "react-bootstrap/"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const Cart = () => {
    const {items} = useContext(CartContext)

    return (
        <Container><h1>Cart</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}><td>{item.nombre}</td>
                            <td>{item.precio}</td>
                            <td>{item.count}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}  