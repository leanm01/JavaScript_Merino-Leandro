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
    alertify.success('Se cargo el usuario');
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



//EMAILJS
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_om2ryyf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Email';
      alertify.success('Mail enviado');
    }, (err) => {
      btn.value = 'Enviar Email';
      alert(JSON.stringify(err));
    });
});



























