
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
    } else {
      alert('El usuario ya existe.');
    }
  }
});




//------------------------------------------------------------------------------------|
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
    }
  } else {
    alert('Por favor, ingresa un nombre de usuario y una contraseña.');
  }
});