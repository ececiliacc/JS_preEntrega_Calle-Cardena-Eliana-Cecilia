
const productosEnCarrito  = JSON.parse(localStorage.getItem("productos-en-el-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoCompraFinal = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal= document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");



function cargarProductosCarrito() {

    if (productosEnCarrito && productosEnCarrito.length > 0){

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoCompraFinal.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML="";
    
       productosEnCarrito.forEach(producto => {
    
        const div = document.createElement("div");
        div.classList.add ("carrito-producto");
        div.innerHTML = `
        <img class="imagen-producto-carrito" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="carrito-producto-titulo">
            <small>Nombre</small>
            <h5>${producto.titulo}</h5>
        </div>   
        <div class="carrito-producto-cantidad">
            <small>Cantidad</small>

            <h5>
                <span class="restar"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 20 25">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
              </svg> </span> 
             ${producto.cantidad}

                <span class="sumar"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 20 25">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg></span>
            </h5>
        </div>   

        <div class="carrito-producto-precio">
            <small>Precio</small>
            <h5>${producto.precio}€</h5>
        </div>     
        <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <h5>${producto.precio.toFixed(2) * producto.cantidad.toFixed(2)}€</h5>
        </div> 
        <button class="carrito-producto-eliminar" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        </button>
        `;

        contenedorCarritoProductos.append(div);

        

        let restar = div.querySelector(".restar");
        restar.addEventListener("click", () =>{
            if(producto.cantidad !== 1){
                producto.cantidad--;
                cargarProductosCarrito();
            }
            localStorage.setItem("productos-en-el-carrito", JSON.stringify(productosEnCarrito));
            
            
        })

        let sumar =div.querySelector(".sumar");
        sumar.addEventListener("click", ()=> {
            producto.cantidad++;   
            
            cargarProductosCarrito();
            localStorage.setItem("productos-en-el-carrito", JSON.stringify(productosEnCarrito));
        })
       

       });
        
    }else{
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoCompraFinal.classList.add("disabled");
        
    };

    actualizoBotonesEliminar ();
    actualizarTotal()
}

cargarProductosCarrito()


function actualizoBotonesEliminar (){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e){

    // libreria
    Toastify({
        text: "Producto Eliminado",
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
    const index = productosEnCarrito.findIndex(producto => producto.id ===idBoton)
    productosEnCarrito.splice(index,1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-el-carrito", JSON.stringify(productosEnCarrito))
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){

    // Libreria

    Swal.fire({
        title: '¿Estas seguro de vaciar la cesta de compra?',
        icon: 'question',
        text: `Se eliminaran ${productosEnCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0)} productos`,
        showCancelButton: true,
        confirmButtonColor: '#2fd237',
        cancelButtonColor: '#d82158',
        iconColor:'#e0338e',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-el-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        }
      })

};

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
    total.innerText = `${totalCalculado.toFixed(2)}€`;
};

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito(){

    // librerias
    Swal.fire({
        title: 'Realizar pago de los productos',
        text: "Se rediccionara a pasarela de pago",
        icon: 'warning',
        iconColor:'#e0338e',
        showCancelButton: true,
        confirmButtonColor: '#2fd237',
        cancelButtonColor: '#d82158',
        confirmButtonText: 'Pagar',
        cancelButtonText:'Seguir comprando',
      }).then((result) => {
        if (result.isConfirmed) {
            
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-el-carrito", JSON.stringify(productosEnCarrito));
            
            contenedorCarritoVacio.classList.add("disabled");
            contenedorCarritoProductos.classList.add("disabled");
            contenedorCarritoAcciones.classList.add("disabled");
            contenedorCarritoCompraFinal.classList.remove("disabled");

            Swal.fire(
                'Pago realizado!',
                'Gracias por su compra',
                'success'
              )
        }
      })

   


};