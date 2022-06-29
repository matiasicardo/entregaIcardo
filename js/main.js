import { productos  } from "./stock.js";



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
    console.log(productoN)
    const contenedorCarrito =  document.getElementById("carrito-contenedor")
       
    const renderProductoCarrito = ()=>{
        let producto = productos.find( producto => producto.nombre == productoN)
        console.log("push carrito:", producto)
        carrito.push(producto)
        console.log("push carrito despues:", carrito)

        let div = document.createElement ('div')
        div.classList.add('productoEnCarrito')  
        div.id = producto.id
        console.log(div.id)     
        div.innerHTML += `<p>${producto.nombre}</p>
                        <p>Tipo de soporte: ${producto.desc}</p>
                        <p>Precio: ${producto.precio}</p>
                        <button class="btn btn-primary" id=botonC${producto.id}>Eliminar</button>
        `
        div.addEventListener("click", () => {
            removerCarrito(`${div.id}`)
        })
        contenedorCarrito.appendChild(div)
        }
        console.log(carrito)
    
    renderProductoCarrito ()
}

const removerCarrito = (productoEliminado) => {
    // debugger
    console.log("producto agregado desde remover: ", carrito)
    const productoAremover = document.getElementById(`${productoEliminado}`)
    productoAremover.remove()
   // const contCarrito =  carrito.find( producto => producto.nombre == productoEliminado)
    const indice = carrito.indexOf(productoAremover.innerHTML)
    carrito.splice(indice, 1)
}



