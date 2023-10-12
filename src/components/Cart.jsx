import { Container, Table } from "react-bootstrap/"
import { useContext, useState} from "react"
import { CartContext } from "../contexts/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Cart = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })
    const { items, removeItem, clear } = useContext(CartContext)

    const pagoTotal = () =>
        items.reduce(
            (acc, valorActual) =>
                acc + valorActual.count * valorActual.precio,
            0
        )
    
    const handleChange = (ev) => {
        setFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value
        }))
    }

    const sendOrder = () => {
        const order = {
            buyer: formValues,
            items: items,
            total: pagoTotal(),
        }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                setFormValues({
                    name: "",
                    phone: "",
                    email: "",
                })
                alert("su orden:" + id + "ha sido recibida")
            }
        })

        clear()
    }

    return (
        <Container><h1>Cart</h1>
            <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
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
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre" 
                        onChange={handleChange}
                        value={formValues.name}
                        name="name"
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        onChange={handleChange}
                        value={formValues.email}
                        name="email"
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Telefono" 
                        onChange={handleChange}
                        value={formValues.phone}
                        name="phone"
                        />
                </Form.Group>
            </Form>
            <button onClick={sendOrder}>Comprar</button>
        </Container>
    )
}  