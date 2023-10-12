import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Link } from "react-router-dom"

export const CardWidget = () => {
    const {totalWidget} = useContext(CartContext)

    return (
        <Link to="/cart">
        <img src="/assets/carrito.png" alt="carrito" /> <span>{totalWidget}</span>
        </Link>
    )
}