const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'Noi puede dejar el usuairo en blanco');
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password no debe ingresar en blanco.');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 no debe ngresar en blanco');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords no coinciden');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}








// Obtener el formulario y los campos
const formulario = document.getElementById("mi-formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contrasena = document.getElementById("contrasena");
const enviar = document.getElementById("enviar");

// Validar el formulario al hacer clic en el botón "Enviar"
enviar.addEventListener("click", function(event) {
  // Prevenir que se envíe el formulario si hay errores
  event.preventDefault();

  // Validar el nombre
  if (nombre.value === "") {
    alert("Por favor, ingrese su nombre");
    return;
  }

  // Validar el email
  if (email.value === "") {
    alert("Por favor, ingrese su email");
    return;
  } else if (!validarEmail(email.value)) {
    alert("Por favor, ingrese un email válido");
    return;
  }

  // Validar la contraseña
  if (contrasena.value === "") {
    alert("Por favor, ingrese su contraseña");
    return;
  } else if (contrasena.value.length < 8) {
    alert("Por favor, ingrese una contraseña de al menos 8 caracteres");
    return;
  }

  // Si todo está validado, enviar el formulario
  formulario.submit();
});

// Función para validar el email utilizando una expresión regular
function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

