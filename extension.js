const usuariosArray = [];

function AgregarUsuario()
{

    let dni = parseInt(document.getElementById("inputDNI").value);
    let telefono = parseInt(document.getElementById("inputTelefono").value);
    let nombre = document.getElementById("inputNombre").value;
    let email = document.getElementById("inputEmail").value;


    let newUser =  new Usuario(nombre,email,dni,telefono);
    usuariosArray.push(newUser) ;

    localStorage.setItem("Usuarios", JSON.stringify(usuariosArray));

    console.log(newUser);
    
    alertify.success('Usuario Agregado');
    MostrarUsuario();
    
    let mostrarSiHayUS = newUser==1 ? 'No hay usuarios' :  'Se cargo el usuario'
    
    console.log(mostrarSiHayUS);

    /*
    if(newUser!=0 || newUser==1)
    {

         console.log("Se agrego un usuario");

    }
    else{

         console.log("NO se agrego un usuario");

    }*/

} 




function MostrarUsuario()
{
    let string = "";
    for (let index = 0; index < usuariosArray.length; index++) {
        string = string   +"Nombre:"+ usuariosArray[index].nombre +" - email:"+ usuariosArray[index].email +" - dni:"+ usuariosArray[index].dni +" - telefono:" +usuariosArray[index].telefono +"  <br>  ";
        
    }

    document.getElementById("alumnosCargados").innerHTML = string;
}

function CargarLocalStorage()
{

    const arrayTest = JSON.parse(localStorage.getItem("Usuarios"));
    for (let index = 0; index < arrayTest.length; index++) {
        usuariosArray.push(new Usuario(arrayTest[index].telefono, arrayTest[index].nombre, arrayTest[index].email, arrayTest[index].dni));
    }

    MostrarUsuario()
}


const buttonAgregar = document.getElementById("CargarLocalStorage");
buttonAgregar.addEventListener("click", function() {
    CargarLocalStorage();
});

const buttonCargarLs = document.getElementById("AgregarUsuario");
buttonCargarLs.addEventListener("click", function() {
    AgregarUsuario();
});

const usuarioDos= {...usuariosArray};



/*
function datosDeAlumno() 
{
     const datosAlumno = {nombre: inputNombre.value,
                          telefono: inputTelefono.value,
                          email: inputEmail.value,
                          DNI: inputDNI.value};
    
    let str = JSON.stringify(datosAlumno);
    
    localStorage.setItem("datosAlumno", str);
}

function obtenerDatosAlumnos() 
{
    
    if (localStorage.getItem("datosAlumno1")) {
        const datosAlumno1 = JSON.parse(localStorage.getItem("datosAlumno1"))
                inputNombre.value = datosAlumno1.nombre
                inputTelefono.value = datosAlumno1.telefono
                inputEmail.value  = datosAlumno1.email
                inputDNI.value = datosAlumno1.DNI
    }    
    
}

obtenerDatosAlumnos(); 

*/


























/*let promedio=0;
let primerParametro;
let segundoParametro;
let  primerNota ;
let  segundaNota ;
*/
/*



//const ListadoDeAlumnosAprobados = document.querySelector("#ListadoDeAlumnosAprobados");

//ALUMNOS HABILES

function alumnosHabiles()
{
    ListadoDeAlumnos.innerHTML = "";
    for(elemento of alumnos)
    {
       
        const listAlum = document.createElement("li");
        listAlum.id = "1" + elemento;
        listAlum.innerText = elemento;
        listAlum.className = "primer_ul .collection-item";

        listAlum.addEventListener("click", ()=>{alumnosaprobados(`${listAlum.id}`)})

        ListadoDeAlumnos.append(listAlum);
       

    }
    console.log(ListadoDeAlumnos);
}

alumnosHabiles();


function alumnosaprobados(alumn)
{
    const elemntoPlus = document.getElementById(alumn);

    if(alumn !="")
    {

        const alumApr = document.createElement("li");
        alumApr.className = "collection-item";
        alumApr.innerText = elemntoPlus.innerText;
        alumApr.id = `${alumn}aprobado`;


        ListadoDeAlumnosAprobados.append(alumApr);

    }



}
*/


// CARGA DE NOTAS

/*

primerNota = parseInt(prompt("ingrese la primer nota: "));
segundaNota = parseInt(prompt("ingrese la segunda nota: "));

let resultado = calcularPromedioAlumno(primerNota,segundaNota);

    if(resultado >=6)
    {
        alert("El promedio es: " + resultado + " - APROBADO");
    }else{
        alert("El promedio es: " + resultado + " - DESAPROBADO");
    }


function calcularPromedioAlumno(primerParametro, segundoParametro)
{
    return (primerParametro + segundoParametro) / 2 ;
}

*/


//ARRAY

/*
const alumnosCargados=[{id:1, alumno:'Pepe Bolson'},
                       {id:2, alumno:'Tobi Rosales'},
                       {id:3, alumno:'Marco Rosalino'},
                       {id:4, alumno:'Jose Leon'},
                       {id:5, alumno:'Esteban Banquito'},
                       {id:6, alumno:'Martina Roger'}];


alert("Alumnos ya cargados");
alumnosCargados.forEach(function(alumnosCargados)
{

    alert(alumnosCargados.id+" = "+alumnosCargados.alumno);

});*/
