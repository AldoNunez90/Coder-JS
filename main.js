// // Variables a utilizar

// let cuenta = 0;
// let pasteleria = 0;
// let topping = 0;
// let cantidadComida = 0;
// let cantidadTopping = 0;
// let propina = 0;
// let descuento = 0;
// let envio = 0;


// class Dulce{
//     constructor(preparacion, precio, sabor, presentacion){
//         this.preparacion = preparacion
//         this.precio = precio
//         this.sabor = sabor
//         this.presentacion = presentacion
//     };
// } 
   
//    //Array de objetos para agrupar los productos
//    const bases = []

//    const brownie = new Dulce ("Brownie", 300, "Chocolate", "Unidad");
//    bases.push(brownie);
   
//    const budin = new Dulce ("Budin", 280, "Limon", "Porción");
//    bases.push(budin);
   
//    const muffin = new Dulce ("Muffin", 200, "Chocolate", "Unidad");
//    bases.push(muffin);
   
//    const cookies = new Dulce ("Coockies", 150, "Red velvet", "TriPack");
//    bases.push(cookies);

//    console.log(bases)
// //    Filtrar los objetos con precio menos a $250 y mostrarlos como ofertas

//    const preciosBajos = base => base.precio < 250;
//    const ofertas = bases.filter(preciosBajos);

//    let mostrarOfertas = ofertas.map( function(enOferta) {
//       return enOferta.preparacion
//    });

// //Muestra en consola las ofertas que también salen por un alert al comienzo del diálogo con el usuario
//    console.log("Ofertas actuales "+mostrarOfertas.join("+"))  


// //Otro uso de filter, para verificar qué productos hay de un sabor
//    const saborChocolate = variedad => variedad.sabor == "Chocolate";
//    const choco = bases.filter(saborChocolate);
//    console.log(choco)

// // Función principal de creación del pedido
//    function menuBase() {
//     while ( isNaN(pasteleria)|| pasteleria == 0 || pasteleria > 4)  {
//     pasteleria = parseInt(prompt("Elegí la base:\n(Ingresá el número junto a la opción) \n 1- Brownie ($300)\n 2- Budin ($280)\n 3- Muffin ($200)\n 4- Cookies ($150)"))
//     };    
    
//     while (isNaN(cantidadComida) || cantidadComida == 0) {
//         cantidadComida = parseInt(prompt("¿Cuántos vas a querer?"));
//     };
    
//     switch (pasteleria) {
//         case 1 :
//             pasteleria = bases[0].preparacion+" ($"+bases[0].precio+")";
//             cuenta += (300 * cantidadComida);
//             alert("Elegiste: "+cantidadComida+" x "+bases[0].preparacion+"\nSu precio individual es: $"+bases[0].precio+"\nSabor: "+bases[0].sabor+"\nViene por: "+bases[0].presentacion);
//             break;
//         case 2 :
//                 pasteleria = bases[1].preparacion+" ($"+bases[1].precio+")";
//                 cuenta += (280 * cantidadComida)
//                 alert("Elegiste: "+cantidadComida+" x "+bases[1].preparacion+"\nSu precio individual es: $"+bases[1].precio+"\nSabor: "+bases[1].sabor+"\nViene por: "+bases[1].presentacion)
//                 break;
//         case 3 :
//             pasteleria = bases[2].preparacion+" ($"+bases[2].precio+")";
//             cuenta += (200 * cantidadComida)
//             alert("Elegiste: "+cantidadComida+" x "+bases[2].preparacion+"\nSu precio individual es: $"+bases[2].precio+"\nSabor: "+bases[2].sabor+"\nViene por: "+bases[2].presentacion)
//             break;
//         case 4 :
//             pasteleria = bases[3].preparacion+" ($"+bases[3].precio+")";
//             cuenta += (150 * cantidadComida)
//             alert("Elegiste: "+cantidadComida+" x "+bases[3].preparacion+"\nSu precio individual es: $"+bases[3].precio+"\nSabor: "+bases[3].sabor+"\nViene por: "+bases[3].presentacion)
//             break;
//             }
//             };

// // Nuevo Array para la lista de adicionales
// const listaToppings = [
//    {id:1, producto: "Oreos", precio: 50},
//    {id:2, producto: "Granola", precio: 80},
//    {id:3, producto: "Chocolate", precio: 30},
//    {id:4, producto: "Frutas", precio: 70},
// ];

// // Ordenar la lista para ver por consola
// listaToppings.sort (function (a, b){
//    if (a.precio > b.precio) {
//       return 1;
//    }
//    if (a.precio < b.precio){
//       return -1;
//    }
//    return 0;
// })
// console.log(listaToppings)


// //Por consola, los productos disponibles de otra lista
// for (const elemento of listaToppings) {
//    console.log("Disponibles: "+elemento.producto+" $"+elemento.precio);
// }

// // Segunda función para agregar complementos
// function agregarToppings () {
//     while (isNaN(topping) || topping == 0 || topping > 4) {    
//         topping = parseInt(prompt("¿Qué le vas a agregar? \n1- Oreos ($50)\n2- Chocolate ($30)\n3- Frutas ($70) \n4- Granola ($80)"));
//     };

//     while (isNaN(cantidadTopping) || cantidadTopping == 0) {
//         cantidadTopping = parseInt(prompt("¿Cantidad?"));
//     }

//         switch (topping) {
//         case 1 :
//         topping = listaToppings[1].producto+" ($"+listaToppings[1].precio+")";
//         cuenta += (50 * cantidadTopping);
//         alert("Agregaste: "+cantidadTopping+" de "+listaToppings[1].producto)
//         break;
//         case 2 :
//         topping = listaToppings[0].producto+" ($"+listaToppings[0].precio+")";
//         cuenta += (30 * cantidadTopping);
//         alert("Agregaste: "+cantidadTopping+" de "+listaToppings[0].producto)
//         break;
//         case 3 :
//         topping = listaToppings[2].producto+" ($"+listaToppings[2].precio+")";
//         cuenta += (70 * cantidadTopping);
//         alert("Agregaste: "+cantidadTopping+" de "+listaToppings[2].producto)
//         break;
//         case 4 :
//         topping = listaToppings[3].producto+" ($"+listaToppings[3].precio+")";
//         cuenta += (80 * cantidadTopping);
//         alert("Agregaste: "+cantidadTopping+" de "+listaToppings[3].producto)
//         break;    
//     }
// }

// function agregarPropina () {
//     propina = confirm ("¿Querés agregar un 10% de propina?")
//     if (propina) {
//         propina = cuenta * 0.10
//         cuenta += propina
//     } else {
//         propina = 0
//     }
// }

// function hacerDescuento () {
//     while (isNaN(descuento) || descuento == 0) {
//         descuento = parseInt(prompt("¿Tenés un código de descuento?\n Ingresá del 1 al 3 para obtener descuentos"))
//         };

//     switch(descuento) {
//         case 1:
//             descuento = "$100";
//             cuenta = cuenta - 100;
//             break;
//         case 2:
//             descuento = "$150";
//             cuenta = cuenta - 150;
//             break;
//         case 3:
//             descuento = "$200";
//             cuenta = cuenta - 200;
//             break;
//         default :
//         descuento = "$0";
//         }
//     }


// function costoEnvio () {
//     if (cuenta < 500) {
//         envio = 250
//         cuenta += envio
//         alert ("Supera los $500 y el envío es gratis!");
//     } else {
//         envio = 0
//         alert ("El envío es sin cargo");
//     }
// }

// alert ("Vamos a armar tu menú:")
// //Alert con las ofertas que también salen por consola:
// alert ("Hoy tenemos en oferta: "+ `${mostrarOfertas.join(" - ")}`)
// menuBase()
// agregarToppings()
// agregarPropina()
// hacerDescuento()
// costoEnvio()


// alert (`
//     Detalle de la cuenta: 
//     - ${cantidadComida} x ${pasteleria}
//     - ${cantidadTopping} x ${topping}
//     - Propina: $${propina}
//     - Descuento: ${descuento}
//     - Envío: $${envio}

//     - Total: $${cuenta}
// `)