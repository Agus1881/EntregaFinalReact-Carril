import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { getFirestore, getDocs, collection } from "firebase/firestore"
import { ItemList } from './ItemList';

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const refCollection = collection(db, "productos")

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log("no hay info")
            else
                setProducts(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                )
        })
    }, [])

   /*  useEffect(() => {
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
 */
    return (
        <Container>
            {props.greeting}
            <div><ItemList products={products} /></div>
            <ItemCount></ItemCount>
        </Container>

    )
}   