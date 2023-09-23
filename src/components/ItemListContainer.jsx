import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

import data from "../data/productos.json"
import { ItemList } from './ItemList';

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { id } = useParams()



    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })

        promise.then((data) => {
            if (!id) {
                setProducts(data)
            } else {
                const productosFiltrados = data.filter(product => product.categoria === id)
                setProducts(productosFiltrados)
            }

        })
    }, [id])

    return (
        <Container>
            {props.greeting}
            <div><ItemList products={products} /></div>
        </Container>

    )
}   