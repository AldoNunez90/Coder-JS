let cuenta = 0;
let comida = 0;
let topping = 0;
let cantidadComida = 0;
let cantidadTopping = 0;
let propina = 0;
let descuento = 0;
let envio = 0;


class Dulce{
    constructor(preparacion, precio, sabor, presentacion){
        this.preparacion = preparacion
        this.precio = precio
        this.sabor = sabor
        this.presentacion = presentacion
        this.mostrar = function() { alert("Elegiste: "+this.preparacion+", su precio es: $"+this.precio+", Sabor: "+this.sabor+", viene por: "+this.presentacion) }
      };
   } 
   
   //Array de objetos para agrupar los productos
   const bases = []

   const brownie = new Dulce ("Brownie", 300, "Chocolate", "Unidad");
   bases.push(brownie);
   
   const budin = new Dulce ("Budin", 280, "Limon", "Porción");
   bases.push(budin);
   
   const muffin = new Dulce ("Muffin", 200, "Chocolate", "Unidad");
   bases.push(muffin);
   
   const cookies = new Dulce ("Coockies", 150, "Red velvet", "TriPack");
   bases.push(cookies);

   

   const preciosBajos = base => base.precio < 250;
   const ofertas = bases.filter(preciosBajos);

   let mostrarOfertas = ofertas.map( function(enOferta) {
      return enOferta.preparacion
   });

   //Muestra en consola las ofertas que también salen por un alert al comienzo del diálogo con el usuario
   console.log("Ofertas actuales "+mostrarOfertas.join("+"))  

   const saborChocolate = variedad => variedad.sabor == "Chocolate";
   const choco = bases.filter(saborChocolate);
//Otro uso de filter, para verificar qué productos hay de un sabor
   console.log(choco)



   
   function menuBase() {
    while (isNaN(comida) || comida == 0 || comida > 4) {
    comida = parseInt(prompt("Elegí la base:\n(Ingresá el número junto a la opción) \n 1- Brownie ($300)\n 2- Muffin ($200)\n 3- Budin ($280)\n 4- Cookies ($150)"));
    }

    while (isNaN(cantidadComida) || cantidadComida == 0) {
        cantidadComida = parseInt(prompt("¿Cuántos vas a querer?"));
    }

    switch (comida) {
        case 1 :
            comida = "brownie ($300)"
            cuenta += (300 * cantidadComida)
            brownie.mostrar()
            break;
        case 2 :
            comida = "Muffin ($200)"
            cuenta += (200 * cantidadComida)
            muffin.mostrar()
            break;
        case 3 :
            comida = "Budin ($280)"
            cuenta += (280 * cantidadComida)
            budin.mostrar()
            break;
        case 4 :
            comida = "Cookies ($150)"
            cuenta += (150 * cantidadComida)
            cookies.mostrar()
            break;
                    }

        
                }


const listaToppings = [
   {id:1, producto: "Oreos", precio: 50},
   {id:4, producto: "Granola", precio: 80},
   {id:2, producto: "Chocolate", precio: 30},
   {id:3, producto: "Frutas", precio: 70},
];

listaToppings.sort (function (a, b){
   if (a.precio > b.precio) {
      return 1;
   }
   if (a.precio < b.precio){
      return -1;
   }
   return 0;
})
console.log(listaToppings)
//Muestra el array listaToppings ordenado por precio

for (const elemento of listaToppings) {
   console.log("Disponibles: "+elemento.producto+" $"+elemento.precio);
}
//Por consola, los productos disponibles de otra lista



function agregarToppings () {
    while (isNaN(topping) || topping == 0 || topping > 4) {    
        topping = parseInt(prompt("¿Qué le vas a agregar? \n1- Oreos ($50)\n2- Chocolate ($30)\n3- Frutas ($70)\n4- Granola ($80)"));
    }
        
    while (isNaN(cantidadTopping) || cantidadTopping == 0) {
        cantidadTopping = parseInt(prompt("¿Cantidad?"));
    }
        switch (topping) {
        case 1 :
        topping = "Oreos ($50)";
        cuenta += (50 * cantidadTopping);
        break;
        case 2 :
        topping = "Chocolate ($30)";
        cuenta += (30 * cantidadTopping);
        break;
        case 3 :
        topping = "Frutas ($70)";
        cuenta += (70 * cantidadTopping);
        break;
        case 4 :
        topping = "Granola ($80)";
        cuenta += (80 * cantidadTopping);
        break;    
    }
}

function agregarPropina () {
    propina = confirm ("¿Querés agregar un 10% de propina?")
    if (propina) {
        propina = cuenta * 0.10
        cuenta += propina
    } else {
        propina = 0
    }
}

function hacerDescuento () {
    while (isNaN(descuento) || descuento == 0) {
        descuento = parseInt(prompt("¿Tenés un código de descuento?\n Ingresá del 1 al 3 para obtener descuentos"))
    }

    switch(descuento) {
        case 1:
            descuento = "$100";
            cuenta = cuenta - 100;
            break;
        case 2:
            descuento = "$150";
            cuenta = cuenta - 150;
            break;
        case 3:
            descuento = "$200";
            cuenta = cuenta - 200;
            break;
        default :
        descuento = "$0";
        }

    }


function costoEnvio () {
    if (cuenta < 500) {
        envio = 250
        cuenta += envio
        alert ("Supera los $500 y el envío es gratis!");
    } else {
        envio = 0
        alert ("El envío es sin cargo");
    }
}

alert ("Vamos a armar tu menú:")
//Alert con las ofertas que también salen por consola
alert ("Hoy tenemos en oferta: "+ `${mostrarOfertas.join(" - ")}`)
menuBase()
agregarToppings()
agregarPropina()
hacerDescuento()
costoEnvio()


alert (`
    Detalle de la cuenta: 
    - ${cantidadComida} x ${comida}
    - ${cantidadTopping} x ${topping}
    - Propina: $${propina}
    - Descuento: ${descuento}
    - Envío: $${envio}

    - Total: $${cuenta}
`)