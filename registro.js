
//   ---------------------------------------
alert("Regístrate en la aplicación");

let a = prompt("Crea un usuario");
let b = prompt("Crea una contraseña");
alert('Registro exitoso');
alert('Inicia sesión con tu usuario y contraseña');

let e, f;

do {
  e = prompt("Usuario");
  f = prompt("Contraseña");

  if (e === a && f === b) {
    alert("Datos correctos");
    alert("Bienvenido");
  } else {
    alert("Usuario o contraseña incorrectos");
  }
} while (e !== a || f !== b);
