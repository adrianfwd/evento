
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
//-------------------------------LOGIN-----------------------------------------------------|w






// Selección de elementos del DOM 
const tarea = document.getElementById("tarea");
const prioridad = document.getElementById("prioridad");
const agregar = document.getElementById("agregar");
const contenedorTareas = document.getElementById("contenedorTareas");
const evento = document.getElementById("evento");
const fecha = document.getElementById("fecha");
const agregar2 = document.getElementById("agregar2");
const contenedorEventos = document.getElementById("contenedorEventos");






//-----------------------------------------------Agregar eventos de clic a los botones--------------------------------||
agregar.addEventListener("click", function () {
  agregarTarea(tarea.value, prioridad.value);
  tarea.value = "";
});

agregar2.addEventListener("click", function () {
  agregarEvento(evento.value, fecha.value);
  evento.value = "";
  fecha.value = "";
});
//-----------------------------------------------Agregar eventos de clic a los botones--------------------------------||






//------------------------------------------Función para agregar una tarea--------------------------|
function agregarTarea(tareaValue, prioridadValue) {
  let divPadre = document.createElement("div");
  divPadre.classList.add("notaTarea");

  let pTarea = document.createElement("p");
  pTarea.textContent = tareaValue;

  let pPrioridad = document.createElement("p");
  pPrioridad.textContent = "Prioridad: " + prioridadValue;

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
    // Crear elementos de edición
    let editDiv = document.createElement("div");

    let inputTarea = document.createElement("input");
    inputTarea.type = "text";
    inputTarea.value = pTarea.textContent;

    let selectPrioridad = document.createElement("select");
    ["Baja", "Media", "Alta"].forEach(prioridad => {
      let option = document.createElement("option");
      option.value = prioridad;
      option.textContent = prioridad;
      if (prioridad === prioridadValue) {
        option.selected = true;
      }
      selectPrioridad.appendChild(option);
    });

    let saveButton = document.createElement("button");
    saveButton.textContent = "Guardar";
    saveButton.class = "BTC";
    saveButton.addEventListener("click", function () {
      pTarea.textContent = inputTarea.value;
      pPrioridad.textContent = "Prioridad: " + selectPrioridad.value;
      divPadre.removeChild(editDiv);
      guardarTareasEnLocalStorage();
    });

    let cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancelar";
    cancelButton.class = "BTC";
    cancelButton.addEventListener("click", function () {
      divPadre.removeChild(editDiv);
    });

    editDiv.appendChild(inputTarea);
    editDiv.appendChild(selectPrioridad);
    editDiv.appendChild(saveButton);
    editDiv.appendChild(cancelButton);

    divPadre.appendChild(editDiv);
  });

  divPadre.appendChild(pTarea);
  divPadre.appendChild(pPrioridad);
  divPadre.appendChild(chebox);
  divPadre.appendChild(BtEliminar);
  divPadre.appendChild(BtEditar);
  contenedorTareas.appendChild(divPadre);

  guardarTareasEnLocalStorage();
}
//------------------------------------------Función para agregar una tarea--------------------------|


//----------------------------------------------Función para agregar un evento-----------------------------------||
function agregarEvento(eventoValue, fechaValue) {
  //if (eventoValue.trim() === "") return;

  let divPadre2 = document.createElement("div");
  divPadre2.classList.add("notaEvento");

  let pEvento = document.createElement("p");
  pEvento.textContent = eventoValue;

  let pFecha = document.createElement("p");
  pFecha.textContent = "Fecha: " + fechaValue;

  let BtEliminar2 = document.createElement("button");
  BtEliminar2.textContent = "Eliminar Evento";
  BtEliminar2.addEventListener("click", function () {
    contenedorEventos.removeChild(divPadre2);
    guardarEventosEnLocalStorage();
  });

  let BtEditar2 = document.createElement("button");
  BtEditar2.textContent = "Editar";
  BtEditar2.addEventListener("click", function () {
    // Crear elementos de edición
    let editDiv2 = document.createElement("div");

    let inputEvento = document.createElement("input");
    inputEvento.type = "text";
    inputEvento.value = pEvento.textContent;

    let inputFecha = document.createElement("input");
    inputFecha.type = "datetime-local";
    inputFecha.value = fechaValue;

    let saveButton2 = document.createElement("button");
    saveButton2.textContent = "Guardar";
    saveButton2.addEventListener("click", function () {
      pEvento.textContent = inputEvento.value;
      pFecha.textContent = "Fecha: " + inputFecha.value;
      divPadre2.removeChild(editDiv2);
      guardarEventosEnLocalStorage();
    });

    let cancelButton2 = document.createElement("button");
    cancelButton2.textContent = "Cancelar";
    cancelButton2.addEventListener("click", function () {
      divPadre2.removeChild(editDiv2);
    });

    editDiv2.appendChild(inputEvento);
    editDiv2.appendChild(inputFecha);
    editDiv2.appendChild(saveButton2);
    editDiv2.appendChild(cancelButton2);

    divPadre2.appendChild(editDiv2);
  });

  divPadre2.appendChild(pEvento);
  divPadre2.appendChild(pFecha);
  divPadre2.appendChild(BtEliminar2);
  divPadre2.appendChild(BtEditar2);

  contenedorEventos.appendChild(divPadre2);

  guardarEventosEnLocalStorage();
}
//----------------------------------------------Función para agregar un evento-----------------------------------||


//------------------------------------------- Funciones Local Storage-------------------------------------------------
// Función para guardar tareas en localStorage
function guardarTareasEnLocalStorage() {
  const tareas = [];
  contenedorTareas.querySelectorAll("div").forEach(function (div) {
    const tareaTexto = div.querySelector("p").textContent;
    const prioridadTexto = div.querySelectorAll("p")[1].textContent.replace("Prioridad: ", "");
    tareas.push({ texto: tareaTexto, prioridad: prioridadTexto });
  });
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Función para guardar eventos en localStorage
function guardarEventosEnLocalStorage() {
  const eventos = [];
  contenedorEventos.querySelectorAll("div").forEach(function (div) {
    const eventoTexto = div.querySelector("p").textContent;
    const fechaTexto = div.querySelectorAll("p")[1].textContent.replace("Fecha: ", "");
    eventos.push({ texto: eventoTexto, fecha: fechaTexto });
  });
  localStorage.setItem("eventos", JSON.stringify(eventos));
}

//------------------------------------------------------------
// Función para cargar tareas desde localStorage
function cargarTareasDesdeLocalStorage() {
  var tareasJSON = localStorage.getItem("tareas");
  var tareas = tareasJSON ? JSON.parse(tareasJSON) : [];
  tareas.forEach(function (tarea) {
    agregarTarea(tarea.texto, tarea.prioridad);
  });
}
//------------------------------------------------------------


// Función para cargar eventos desde localStorage
function cargarEventosDesdeLocalStorage() {
  const eventos = JSON.parse(localStorage.getItem("eventos"));
  if (eventos === "")
    eventos = [];
  eventos.forEach(evento => agregarEvento(evento.texto, evento.fecha));
}

// Cargar tareas y eventos al iniciar la página
cargarTareasDesdeLocalStorage();
cargarEventosDesdeLocalStorage();
