function datosDeAlumno() 
{
    debugger
    
    const datosAlumno = {nombre: inputNombre.value,
                        telefono: inputTelefono.value,
                        email: inputEmail.value,
                        DNI: inputDNI.value} 
    
    let str = JSON.stringify(datosAlumno)
    
    localStorage.setItem("datosAlumno", str)
}

function obtenerDatosAlumnos() 
{
    
    if (localStorage.getItem("datosAlumno1")) {
        const datosAlumno1 = JSON.parse(localStorage.getItem("datosAlumno1"))
                inputNombre.value = datosAlumno1.nombre
                inputTelefono.value = datosAlumno1.telefono
                inputEmail.value  = datosAlumno1.email
    }    
    
}

obtenerDatosAlumnos(); 