// DOM
const contadorCarrito = document.querySelector("span#numerito")
const contenedorProductos = document.querySelector("div#contenedor-productos.contenedor-productos")
const inputBuscar = document.querySelector("input#input-buscar")

function mostrarContadorProdCarrito() {
    contadorCarrito.textContent = carritoProductos.length
}

carritoProductos.length > 0 && mostrarContadorProdCarrito()

function errorCargaPase() {
    return `<div class="error-carga">
                <h2>Parece que ha ocurrido un problema</h2>
                <h3>Vuelve a intentarlo en unos minutos...</h3>
                <h4>⏳</h4>
            </div>`
}

function retornarProductoHTML(producto) {
    return `<div class="producto">
                <span class="producto-titulo">${producto.titulo}</span>
                <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
                <span class="producto-precio">$${producto.precio}</span>
                <button class="producto-agregar" id="${producto.id}">Agregar al carrito</button>
            </div> `
}

//Activar boton agregar al carrito

function activarButtonAgregar() {
    const botones = document.querySelectorAll("button.producto-agregar")
    botones.forEach((boton)=> {
        boton.addEventListener("click", ()=>{
            let producto = Productos.find((producto)=> producto.id === parseInt(boton.id))
            carritoProductos.push(producto)
            localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos))
            mostrarContadorProdCarrito()
            Swal.fire({
                position: 'bottom-end',
                icon: 'success',
                title:`${producto.titulo} fue agregado al carrito.`,
                showConfirmButton: false,
                timer: 1000
            })
        })
    })
}

//Cargar los productos

function cargarProductos(array) {
    contenedorProductos.innerHTML = ""
    array.forEach((producto)=> contenedorProductos.innerHTML += retornarProductoHTML(producto))
    activarButtonAgregar()
}

// Funcion de cargar productos (o no) cuando no hay productos en el HTML
Productos.length > 0 ? cargarProductos(Productos) : contenedorProductos.innerHTML = errorCargaPase()


//Buscador

inputBuscar.addEventListener("search", ()=>  {
    localStorage.setItem("ultimaBusqueda", inputBuscar.value)
    const resultado = Productos.filter((producto)=> producto.titulo.toLowerCase().includes(inputBuscar.value.toLowerCase()))
    cargarProductos(resultado)
})



