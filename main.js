let compra = prompt("¿Querés agregar a tu carrito un brownie, muffin, budin o nada?") .toLocaleLowerCase ();

while(compra != "nada" ){
   switch (compra) {
       case "brownie":
            alert("Agregaste un brownie!");
            break;
        case "muffin":
            alert("Agregaste un muffin!");
            break;
        case "budin":
            alert("Agregaste un budin!");
            break;
       default:
           alert("¡Por favor, elegí una de las opciones!")
           break;
   }
   compra = prompt("¿Algo más? ¿brownie, muffin, budin? ¿nada?") .toLocaleLowerCase ();
}
