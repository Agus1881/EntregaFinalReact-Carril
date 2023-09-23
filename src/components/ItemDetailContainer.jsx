import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import data from "../data/productos.json"
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = (props) => {
    const [singleProduct, setProduct] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const productId = data.find((singleProduct) => singleProduct.id === id)
                resolve(productId)
            }, 2000)
        })

        promise.then((data) => setProduct(data))
    }, [id])

    if(!singleProduct) return <div>Cargando...</div>

    return (
        <Container>
            <h1>{props.greeting}</h1>
            <ItemDetail singleProduct={singleProduct}/>
        </Container>

    )
}   