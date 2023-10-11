import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import { ItemDetail } from './ItemDetail';
import { getDoc, getFirestore, doc } from 'firebase/firestore';


export const ItemDetailContainer = (props) => {
    const [singleProduct, setProduct] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const refDoc = doc(db, "productos", id)

        getDoc(refDoc).then((snapshot) => {
            setProduct({id: snapshot.id, ...snapshot.data()})
        })
    }, [])

    if(!singleProduct) return <div>Cargando...</div>
 
    return (
        <Container>
            <h1>{props.greeting}</h1>
            <ItemDetail singleProduct={singleProduct}/>
        </Container>

    ) 
}   