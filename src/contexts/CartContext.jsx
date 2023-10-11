import { useState, createContext } from "react"

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const addItem = (product, count) => setItems(prev => [...prev, {...product, count}])

    const totalWidget = items.reduce((acc, val) => acc + val.count, 0)

    const removeItem = (id) => {
        const itemsfiltered = items.filter(item => item.id !== id)
        setItems(itemsfiltered)
    }

    const clear = () => setItems([])
 
console.log(items)    
    return (
        <CartContext.Provider value={{addItem, removeItem, clear, totalWidget}}>
            {children}
        </CartContext.Provider>
    )
}