let promedio=0;
let primerParametro;
let segundoParametro;
let  primerNota ;
let  segundaNota ;

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

/*let i;
let ingreseNombre;
let Edad;


if(ingreseNombre =="" && Edad <=0)
{
    
    alert("No se ha ingresado el nombre",ingreseNombre);
    alert("No Se ha ingresado la edad",Edad);

}else
{

    for(i=0;i<2;i++)
    {
    
         ingreseNombre = prompt("Ingrese su nombre: ");
         Edad = prompt("Ingrese su edad: ");
    }

    alert("se ha ingresado el nombre" +ingreseNombre );
    alert("Se ha ingresado la edad" +Edad );
    confirm("Bienvenido!!");

}*/

