import { useState } from "react"

export const ItemCount =  ({onAdd}) => {

    
    const [count, setCount] = useState(1)

    const increaseCount = () => {
        if (count <= 10){
            setCount((prev) => prev + 1)
        }
    }

    const decreaseCount = () => {
        if (count > 1){
            setCount((prev) => prev - 1)
        }
    }

    return (
        <div className="itemCount">
            <span onClick={decreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={increaseCount}>+</span>
            <button onClick={() => onAdd(count)}>Añadir al Carrito</button>
        </div>
    )
}