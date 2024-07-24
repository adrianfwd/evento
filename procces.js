
//-------------------------------REGISTER-----------------------------------------------------|
document.getElementById('register-form').addEventListener('submit', function (event) {
  event.preventDefault();
  var regUsername = document.getElementById('reg-username').value;
  var regPassword = document.getElementById('reg-password').value;

  if (regUsername && regPassword) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    let userExists = users.some(user => user.username === regUsername);

    if (!userExists) {
      users.push({ username: regUsername, password: regPassword });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Usuario registrado exitosamente.');
      window.location.href = "login.html";
    } else {
      alert('El usuario ya existe.');
    }
  }
});
//-------------------------------REGISTER-----------------------------------------------------|



//-------------------------------LOGIN-----------------------------------------------------|
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  var regUsername = document.getElementById('username').value;
  var regPassword = document.getElementById('password').value;

  if (regUsername && regPassword) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    let userExist = users.some(user => user.username === regUsername && user.password === regPassword);

    if (userExist) {
      alert('El usuario ha iniciado sesión exitosamente.');
      console.log("Usuario autenticado correctamente");
      window.location.href = "index.html";
    } else {
      alert('Usuario o contraseña incorrectos.');
      window.location.href = "register.html";
    }
  } else {
    alert('Por favor, ingresa un nombre de usuario y una contraseña.');
  }
});
//-------------------------------LOGIN-----------------------------------------------------|

  function generarEvento(){
    
  }





//----------------------------------------------------------TAREAS----------------------------|



const tarea = document.getElementById("tarea");
const agregar = document.getElementById("agregar");
const contenedorTareas = document.getElementById("contenedorTareas");

agregar.addEventListener("click", function () {

  let tareaValue = tarea.value;
  let pTarea = document.createElement("p");
  pTarea.textContent = tareaValue;
  pTarea.style.backgroundColor = "blue";

  let chebox = document.createElement("INPUT");
  chebox.setAttribute("type", "checkbox");

  let BtEliminar = document.createElement("button");
  BtEliminar.textContent = "eliminar";
  BtEliminar.addEventListener("click", function () {
    contenedorTareas.removeChild(divPadre);
  });

  let BtEditar = document.createElement("button");
  BtEditar.textContent = "editar";
  BtEditar.addEventListener("click", function () {
    let nuevoTexto = prompt("Editar tarea:", pTarea.textContent);
    if (nuevoTexto !== null) {
      pTarea.textContent = nuevoTexto;
    }
  });

  let divPadre = document.createElement("div");
  divPadre.appendChild(pTarea);
  divPadre.appendChild(BtEliminar);
  divPadre.appendChild(BtEditar);
  divPadre.appendChild(chebox);
  contenedorTareas.appendChild(divPadre);
  tarea.value = "";
});


//-------------------------------------------------------------EVENTOS-------------------------------------------------//

/*practica adrian, 23/7/2024*/
const evento = document.getElementById("evento");// cree la varial constante, document (hace referencia el html),getElementById(selecciona el elemento por el id).
const agregar2 = document.getElementById("agregar2");//misma descripcion de arriba.
const contenedorEventos = document.getElementById("contenedorEventos");//misma descripcion de arriba.

agregar2.addEventListener("click", function () { // se agrega la funcion que agrega  desde el js , investigar el otro metodo(llamar la funcion desde el html Adrian).


  // Obtengo el valor del campo de entrada.
  let eventoValue = evento.value;


  // Crear elemento parrafo.
  let pEvento = document.createElement("p");
  pEvento.textContent = eventoValue; // Usar textContent para establecer el texto del parrafo.
  pEvento.style.backgroundColor = "black";





  //boton de checkbox para marcar las tareas
  let chebox2 = document.createElement("INPUT");
  chebox2.setAttribute("type", "checkbox");





  // Crear boton de eliminar, se estructura desde el vento addEventListener para llamar a la funcion, probar llamar la funcion desde el html.
  let BtEliminar2 = document.createElement("button");
  BtEliminar2.textContent = "eliminar Evento";
  BtEliminar2.addEventListener("click", function () {
    contenedorEventos.removeChild(divPadre2); // Eliminar el contenedor de la tarea.
    // el metodo child elimina los datos en el contenedor al ser los hijos del tareaContainer
  });


  //Crear boton de editar, probar otro metodo para la llamada de funcion.
  let BtEditar2 = document.createElement("button");
  BtEditar2.textContent = "editar";
  BtEditar2.addEventListener("click", function () {
    let nuevoTexto2 = prompt("Editar tarea:", pEvento.textContent);
    if (nuevoTexto2 !== null) {
      pEvento.textContent = nuevoEvento;
    }
  });


  // Crear contenedor (div) para agrupar la tarea y botones
  let divPadre2 = document.createElement("div");
  divPadre2.appendChild(pEvento); // Agregar parrafo al contenedor
  divPadre2.appendChild(BtEliminar2); // Agrega boton eliminar al contenedor
  divPadre2.appendChild(BtEditar2); // Agrega boton editar al contenedor
  divPadre2.appendChild(chebox2);// Agrega el checkbox


  contenedorEventos.appendChild(divPadre2); // Agregar el contenedor al contenedor principal de tareas


  // Limpiar campo de entrada despues de agregar la tarea
  evento.value = "";

  //recordatorio tratar de cambiar el metodo de llamado de las funciones por medio del html.
});
// investigar acerca del DOM parece ser una estructura de datos dinamica
// metodo usados
