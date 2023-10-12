import { useState, createContext } from "react"

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const addItem = (product, count) => {
        const alreadyExists = items.some(item => item.id === product.id)

        if (!alreadyExists) setItems(prev => [...prev, {...product, count}])
        else {
            const actualizarProductos = items.map(item => {
                if (item.id === product.id)
                    return {
                        ...item,
                        count: item.count + count
                    }
                else return item
            })
            setItems(actualizarProductos)
        }
    }
    const totalWidget = items.reduce((acc, val) => acc + val.count, 0)

    const removeItem = (id) => {
        const itemsfiltered = items.filter(item => item.id !== id)
        setItems(itemsfiltered)
    }

    const clear = () => setItems([])

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, totalWidget, items}}>
            {children}
        </CartContext.Provider>
    )
}