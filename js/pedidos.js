// contructor de elementos para el array bases 
class Dulce {
    constructor(id, preparacion, precio, sabor, presentacion, imagen) {
        this.id = id
        this.preparacion = preparacion
        this.precio = precio
        this.sabor = sabor
        this.imagen = imagen
        this.presentacion = presentacion
    };
}

const bases = []


bases.push(new Dulce(1, "Brownie", 300, "Chocolate", "Unidad", "../media/Brownie-de-castanas.jpg"));


bases.push(new Dulce(2, "Budin", 280, "Limon", "Porción", "../media/budin.jpg"));


bases.push(new Dulce(3, "Coockies", 150, "Chocolate", "TriPack", "../media/pastry10.jpg"));

bases.push(new Dulce(4, "Muffin", 200, "Chocolate", "Unidad", "../media/pastry9.jpg"));


bases.push(new Dulce(5, "Scon de queso", 100, "Queso", "Unidad", "../media/OOscon.jpg"));


bases.push(new Dulce(6, "Cuadrado", 300, "Coco y DDL", "Unidad", "../media/MMcoco y ddl.jfif"));


bases.push(new Dulce(7, "Alfajor", 250, "Choco y DDL", "Unidad", "../media/IIalfajor de choco.jpg"));


bases.push(new Dulce(8, "Torta", 1600, "Chocolate", "8 Porciones ", "../media/JJtorta de cohoco.png"));


bases.push(new Dulce(9, "Red Velvet", 1500, "Red velvet", "8 Porciones", "../media/KKredred.jfif"));


bases.push(new Dulce(10, "Chocotorta", 300, "Chocolate y DDL", "Unidad", "../media/HHchocotorta.jpg"));


bases.push(new Dulce(11, "Budín", 300, "Banana", "Porción", "../media/DDbudin de banana.jpg"));


bases.push(new Dulce(12, "Lemon pie", 1300, "Limón", "8 Porciones", "../media/GGlemon pie.jpg"));


bases.push(new Dulce(13, "Apple crumble", 1550, "Manzana", "8 Porciones", "../media/FFapple.jfif"));


bases.push(new Dulce(14, "Alfajor de nuez", 120, "Nuez y DDL", "Unidad", "../media/EEAlfajores-de-nuez-y-dulce-de-leche-1.png"));


bases.push(new Dulce(15, "Choco-Oreo", 1800, "Oreo y DDL", "8 Porciones", "../media/CCChocooreo.jpg"));


bases.push(new Dulce(16, "Carrot cake", 1500, "Zanahoria", "8 Porciones", "../media/BBcarrot.jpg"));

let elementos = ''
bases.forEach(item => {
    elementos += `
    <li class="card col-lg-3 item">
    <img src="${item.imagen}" alt="${item.preparacion}" class="item__img">
           <div>
             <h5 class="item__preparacion">${item.preparacion}</h5>
             <h5 class="item__precio">$${item.precio}</h5>
             <p class=" item__sabor">Sabor: ${item.sabor}</p>
             <p class=" item__presentacion">(${item.presentacion})</p>
             <input type="button" id="agregar${item.id}" value="Agregar" class="agregar">
           </div>
         </li>`
})

document.getElementById("productos").innerHTML = elementos




for (let i = 0; i < bases.length; i++) {
    descripcion = bases[i].id
    nombre = bases[i].preparacion
    precio = bases[i].precio
    sabor = bases[i].sabor
    presentacion = bases[i].presentacio

};

// ---------------------------------------------------------------
let direccion = document.getElementById("direccion");
let btnAgregar = document.getElementById("addDir");
let listadoPedido = document.getElementById("listadoPedido");


let listaPedido = new Array();


cargarLista();

function cargarLista() {

    for (let i = 0; i < listaPedido.length; i++) {

        let item = listaPedido[i];
        addDir(item);
    }
}

function addDir(item) {
    let li = document.createElement("li");
    li.textContent = item;
    li.addEventListener("click", () => {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = 'none';

        } else {
            li.style.textDecoration = 'line-through';
        }
    })

    listadoPedido.appendChild(li);
}
btnAgregar.addEventListener("click", () => {

    addDir(direccion.value);
    direccion.value = "";
})

direccion.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        addDir(direccion.value);
        direccion.value = "";

    }


})

// ---------------------------------------------------------------------------

let agregarProductosAlCarrito = document.querySelectorAll('.agregar')
agregarProductosAlCarrito.forEach((agregarBtn) => {
    agregarBtn.addEventListener('click', agregarAlCarrito);
});

let finalizarLaCompra = document.querySelector('.finalizarCompra');
finalizarLaCompra.addEventListener('click', terminarLaCompra);



function agregarAlCarrito(event) {
    let button = event.target;
    let item = button.closest('.item');
    
    let itemPreparacion = item.querySelector('.item__preparacion').textContent;
    let itemPrecio = item.querySelector('.item__precio').textContent;
    let itemImg = item.querySelector('.item__img').src;
    
    agregarAlListadoDeCarrito (itemImg, itemPrecio, itemPreparacion);
}

let resumenContainer = document.querySelector('.resumen__Container')

function agregarAlListadoDeCarrito (itemImg, itemPrecio, itemPreparacion) {

    let preparacionesRepetidas = resumenContainer.getElementsByClassName('resumenCompras__preparacion')
    for (let i=0; i< preparacionesRepetidas.length; i++) {
        if (preparacionesRepetidas[i].innerText === itemPreparacion) {
            cantidadItems = preparacionesRepetidas[i].parentElement.parentElement.parentElement.querySelector('.resumenCompras__cantidad__solicitada')   
            cantidadItems.value++;
            sumarCuenta();
            return;
        };
    }


    let resumenCarrito = document.createElement('div');
    let contenidoCarrito = `<div class="resumenContainer">
        <div class="row resumenCompras">
        <div class="resumenCompras__item  col-6">
        <div class="row">
        <img src=${itemImg} class="resumenCompras__img  col-6" alt="${itemPreparacion}">
        <h4 class="resumenCompras__preparacion  col-6">${itemPreparacion}</h4>
        </div>
        </div>
    
        <div class="col-2">
        <div class="resumenCompras__precio">
        <h4 class="resumenCompras__precio__unidad">${itemPrecio}</h4>
        </div>
        </div>
    
        <div class="recuadroCantidad col-4">
        <div class="resumenCompras__cantidad"> 
        <input class="resumenCompras__cantidad__solicitada" type="number" value="1">
        <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
        </div>
        
        </div>
        </div>
        `

    resumenCarrito.innerHTML = contenidoCarrito;
    resumenContainer.append(resumenCarrito)

    resumenCarrito
    .querySelector('.buttonDelete')
    .addEventListener('click', eliminarItem)

    resumenCarrito
    .querySelector('.resumenCompras__cantidad__solicitada')    
    .addEventListener('change', cambiarCantidad)

    sumarCuenta()
}


// -------------- sumar en el total --------------

function sumarCuenta() {
    let total = 0;
    let sumaFinal = document.querySelector('.sumaFinal');

    let itemsCarrito = document.querySelectorAll('.resumenContainer');

    itemsCarrito.forEach((itemCarrito) => {
       let itemPrecio = itemCarrito.querySelector('.resumenCompras__precio__unidad');
       let precioUnitario = Number(itemPrecio.textContent.replace('$', ''));

       let cantidadSolicitada = itemCarrito.querySelector('.resumenCompras__cantidad__solicitada');
       
       let cantidadTotal = Number(cantidadSolicitada.value);
       
       total = total + precioUnitario * cantidadTotal
     
    });

    sumaFinal.innerHTML = `
       $ ${total}`
}

function eliminarItem (event) {
    let eliminarItemPedido = event.target;
    eliminarItemPedido.closest('.resumenContainer').remove();
    sumarCuenta();
}

function cambiarCantidad (event) {
    let cambioDeCantidad = event.target
    if (cambioDeCantidad.value <= 0) {
        cambioDeCantidad.value = 1; 
    }
    sumarCuenta()
}

function terminarLaCompra () {
    resumenContainer.innerHTML = '';
    sumarCuenta()
}