

export const ItemDetail = ({singleProduct}) => (
    <div style={{display:"flex", flexWrap:"wrap"}}>
        <h1>{singleProduct.nombre}</h1>
        <img src={singleProduct.imagen} alt="" />
        <div>{singleProduct.stock}</div>
    </div>
)