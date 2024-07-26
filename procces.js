
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





//----------------------------------------------------------TAREAS----------------------------|

// Selección de elementos del DOM
const tarea = document.getElementById("tarea");
const agregar = document.getElementById("agregar");
const contenedorTareas = document.getElementById("contenedorTareas");
const evento = document.getElementById("evento");
const agregar2 = document.getElementById("agregar2");
const contenedorEventos = document.getElementById("contenedorEventos");

// Función para agregar una tarea
function agregarTarea(tareaValue) {
  if (tareaValue.trim() === "") return;

  let pTarea = document.createElement("p");
  pTarea.textContent = tareaValue;
  pTarea.style.backgroundColor = "blue";

  let chebox = document.createElement("input");
  chebox.setAttribute("type", "checkbox");

  let BtEliminar = document.createElement("button");
  BtEliminar.textContent = "Eliminar";
  BtEliminar.addEventListener("click", function () {
    contenedorTareas.removeChild(divPadre);
    guardarTareasEnLocalStorage();
  });

  let BtEditar = document.createElement("button");
  BtEditar.textContent = "Editar";
  BtEditar.addEventListener("click", function () {
    let nuevoTexto = prompt("Editar tarea:", pTarea.textContent);
    if (nuevoTexto !== null) {
      pTarea.textContent = nuevoTexto;
      guardarTareasEnLocalStorage();
    }
  });

  let divPadre = document.createElement("div");
  divPadre.appendChild(pTarea);
  divPadre.appendChild(BtEliminar);
  divPadre.appendChild(BtEditar);
  divPadre.appendChild(chebox);
  contenedorTareas.appendChild(divPadre);

  guardarTareasEnLocalStorage();
}

// Función para agregar un evento
function agregarEvento(eventoValue) {
  if (eventoValue.trim() === "") return;

  let pEvento = document.createElement("p");
  pEvento.textContent = eventoValue;
  pEvento.style.backgroundColor = "black";

  let chebox2 = document.createElement("input");
  chebox2.setAttribute("type", "checkbox");

  let BtEliminar2 = document.createElement("button");
  BtEliminar2.textContent = "Eliminar Evento";
  BtEliminar2.addEventListener("click", function () {
    contenedorEventos.removeChild(divPadre2);
    guardarEventosEnLocalStorage();
  });

  let BtEditar2 = document.createElement("button");
  BtEditar2.textContent = "Editar";
  BtEditar2.addEventListener("click", function () {
    let nuevoTexto2 = prompt("Editar evento:", pEvento.textContent);
    if (nuevoTexto2 !== null) {
      pEvento.textContent = nuevoTexto2;
      guardarEventosEnLocalStorage();
    }
  });

  let divPadre2 = document.createElement("div");
  divPadre2.appendChild(pEvento);
  divPadre2.appendChild(BtEliminar2);
  divPadre2.appendChild(BtEditar2);
  divPadre2.appendChild(chebox2);
  contenedorEventos.appendChild(divPadre2);

  guardarEventosEnLocalStorage();
}

// Función para guardar tareas en localStorage
function guardarTareasEnLocalStorage() {
  const tareas = [];
  contenedorTareas.querySelectorAll("div").forEach(function(div) {
    const tareaTexto = div.querySelector("p").textContent;
    tareas.push(tareaTexto);
  });
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Función para guardar eventos en localStorage
function guardarEventosEnLocalStorage() {
  const eventos = [];
  contenedorEventos.querySelectorAll("div").forEach(function(div) {
    const eventoTexto = div.querySelector("p").textContent;
    eventos.push(eventoTexto);
  });
  localStorage.setItem("eventos", JSON.stringify(eventos));
}



//------------------------------------------------------------
// Función para cargar tareas desde localStorage
function cargarTareasDesdeLocalStorage() {

  var tareasJSON = localStorage.getItem("tareas");
  var tareas = tareasJSON ? JSON.parse(tareasJSON) : [];
  tareas.forEach(function(tarea) {
    agregarTarea(tarea);
  });
}
//------------------------------------------------------------


// Función para cargar eventos desde localStorage
function cargarEventosDesdeLocalStorage() {
  const eventos = JSON.parse(localStorage.getItem("eventos") || "[]");
  eventos.forEach(evento => agregarEvento(evento));
}

// Agregar eventos de clic a los botones
agregar.addEventListener("click", function () {
  agregarTarea(tarea.value);
  tarea.value = "";
});

agregar2.addEventListener("click", function () {
  agregarEvento(evento.value);
  evento.value = "";
});

// Cargar tareas y eventos al iniciar la página
cargarTareasDesdeLocalStorage();
cargarEventosDesdeLocalStorage();
