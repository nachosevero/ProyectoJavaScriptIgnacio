// DOM
const contenedorProductos = document.querySelector("div#contenedor-productos.contenedor-productos")
const inputBuscar = document.querySelector("input#input-buscar")

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
            console.table(carritoProductos)
        })
    })
}

//Cargar los productos

function cargarProductos(array) {
    contenedorProductos.innerHTML = ""
    array.forEach((producto)=> {
        contenedorProductos.innerHTML += retornarProductoHTML(producto)
    })
    activarButtonAgregar()
}
cargarProductos(Productos)

//Buscador

inputBuscar.addEventListener("search", ()=>  {
    localStorage.setItem("ultimaBusqueda", inputBuscar.value)
    const resultado = Productos.filter((producto)=> producto.titulo.toLowerCase().includes(inputBuscar.value.toLowerCase()))
    cargarProductos(resultado)
})





/*
<div class="producto">
<span class="producto-titulo">GPU Nvidia</span>
<img src="./img/graficanvidia.jpg" alt="" class="producto-imagen">
<span class="producto-precio">$28275</span>
<button class="producto-agregar">Agregar al carrito</button>
</div>

*/ 