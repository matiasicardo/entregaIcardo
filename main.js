import { productos  } from "./stock.js";
//import { carrito } from "./stock.js";


const mostrarProductos = (productos) => {
    //debugger
    const contenedorProductos = document.getElementById('producto-contenedor');

    productos.forEach( producto => {
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
    boton.addEventListener('click', ()=>{
        //debugger
        agregarAlCarrito(producto.nombre)
        alert(`Se agrego ${producto.nombre}`)
    })

    } )

}

mostrarProductos(productos)

const carrito = []

function agregarAlCarrito (productoId) {
    carrito.push(productoId)
    const contenedorProductos = document.getElementById('carrito-contenedor');

    productos.forEach( producto => {
        const li = document.createElement('li')
        li.classList.add('productoEnCarrito')
        li.innerHTML += `<li>
                <lu>Modelo: ${producto.nombre}</td>
                <lu>Tipo de soporte:${producto.desc}</td>
                <lu>Precio: $${producto.precio}</td>
                <button class="btn btn-primary" id=boton${producto.id}>Eliminar</button>
        </li>`
        li.id = producto.id + "enCarrito"
        li.addEventListener("dblclick", () => {
            removerDelCarrito (`${li.id}`)
        })
    
    contenedorProductos.appendChild(li)
})
}

//function removerDelCarrituo(productoId) {
//    const productoAremover = document.getElementById('carrito-contenedor');
//        productoAremover.remove()
//}

