//PROYECTO FINAL SE TRATA DE CREAR UNA TIENDA VIRTUAL DE PRODUCTOS PARA MASCOTAS

let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })
// mostrar productos

const contenedorProductos = document.querySelector("#contenedor-productos");
const linksCategorias = document.querySelectorAll(".nav-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".agregar-producto");
const numero = document.querySelector("#numero");

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML="";

    productosElegidos.forEach(producto => {
        
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML =`
            <img class="imagen-producto" src="${producto.imagen}" alt="${producto.titulo}">
            <h3 class="titulo-producto">${producto.titulo}</h3>
            <h5 class="precio-producto">${producto.precio}€ </h5>
            <p class="caracteristicas-producto">${producto.caracteristicas}</p>
            <button class="agregar-producto" id="${producto.id}">Agregar</button>
        
        `;

        contenedorProductos.append(card);
    })

    actualizoBotonesAgregar ();
    console.log(botonesAgregar);
}



// para cuando cambiamos por las categorias
linksCategorias.forEach(link => {

    link.addEventListener("click", (e)=>{
        linksCategorias.forEach(link => link.classList.remove("active"));
        e.target.classList.add("active");

        ///filtro de los productos por categoria
        const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
        tituloPrincipal.innerText = productoCategoria.categoria.nombre;

        const productosCategoria = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
        cargarProductos(productosCategoria);
    })
})

// agregar productos al carrito///
function actualizoBotonesAgregar (){
    botonesAgregar = document.querySelectorAll(".agregar-producto");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}


//creamos array de los productos al carrito
 
let productosEnCarrito;

const productosEnCarritoLS  = JSON.parse(localStorage.getItem("productos-en-el-carrito"));
if(productosEnCarritoLS){
    productosEnCarrito = productosEnCarritoLS
    actualizarNumeroCarrito()
}else{
    productosEnCarrito = [];
}



function agregarAlCarrito(e){

// libreria
    Toastify({
        text: "Producto Agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        offset: {
            x: 20, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 100 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        borderRadius: "0.5rem",
        fontSize:"0.85rem"
        },
        onClick: function(){} // Callback after click
    }).showToast();


    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    ///revisando si existe en el array carrito

    if(productosEnCarrito.some(producto => producto.id === idBoton)){

        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    }else{
          ///agregando al carrito
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumeroCarrito()    

    //almacenar localstorage

    localStorage.setItem("productos-en-el-carrito", JSON.stringify(productosEnCarrito));
}

// actulizar numero del carrito

function actualizarNumeroCarrito(){

    let nuevoNumero = productosEnCarrito.reduce((acumulador, producto)=> acumulador + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}