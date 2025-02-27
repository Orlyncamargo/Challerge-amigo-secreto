/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.
*/
//Se crea una matriz
let amigos = [];

/*Creamos una función para ingresar los nombres y con una alerta
informar al usuario que no se permite campo vacío
*/
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
  
    if (nombreAmigo.trim() === "") {
      alert("No se permite campo vacío ¡ingrese un nombre!");
    } else {
      amigos.push(nombreAmigo);
      document.querySelector("#amigo").value = "";
      mostrarListaAmigo();
    }
  }

  //Podemos visualizar los nombres a participar con li
  function mostrarListaAmigo() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
  
    for (let index = 0; index < amigos.length; index++) {
      const element = amigos[index];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = element;
      listaAmigos.appendChild(listaHTML);
    }
  }

  //funcion que realiza el sorteo
  function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
      alert("Por favor, inserte un nombre antes de sortear");
    } else {
      let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
      let resultadoHTML = document.querySelector("#resultado");
      resultadoHTML.innerHTML = amigos[indiceAmigo];
    }
  }