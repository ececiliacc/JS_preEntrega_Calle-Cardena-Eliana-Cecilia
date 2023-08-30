//PROYECTO FINAL SE TRATA DE CREAR UNA TIENDA VIRTUAL DE PRODUCTOS PARA MASCOTAS

// constantes
const salir = 5;
const arrayProductos=[];
const arrayCarritoCompra=[];
let idUnico = 1;

/* ===============================
   Clase para mostrar los productos de la tienda
   ===============================*/

   class Item{
    constructor(id, nombre, precio, descripcion, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.cantidad = 1;
    }
   }

   ///instanciando objeto
   const cargarProductos =() =>{

      ///Paseo
   const arnesNonStop = new Item(idUnico++,"Arnés Non-Stop-Line 5.0", 54.99, "Arnes en Y lo que favorece a la movilidad del perro.", "paseo");
   arrayProductos.push(arnesNonStop);
   const arnesHunter = new Item(idUnico++, "Arnés antiescape Hunter", 28.99, "Arnés de tres puntos diseñado para perros tipo lebreles.", "paseo");
   arrayProductos.push(arnesHunter);
   const collarHurtta = new Item(idUnico++, "Collar Razzle Dazzle Hurtta", 21.90, "Fabricado con materiales de larga duracion repelente a agua y manchas.", "paseo");
   arrayProductos.push(collarHurtta);
   const collarDogCopenaghen = new Item(idUnico++, "Collar Dog Copenaghen - Urban Explorer", 32.95, "Acolchado suave y perdurable para un uso diario confortable, incluye reflectores 3M", "paseo");
   arrayProductos.push(collarDogCopenaghen);
   const luzLed = new Item(idUnico++, "Luz LED de localización- Larga duración", 18.90, "Luz LED desarrollada especialmente para que vuestro perro sea visible lo máximo posible.", "paseo");
   arrayProductos.push(luzLed);

   ///Alimentacion
   const piensoZiwi = new Item(idUnico++, "Pienso Ziwi Pick - Ternera 400g", 25.50, "Tiene un 93% carne de vacuno cuidadosamente secada al aire.", "alimentacion");
   arrayProductos.push(piensoZiwi);
   const piensoAlpha = new Item(idUnico++, "Pienso Alpha Spirit - Multiproteina 3Kg", 23.90, "Prensado en frío: mantienen más el valor biológico de sus alimentos.","alimentacion");
   arrayProductos.push(piensoAlpha);
   const comidaAltudog = new Item(idUnico++, "Comida deshidratada Altudog - Pavo 1Kg", 14.70, "Alimento completo natural con ingredientes frescos de primera categoría troceados, deshidratados a baja temperatura.","alimentacion");
   arrayProductos.push(comidaAltudog);
   const lataTerra = new Item(idUnico++, "Comida Humeda Terra Canis -Light 400g", 4.50, "Los menús LIGHT de Terra Canis son muy bajos en calorías y en grasas.", "alimentacion");
   arrayProductos.push(lataTerra);
   const barfWildBalance = new Item (idUnico++, "BARF Boqueron y Sardina - Wild Balance 5Kg", 53.90, "cómodo formato de hamburguesas de 50 gramos cada una.", "alimentacion")
   arrayProductos.push(barfWildBalance);

   //Enriquecimiento
   const lickimatSlomo = new Item(idUnico++, "Lickimat SLOMO", 13.99, "Esta herramienta interactiva ayuda a disminuir niveles de estres y ansiedad mediante el lamido", "enriquecimiento");
   arrayProductos.push(lickimatSlomo);
   const motivadorConejo = new Item(idUnico++, "Motivador Conejo con asa", 13.90, "Mejora el vínculo con tu perro ya que es una actividad conjunta en la que formáis equipo para un objetivo en común.", "enriquecimiento");
   arrayProductos.push(motivadorConejo);
   const jugueteKong = new Item (idUnico++, "Dispensador de comida - Kong Wobbler", 15.99, "Herramienta interactiva con peso inferior para que siempre se mantenga en equilibrio, se generará un efecto “balancín” haciendo que caigan los premios por el agujero central.", "enriquecimiento");
   arrayProductos.push(jugueteKong);
   const mordedorNatural = new Item(idUnico++, "Cuerno de VACUNO - Mordedor natural", 4.99, "Cuernos de vacuno, podemos rellenarlo o untarlo por encima con comida húmeda.", "enriquecimiento");
   arrayProductos.push(mordedorNatural);
   const pelucheOveja = new Item(idUnico++, "Peluche Oveja Flaaffy", 14.99, "Mejora la calidad y percepcion del entorno, tambien ayuda a disminuir los niveles de aburrimiento y por ende los destrozos en casa.", "enriquecimiento");
   arrayProductos.push(pelucheOveja);

   //Higiene
   const sprayRepelente = new Item(idUnico++, "Spray repelente de insectos - Stanvet Life", 13.90, "Spray repelente de insectos con absorbe olores ideal para proteger a tu perro y también el hogar donde vive.", "higiene");
   arrayProductos.push(sprayRepelente);
   const almohadillas = new Item (idUnico++, "Bálsamo natural para almohadillas - Alonso La Torre", 17.99, "La función de este bálsamo es hidratar, nutrir y reparar la piel de las almohadillas.", "higiene");
   arrayProductos.push(almohadillas);
   const peine = new Item (idUnico++, "Peine Universal - Artero", 10.90, "Alisa, desenreda y deslana el pelo del perro, ideal para abrir el manto, eliminar pelo de muda, enredos y nudos en pelo.", "higiene");
   arrayProductos.push(peine);
   const shampooBopp = new Item(idUnico++, "Shampoo ecológico SPA Relajante - Bopp Soul", 13.95, "Para las pieles más sensibles y delicadas que cursen picores o rojeces por alergias ambientales.", "higiene");
   arrayProductos.push(shampooBopp);
   const pastaDientes = new Item(idUnico++, "Pasta de dientes Enzimática - XMILE PLUS", 14.95, "Gel dentífrico enzimático para perros y gatos adecuado para el cuidado de la higiene dental, previniendo la placa y el mal aliento","higiene");
   arrayProductos.push(pastaDientes);
   }

   cargarProductos();

   ///definiendo funciones de elegir productos

   const mostrarItemCategoria = (categoria) =>{
    const filtrar = arrayProductos.filter((elemento) => elemento.categoria ===categoria);
    let mostrarCategorias = '';
    const subtotal='';

    filtrar.forEach((elemento) => {
        mostrarCategorias += "\n" + elemento.id + ": " + " Producto: " + elemento.nombre +" "+ "\n    Precio: " + elemento.precio + " " + "\n    Descripción: " + elemento.descripcion + "\n"
    });

    const id = parseInt(prompt (mostrarCategorias + "\n" + "Inserte el numero correspondiente al producto que desea agregar al carrito."));
    const itemAgregado = arrayProductos.find(elemento => elemento.id === id);
   
    arrayCarritoCompra.push(itemAgregado);
   };


/* ===============================
   primera funcion Elegir producto
   ===============================*/

   const elegirProductos = () =>{
    
    let producto;
    producto = parseInt(prompt("Elija la opcion que desee: \n\n 1-Paseo \n 2-Alimentacion \n 3-Enriquecimiento \n 4-Higiene \n 5-Atras"))

    while (producto != salir){
        switch(producto){
            case 1:
                mostrarItemCategoria("paseo");
                break;
            case 2:
                mostrarItemCategoria("alimentacion");
                break;
            case 3:
                mostrarItemCategoria("enriquecimiento");
                break;
            case 4:
                mostrarItemCategoria("higiene");
                break;
            case 5:
                break;
            
            default:
                alert("Usted ha insertado una opcion incorrecta, vuelva a intentarlo");
                break;
        }

        producto = parseInt(prompt("Elija la opcion que desee: \n\n 1-Paseo \n 2-Alimentacion \n 3-Enriquecimiento \n 4-Higiene \n 5-Atras"))
    }
   }

/* ==========================================
   Segunda funcion Ver Carrito de Compra
   ==========================================*/

   const verCarrito = () => {
    
    let mostrarCarrito = 'Lista de Carrito \n';
    arrayCarritoCompra.forEach((elemento) =>{
            mostrarCarrito += "\n" + "Producto: " + elemento.nombre + " " + "\nPrecio: " + elemento.precio
    });
    const total = arrayCarritoCompra.reduce((acumulador,element) => acumulador + element.precio, 0)
    mostrarCarrito += "\n El total es: " + total
    alert(mostrarCarrito);
}

/* ==========================================
   Tercera funcion Insertar datos de contacto
   ==========================================*/

   const insertarDatosContacto = () =>{

    let nombre =prompt("Inserte su nombre: ").toLowerCase();
    while (nombre == "" || nombre == " " ){
        nombre = prompt("Nombre invalido, por favor intente nuevamente:");
    };

    let email = prompt("inserta tu email ").toLowerCase();
    while (email == "" || email == " ") {
        email = prompt("Direccion invalida, por favor intente nuevamente:");
    };

    alert(" Verifique los datos ingresados:  \n Nombre y Apellidos: "+ nombre + "\n Email: " + email)
};


/* ====================================
   Cuarta funcion Elegir tipo de entrega
   ====================================*/

   const tipoDeEntrega = () =>{

    let entrega = parseInt(prompt("Elija su metodo de entrega favorito: \n 1: Recogida en Tienda \n 2:Envio a Domicilio \n 3:Atras"))

    while(entrega !== 3){

        switch(entrega){
            case 1:
                recogidaTienda = alert("Puede recoger su pedido al dia siguiente de la compra de Lunes a Viernes \nHorario: 09:00 a 16:00 \n ***No aplica festivos ni fin de semana***");
                break;
            case 2: 
                let direccion = prompt("Inserte su direccion de envío: ").toLowerCase();
                while (direccion == "" || direccion == " ") {
                    direccion = prompt("Direccion invalida, por favor intente nuevamente:");
                };
                alert("Verifica tu Dirección: " + direccion);
                break;
            case 3:
                break;
            default:
                alert("Usted ha insertado una opcion incorrecta, vuelva a intentarlo");
                break;
        }

        entrega = parseInt(prompt("Elija su metodo de entrega favorito: \n 1: Recogida en Tienda \n 2:Envio a Domicilio \n 3:Atras"))
    };
   };


/**Pedir al usuario que escoja una opcion */

let escojaOpcion = parseInt(prompt("Elija que es lo que desea hacer: \n\n 1: Ver Productos \n 2: Visualizar Carrito de Compra \n 3: Datos de Contacto \n 4: Elija tipo de entrega \n 5: Salir"));

while (escojaOpcion !== salir){

    switch(escojaOpcion){
        case 1:
            elegirProductos();
            break;
        case 2:
            verCarrito();
            break;
        case 3:
            insertarDatosContacto();
            break;
        case 4:
            tipoDeEntrega();
            break;
        case 5:
            break;
        default:
            alert("Ha insertado una opcion incorrecta, vuelva a intentarlo");
            break;
    }

    escojaOpcion = parseInt(prompt("Elija que es lo que desea hacer: \n\n 1: Ver Productos \n 2: Visualizar Carrito de Compra \n 3: Datos de Contacto \n 4: Elija tipo de entrega \n 5: Salir"));
};

alert ("Gracias por confiar en Dirty Paws para consentir a tu peludo");

