
const agregarAlCarrito = (frutaId)=> {
    if (frutaId > 0) {
        let resultado = productos.find((producto)=> producto.id === parseInt(frutaId))
        if (resultado !== undefined) {
            carritoFrutas.push(resultado)
        }
    } 
}

const almacenarCarrito = ()=> {
    if (carritoFrutas.length > 0){
        localStorage.setItem('carritoFrutas', JSON.stringify(carritoFrutas))
    }
}

const recuperarCarrito = ()=> {
    return JSON.parse(localStorage.getItem('carritoFrutas')) || []
}
const carritoFrutas = recuperarCarrito()