import { productos } from "./stock.js";

let carrito = [];

/*document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito.JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})*/

const contenedorProductos = document.getElementById('producto-contenedor');
const contenedorCarrito = document.getElementById('carrito-contenedor');

productos.forEach(producto => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:  ${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>`

    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.nombre)
        alert(`Se agrego ${producto.nombre}`)
    })
})

const agregarAlCarrito = (productoN) => {
    const existe = carrito.some(producto => producto.nombre === productoN)
    if (existe) {
        const producto = carrito.map(producto => {
            if (producto.nombre === productoN) {
                producto.cantidad++
            }
        })
    } else {
        guardoCarrito()
        let producto = productos.find(producto => producto.nombre === productoN)
        carrito.push(producto)
        console.log(carrito)
    }
    actualizarCarrito()
}

const removerCarrito = (productoN) => {
    const producto = carrito.find((producto) => producto.nombre === productoN)
    const indice = carrito.indexOf(producto)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

function guardoCarrito() {
    if (carrito.length > 0)
        localStorage.setItem("carrito", JSON.stringify(carrito))
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        /*div.id = producto.id*/
        div.innerHTML += `<p>${producto.nombre}</p>
                <p>Tipo de soporte: ${producto.desc}</p>
                <p>Precio:$ ${producto.precio}</p>
                <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                <button class="btn btn-primary" id=botonC${producto.id}>Comprar</button>
                `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

        const boton = document.getElementById(`botonC${producto.id}`)
        boton.addEventListener('click', () => {
            removerCarrito(producto.nombre)
        })
    })
    precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.precio, 0)

}

const precioTotal = document.getElementById('precioTotal')


Swal.fire({
    html: 'Por favor acepte nuestros terminos y condiciones',
    confirmButtonText: 'Acepto',
    icon: 'info',
    padding: '1rem',
    grow: 'row',
    backdrop: true,
    toast: true,
    position: 'bottom',
    allowOutsideClick: false,
    allowEscapeKey: false,
    stopKeydownPropagation: false,

    showConfirmButton: true,
    showCancelButton: false,
    showCloseButton: false,
    closeButtonAriaLabel: 'Cerrar este alerta',
})

/*
 fetch(URL)
        .then((response)=> response.json())
        .then( (data)=> {
            console.table(data)
        })
  */
const URL = `js/soportes.json`

const obtenerContenido = (URL) => {
    let cardsAmostrar = ""
    debugger
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            for (contenido of data)
                  cardsAmostrar += retornoCardContenido(contenido)
               contenidoDOM.innerHTML = cardsAmostrar
        })
};
obtenerContenido(URL)

const retornoCardContenido = (contenido) => {
       debugger
   const {nombre, desc, precio,img, id} = contenido
   return `<div class="card" style="width: 18rem;">
   <img src="${img}" class="card-img-top" alt="...">
   <div class="card-body">
       <h5 class="card-title">${nombre}</h5>
       <p class="card-text">Descripción:  ${desc}</p>
       <p class="card-text">Precio:$ ${precio}</p>
       <button class="btn btn-primary" id=boton${id}>Comprar</button>
   </div>
</div>`
};