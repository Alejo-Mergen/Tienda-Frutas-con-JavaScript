const URL = 'js/productos.json'
productos = []
const container = document.querySelector('div.container')

function armarCardHTML(producto) {
    // {imagen: "🍌",nombre: "Bananas",precio: 220},
    return ` <div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`
}

function activarClickEnBotones(){
    const botonesAgregar = document.querySelectorAll('button.button.button-outline.button-add')
    if(botonesAgregar !== null){ 
        for (let boton of botonesAgregar) {
            boton.addEventListener("click", (e)=> {
                agregarAlCarrito(e.target.id)
                almacenarCarrito()
            })
        }
    }
}

function cargarProductos(array) {
    array.forEach((producto) => {
        container.innerHTML += armarCardHTML(producto)
    })
    activarClickEnBotones()
}

function obtenerProductos() {
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=> productos.push(...data))
    .then(()=> cargarProductos(productos))
}
obtenerProductos() 