let i;
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

}

