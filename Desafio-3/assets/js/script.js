// Pedir al usuario los datos de cuatro variables
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edad = prompt("Ingrese su edad:");
let ciudad = prompt("Ingrese su ciudad:");

// Guardar esos datos en un arreglo
let datos = [nombre, apellido, edad, ciudad];

// Seleccionar el div donde se mostrarán los resultados guardados
document.getElementById("result").innerHTML = `
<p><strong>Nombre:</strong> ${nombre}</p>
<p><strong>Apellido:</strong> ${apellido}</p>
<p><strong>Edad:</strong> ${edad}</p>
<p><strong>Ciudad:</strong> ${ciudad}</p>
`;
