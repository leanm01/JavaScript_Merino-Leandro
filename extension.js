let promedio=0;
let primerParametro;
let segundoParametro;
let  primerNota ;
let  segundaNota ;


let titulo = document.getElementById("h_uno");
titulo.innerText = "Bienvenidos";

let texto_uno = document.getElementById("h_uno_dos");
texto_uno.innerText = "esta pagina esta en proceso!!!";

const alumnos =['Pepe Bolson : 8', 'Tobi Rosales : 4', 'Marco Rosalino : 7', 'Jose Leon : 2', 'Esteban Banquito : 6', 'Martina Roger : 6'];
const ListadoDeAlumnos = document.getElementById("ListadoDeAlumnos");


const ListadoDeAlumnosAprobados = document.querySelector("#ListadoDeAlumnosAprobados");

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



// CARGA DE NOTAS

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
