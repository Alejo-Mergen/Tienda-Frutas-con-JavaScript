const tableBody = document.querySelector('tbody')

function retornarTablaHTML(producto){
    return `<tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.imagen}</td>
            </tr>`
}

if (carritoFrutas.length > 0) {
    carritoFrutas.forEach((producto) => {
        tableBody.innerHTML += retornarTablaHTML(producto)
    });
}

let compra = document.querySelector('#btnComprar');

compra.addEventListener("click", function () {
    localStorage.removeItem("carritoFrutas")
    tableBody.remove();
});
//tableBody.remove();

// var miForm = document.querySelector("#formulario");

// miForm.addEventListener("submit", recogeDatos);