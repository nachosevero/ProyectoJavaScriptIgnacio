const Productos = []

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("carritoProductos")) || []
}

const carritoProductos = recuperarCarrito()

function guardarCarritoProductos() {
    localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos))
}