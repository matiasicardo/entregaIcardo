document.addEventListener("submit", (e)=>{
    e.preventDefault()
    guardarDatosUser()
})

function guardarDatosUser () {
    debugger
    const datosUser = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        email: inputEmail.value,
    }
    let str = JSON.stringify(datosUser)
        localStorage.setItem("DatosUser", str)
}

function recuperoDatosUser () {
    if (localStorage.getItem("datosUser")) {
        const datosUser = JSON.parse(localStorage.setItem("DatosUser"))
            inputNombre.value=datosUser.nombre
            inputApellido.value=datosUser.apellido
            inputEmail.value=datosUser.email

    }
}
recuperoDatosUser ()