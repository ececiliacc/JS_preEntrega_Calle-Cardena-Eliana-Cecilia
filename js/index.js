//PROYECTO FINAL SE TRATA DE CREAR UNA TIENDA VIRTUAL DE PRODUCTOS PARA MASCOTAS

//PRODUCTOS

const productos =[
    // paseo
    {
        id:"paseo-1",
        titulo:"Arnés Non-Stop-Line 5.0",
        precio:54.99,
        imagen:"../img/paseo/arnes-non-stop-line-arness-5-0.webp",
        caracteristicas: "Arnes en Y lo que favorece a la movilidad del perro.",
        categoria:{
            nombre: "Paseo",
            id:"paseo"
        }
    },


    {
        id:"paseo-2",
        titulo:"Arnés Antiescape Hunter",
        precio:28.99,
        imagen:"../img/paseo/arnes-anti-escape-hunter.webp",
        caracteristicas: "Arnés de tres puntos diseñado para perros tipo lebreles.",
        categoria:{
            nombre: "Paseo",
            id:"paseo"
        }
    },

    {
        id:"paseo-3",
        titulo:"Collar Razzle Dazzle Hurtta",
        precio:21.99,
        imagen:"../img/paseo/collar-hurtta.webp",
        caracteristicas: "Collar de larga duracion repelente al agua.",
        categoria:{
            nombre: "Paseo",
            id:"paseo"
        }
    },

    {
        id:"paseo-4",
        titulo:"Collar Dog Copenaghen Urban",
        precio:32.95,
        imagen:"../img/paseo/collar-dog-copenhagen.jpg",
        caracteristicas: "Collar suave y perdurable para un uso diario confortable.",
        categoria:{
            nombre: "Paseo",
            id:"paseo"
        }
    },

    {
        id:"paseo-5",
        titulo:"Luz LED De Localización Mascotas",
        precio:18.94,
        imagen:"../img/paseo/luz-led-ubicacion.webp",
        caracteristicas: "Luz LED para que vuestro perro sea visible lo máximo posible.",
        categoria:{
            nombre: "Paseo",
            id:"paseo"
        }
    },
    
    // Alimentacion

    {
        id:"alimentacion-1",
        titulo:"Pienso Ziwi Pick De Ternera 400g",
        precio:25.55,
        imagen:"../img/alimentacion/ziwi-ternera.webp",
        caracteristicas: "Tiene un 93% carne de vacuno cuidadosamente secada al aire.",
        categoria:{
            nombre: "Alimentacion",
            id:"alimentacion"
        }
    },

    {
        id:"alimentacion-2",
        titulo:"Pienso Alpha Spirit Multiproteina 3Kg",
        precio:23.99,
        imagen:"../img/alimentacion/alpha-spirit-multiproteina.webp",
        caracteristicas: "Pienso prensado en frío mantienen más el valor biológicos.",
        categoria:{
            nombre: "Alimentacion",
            id:"alimentacion"
        }
    },

    {
        id:"alimentacion-3",
        titulo:"Comida Deshidratada Altudog Pavo 1Kg",
        precio:14.75,
        imagen:"../img/alimentacion/altudog-pavo.jpg",
        caracteristicas: "Alimento natural con ingredientes deshidratados a baja temperatura.",
        categoria:{
            nombre: "Alimentacion",
            id:"alimentacion"
        }
    },

    {
        id:"alimentacion-4",
        titulo:"Comida Humeda Terra Canis Light 400g",
        precio:4.55,
        imagen:"../img/alimentacion/terra-canis-lata-light-pavo.webp",
        caracteristicas: "Los menús LIGHT de Terra Canis son muy bajos en calorías y en grasas.",
        categoria:{
            nombre: "Alimentacion",
            id:"alimentacion"
        }
    },

    {
        id:"alimentacion-5",
        titulo:"BARF Wild Balance Boqueron y Sardina 5Kg",
        precio:53.95,
        imagen:"../img/alimentacion/wild-balance-boqueronysardina.webp",
        caracteristicas: "Cómodo formato de hamburguesas de 50 gramos cada una.",
        categoria:{
            nombre: "Alimentacion",
            id:"alimentacion"
        }
    },

    //Enriquecimiento

    {
        id:"enriquecimiento-1",
        titulo:"Lickimat SLOMO",
        precio:13.99,
        imagen:"../img/enriquecimiento/lickimat-slomo.webp",
        caracteristicas: "Ayuda a disminuir niveles de estres y ansiedad.",
        categoria:{
            nombre: "Enriquecimiento",
            id:"enriquecimiento"
        }
    },

    {
        id:"enriquecimiento-2",
        titulo:"Motivador Conejo Con Asa",
        precio:13.99,
        imagen:"../img/enriquecimiento/motivador-conejo-con-asa.jpg",
        caracteristicas:"Un juguete para mejorar el vinculo con tu perro",
        categoria:{
            nombre: "Enriquecimiento",
            id:"enriquecimiento"
        }
    },

    {
        id:"enriquecimiento-3",
        titulo:"Dispensador Kong Wobbler",
        precio:15.99,
        imagen:"../img/enriquecimiento/dispensador-de-comida-kong-wobbler.webp",
        caracteristicas:"Caen los premios por el agujero central."  ,
        categoria:{
            nombre: "Enriquecimiento",
            id:"enriquecimiento"
        }
    },

    {
        id:"enriquecimiento-4",
        titulo:"Mordedor Natural Cuerno",
        precio:4.99,
        imagen:"../img/enriquecimiento/cuerno-de-vacuno.webp",
        caracteristicas: "Cuernos de vacuno, podemos rellenarlo o untarlo con comida húmeda.",
        categoria:{
            nombre: "Enriquecimiento",
            id:"enriquecimiento"
        }
    },

    {
        id:"enriquecimiento-5",
        titulo:"Juguete Peluche Oveja Flaaffy",
        precio:14.99,
        imagen:"../img/enriquecimiento/peluche-oveja.webp",
        caracteristicas:"Mejora la calidad y percepcion del entorno, en casa.",
        categoria:{
            nombre: "Enriquecimiento",
            id:"enriquecimiento"
        }
    },

    // Higiene

    {
        id:"higiene-1",
        titulo:"Spray repelente Insectos Stanvet Life",
        precio:13.99,
        imagen:"../img/higiene/spray-repelente.webp",
        caracteristicas:"Ideal para proteger a tu perro y también el hogar donde vive.",
        categoria:{
            nombre: "Higiene",
            id:"higiene"
        }
    },

    {
        id:"higiene-2",
        titulo:"Bálsamo almohadillas Alonso La Torre",
        precio:17.99,
        imagen:"../img/higiene/balsamo-natural-para-almohadillas.webp",
        caracteristicas:"Hidrata, nutre y reparara la piel de las almohadillas.",
        categoria:{
            nombre: "Higiene",
            id:"higiene"
        }
    },

    {
        id:"higiene-3",
        titulo:"Peine Universal Artero",
        precio:10.95,
        imagen:"../img/higiene/peine-universal-artero.webp",
        caracteristicas:"Alisa, desenreda y deslana el pelo del perro, ideal para abrir el manto.",
        categoria:{
            nombre: "Higiene",
            id:"higiene"
        }
    },

    {
        id:"higiene-4",
        titulo:"Shampoo Relajante Bopp Soul",
        precio:13.95,
        imagen:"../img/higiene/champu-ecologico-spa-relajante-bopp-soul.webp",
        caracteristicas:"Para las pieles más sensibles y delicadas.",
        categoria:{
            nombre: "Higiene",
            id:"higiene"
        }
    },

    {
        id:"higiene-5",
        titulo:"Pasta de dientes Enzimática",
        precio:14.95,
        imagen:"../img/higiene/pasta-enzimatica.jpg",
        caracteristicas:"Para el cuidado de la higiene dental, previniendo la placa y el mal aliento.",
        categoria:{
            nombre: "Higiene",
            id:"higiene"
        }
    },

];

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

cargarProductos(productos);

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