const Productos = [
    {
        imagen:"./img/graficanvidia.jpg", 
        id: 1, 
        titulo:"ZOTAC GeForce RTX4060 Ti Twin Edge OC SPIDER-MAN Bundle", 
        precio: 28275
    },
    {
        imagen:"./img/graficaamd.jpg", 
        id: 2, 
        titulo:"GPU Gigabyte Radeon RX7900XT Gaming OC 20Gb", 
        precio: 60255
    },
    {
        imagen:"./img/placaasus.jpg", 
        id: 3, 
        titulo:"Mother Asus Rog Strix Z790-F Gaming Wifi", 
        precio: 26910
    },
    {
        imagen:"./img/placamadreasrock.jpg", 
        id: 4, 
        titulo:"Mother Asrock X670e Taichi AM5 DDR5", 
        precio: 33150
    },
    {
        imagen:"./img/ram.jpg", 
        id: 5, 
        titulo:"Memoria Kingston Fury Beast RGB 8GB DDR4 3600Mhz", 
        precio: 4290
    },
    {
        imagen:"./img/ssd.jpg", 
        id: 6, 
        titulo:"Kingston FURY Renegade PCIe 4.0 NVMe M.2 1Tb", 
        precio: 11505
    },
    {
        imagen:"./img/fuentecoolermaster.jpg", 
        id: 7, 
        titulo:"Fuente Cooler Master V1300 80 Plus Platinum Full Modular 30 Aniversario", 
        precio: 17550
    },
    {
        imagen:"./img/monitor.jpg", 
        id: 8, 
        titulo:"Monitor Viewsonic Elite XG250 FHD 1ms 280Hz IPS 25″ G-Sync HDR400", 
        precio: 19110
    },
    {
        imagen:"./img/teclado.jpeg", 
        id: 9, 
        titulo:"Teclado Logitech G915 TKL inalámbrico", 
        precio: 11115
    },
    {
        imagen:"./img/mouse.jpg", 
        id: 10, 
        titulo:"Mouse Razer Deathadder V2 Pro", 
        precio: 4875
    },
    {
        imagen:"./img/auriculares.jpg", 
        id: 11, 
        titulo:"Auriculares Hyperx Cloud Alpha Wireless", 
        precio: 8346
    }
]

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("carritoProductos")) || []
}

const carritoProductos = recuperarCarrito()