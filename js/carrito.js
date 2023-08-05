const tableBody = document.querySelector("tbody")
const secProdu = document.querySelector("div.sec-produ")
const buttonComprar = document.querySelector("button#button-comprar")

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

buttonComprar.addEventListener("click", ()=> {
    Swal.fire({
        title: '¿Deseas confirmar la compra?',
        showDenyButton: true,
        confirmButtonText: 'CONFIRMAR',
        denyButtonText: `CANCELAR`,
        }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("carritoProductos")
            carritoProductos.length = 0
            Swal.fire('¡Muchas gracias por su compra!', '', 'success')
            secProdu.innerHTML = mostrarMensCarritoVacio()
        } else if (result.isDenied) {
            Swal.fire('La compra ha sido cancelada', '', 'error')
        }
    })
})