let cuenta = 0;
let comida = 0;
let topping = 0;
let cantidadComida = 0;
let cantidadTopping = 0;
let propina = 0;
let descuento = 0;
let envio = 0;

// Al simulador de la clase anterior le agregué el objeto Dulce, para indicar luego de la eleccion de la base los detalles de la preparación elegida. Se invoca en el case correspondiente del switch.


class Dulce{
    constructor(preparacion, precio, sabor, presentacion){
        this.preparacion = preparacion
        this.precio = precio
        this.sabor = sabor
        this.presentacion = presentacion
        this.mostrar = function() { alert("Elegiste: "+this.preparacion+", su precio es: "+this.precio+", Sabor: "+this.sabor+", viene por: "+this.presentacion) }
    };
} 

const brownie = new Dulce ("Brownie","$300", "Chocolate", "Unidad");
const budin = new Dulce ("Budin", "$280", "Limon", "Porción");
const muffin = new Dulce ("Muffin", "$200", "Vainilla", "Unidad");
const cookies = new Dulce ("Coockies", "$150", "Red velvet", "TriPack");

    
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