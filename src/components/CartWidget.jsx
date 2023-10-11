import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const CardWidget = () => {
    const {totalWidget} = useContext(CartContext)

    return (
        <>
        <img src="/assets/carrito.png" alt="carrito" /> <span>{totalWidget}</span>
        </>
    )
}