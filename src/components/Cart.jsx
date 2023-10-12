import {Container, Table} from "react-bootstrap/"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const Cart = () => {
    const {items, removeItem, clear} = useContext(CartContext)

    const pagoTotal = () => 
        items.reduce(
            (acc, valorActual) => 
                acc + valorActual.count * valorActual.precio,
                0
            )
    
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
                            <td><button onClick={() => removeItem(item.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>                       
                        <td>{pagoTotal()}</td>
                    </tr>
                </tfoot>
            </Table>
            <button onClick={() => clear()}>Eliminar Todo</button>
        </Container>
    )
}  