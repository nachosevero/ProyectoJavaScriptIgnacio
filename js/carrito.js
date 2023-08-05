const tableBody = document.querySelector("tbody")
const secProdu = document.querySelector("div.sec-produ")

function listarProductosEnCarritoHTML(producto) {
    return `<tr>
                <td>${producto.titulo}</td>
                <td>$${producto.precio.toLocaleString()}</td>
                <td><button  class="eliminar-producto-carrito"><i class="bi bi-trash-fill"></i></button></td>
            </tr>`
}

function mostrarMensCarritoVacio() {
    return `<div class="carrito-vacio">
                <p>El carrito está vacío. ☹</p>
            </div>`
}

function armarCarrito() {
    tableBody.innerHTML = ""
    carritoProductos.length > 0 ? carritoProductos.forEach((producto)=> tableBody.innerHTML += listarProductosEnCarritoHTML(producto))
                                : secProdu.innerHTML = mostrarMensCarritoVacio()
}
armarCarrito()