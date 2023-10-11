import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";



export const ItemDetail = ({singleProduct}) => {
    const {addItem} = useContext(CartContext)
    const onAdd = (count) => {
        addItem(singleProduct, count)
    }

    return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
            <h1>{singleProduct.nombre}</h1>
            <img src={singleProduct.imagen} alt="" />
            <div>{singleProduct.stock}</div>
            <ItemCount onAdd={onAdd}/>
        </div>
    )  
}