document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const regUsername = document.getElementById('reg-username').value;
  const regPassword = document.getElementById('reg-password').value;


  if (regUsername && regPassword) {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      let userExists = users.some(user => user.username === regUsername);

      if (!userExists) {
          users.push({ username: regUsername, password: regPassword });
          localStorage.setItem('users', JSON.stringify(users));
          alert('Usuario registrado exitosamente.');
          document.getElementById('register-container').style.display = 'none';
          document.getElementById('login-container').style.display = 'block';
      } else {
          alert('El usuario ya existe.');
      }
  }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;


  if (authenticateUser(username, password)) {
      document.getElementById('login-container').style.display = 'none';
      document.getElementById('secure-content').style.display = 'block';
  } else {
      alert('Usuario o contraseña incorrectos.');
  }
});

document.getElementById('logout-button').addEventListener('click', function() {
  document.getElementById('secure-content').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
});

function authenticateUser(username, password) {

  let users = JSON.parse(localStorage.getItem('users')) || [];
  return users.some(user => user.username === username && user.password === password);
}


window.onload = function() {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.length > 0) {
      document.getElementById('register-container').style.display = 'none';
      document.getElementById('login-container').style.display = 'block';
  }
};
