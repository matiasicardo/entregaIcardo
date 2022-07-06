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
    const existe = carrito.some (producto => producto.nombre === productoN)
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

        localStorage.setItem('carrito',JSON.stringify(carrito))

        const boton = document.getElementById(`botonC${producto.id}`)
        boton.addEventListener('click', () => {
            removerCarrito(producto.nombre)
        })
    })
    precioTotal.innerText = carrito.reduce((acc,producto) => acc + producto.precio, 0) 

}

const precioTotal=document.getElementById('precioTotal')


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
    const mostrarProductos = (productos) => {
        //debugger
        const contenedorProductos = document.getElementById('producto-contenedor');

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

    }

    mostrarProductos(productos)

    const carrito = []


    const agregarAlCarrito = (productoN) => {
        guardoCarrito()
        const contenedorCarrito = document.getElementById("carrito-contenedor")

        const renderProductoCarrito = () => {
            let producto = productos.find(producto => producto.nombre == productoN)
            carrito.push(producto)
            preciosCarrito.push(producto.precio)
            console.log(producto.precio)


            producto.cantidad = 1

            let div = document.createElement('div')
            div.classList.add('productoEnCarrito')
            div.id = producto.id
            div.innerHTML += `<p>${producto.nombre}</p>
                        <p>Tipo de soporte: ${producto.desc}</p>
                        <p>Precio:$ ${producto.precio}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button class="btn btn-primary" id=botonC${producto.id}>Eliminar</button>
        `
            div.addEventListener("click", () => {
                removerCarrito(`${div.id}`)
            })
            contenedorCarrito.appendChild(div)
        }

        renderProductoCarrito()
    }
    const preciosCarrito = []

    let resultadoCarrito = 

const removerCarrito = (productoEliminado) => {
        // debugger
        console.log("producto agregado desde remover: ", carrito)
        const productoAremover = document.getElementById(`${productoEliminado}`)
        productoAremover.remove()
        // const contCarrito =  carrito.find( producto => producto.nombre == productoEliminado)
        const indice = carrito.indexOf(productoAremover.innerHTML)
        carrito.splice(indice, 1)
    }


    function guardoCarrito() {
        if (carrito.length > 0)
            localStorage.setItem("carrito", JSON.stringify(carrito))
    }

    function recuperoCarrito() {
        let miCarrito
        if (miCarrito = JSON.parse(localStorage.getItem("carrito"))) {
            miCarrito.forEach(soporte => {
                carrito.push(soporte)
            });

        }
    }

    recuperoCarrito()*/
