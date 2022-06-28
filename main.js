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
        agregarAlCarrito(producto.nombre)
        alert(`Se agrego ${producto.nombre}`)
    })

    } )

}

mostrarProductos(productos)

const carrito = []

const agregarAlCarrito = (productoN) => {
    const contenedorCarrito =  document.getElementById("carrito-contenedor")
       
    const renderProductoCarrito = ()=>{
        let producto = productos.find( producto => producto.nombre == productoN)
        carrito.push(producto)

        let div = document.createElement ('div')
        div.classList.add('productoEnCarrito')        
        div.innerHTML += `<p>${producto.nombre}</p>
                        <p>Tipo de soporte: ${producto.desc}</p>
                        <p>Precio: ${producto.precio}</p>
                        <button class="btn btn-primary">Eliminar</button>
        `
        contenedorCarrito.appendChild(div)
        }
    
    renderProductoCarrito ()
}


function removerDelCarrituo(productoN) {
    const productoAremover = document.getElementById('carrito-contenedor');
        productoAremover.remove()
}

