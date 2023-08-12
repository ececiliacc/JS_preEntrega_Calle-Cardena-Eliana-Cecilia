//PROYECTO FINAL SE TRATA DE CREAR UNA TIENDA VIRTUAL DE PRODUCTOS PARA MASCOTAS

// constantes
const salir = 4;

/* ===============================
   primera funcion Elegir producto
   ===============================*/

   const elegirProductos = () => {

    let producto;
    producto = parseInt(prompt("Elija los productos que desee: \n\n 1-Arnes de perro: 45 euros \n 2-Collar multicolor: 35 euros \n 3-Correas de 5 metros: 20 euros \n 4-Atras"));

    while (producto !== salir){

       let resultado;

        switch (producto){

            case 1:
                let numeroArnes = parseInt(prompt("Ingrese numero de arneses que desea comprar"));
                if(numeroArnes <=0){
                    alert("Ingrese un número válido");
                }else{
                    resultado= numeroArnes *45
                    alert("Número de Arnes: " + numeroArnes + "\nPrecio Total: " + resultado + " euros");                    
                }
                break;

            case 2:
                let numeroCollar = parseInt(prompt("Ingrese numero de collares que desea comprar"));
                if(numeroCollar <=0){
                    alert("Ingrese un número válido");
                }else{
                    resultado= numeroCollar * 35
                    alert("Número de collares: " + numeroCollar + "\nPrecio Total: " + resultado + " euros");
                }
                break;

            case 3:
                let numeroCorreas = parseInt(prompt("Ingrese numero de correas que desea comprar"));
                if(numeroCorreas <=0){
                    alert("Ingrese un número válido");
                }else{
                    resultado= numeroCorreas * 20
                    alert("Número de correas: " + numeroCorreas + "\nPrecio Total: " + resultado + " euros");
                }
                break;

            case 4: 
                break;

            default:
                alert("Usted ha insertado una opcion incorrecta, vuelva a intentarlo");
                break;
        };

        producto = parseInt(prompt("Elija los productos que desee: \n\n 1-Arnes de perro mediano: 45 euros \n 2-Collar multicolor: 25 euros \n 3-Correas de 5m \n 4-Atras \n"));

    };

   

}

/* ==========================================
   Segunda funcion Insertar datos de contacto
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
   tercera funcion Elegir tipo de entrega
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

let escojaOpcion = parseInt(prompt("Elija que es lo que desea hacer: \n\n 1: Elegir Productos \n 2: Datos de Contacto \n 3: Elija tipo de entrega \n 4: Salir"));

while (escojaOpcion !== salir){

    switch(escojaOpcion){
        case 1:
            elegirProductos();
            break;
        case 2:
            insertarDatosContacto();
            break;
        case 3:
            tipoDeEntrega();
            break;
        case 4:
            break;
        default:
            alert("Ha insertado una opcion incorrecta, vuelva a intentarlo");
            break;
    }

    escojaOpcion = parseInt(prompt("Elija que es lo que desea hacer: \n\n 1: Elegir Productos \n 2: Datos de Contacto \n 3: Elija tipo de entrega \n 4: Salir"));
};

alert ("Gracias por confiar en Dirty Paws para consentir a tu peludo");

