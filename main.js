let cantidadSolicitada = parseInt (prompt("Cantidad: \n(Mínimo 50)"))
let minimo = 50

if ((cantidadSolicitada == "") || (isNaN(cantidadSolicitada))){
    alert("Debe ingresar una cantidad")
}
else if (cantidadSolicitada == minimo) {
    alert ("La cantidad es igual al mínimo")
}
else if (cantidadSolicitada < minimo){
    alert ("La cantidad no llega al mínimo")
}
else if (cantidadSolicitada > minimo){
    alert("La cantidad supera el mínimo")
}