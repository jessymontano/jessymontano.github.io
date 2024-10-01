var tarjetas = [
  "1.png",
  "1.png",
  "2.png",
  "2.png",
  "3.png",
  "3.png",
  "4.png",
  "4.png",
  "5.png",
  "5.png",
  "6.png",
  "6.png",
  "7.png",
  "7.png",
  "8.png",
  "8.png",
];

var imagen_temporal,
  esperando = false;
var contador = 0;

function cambiarImagen(imagen, indice) {
  imagen.src = `./img/${tarjetas[indice]}`;
  imagen.removeAttribute("onclick");
  if (!esperando) {
    imagen_temporal = imagen;
  } else {
    if (imagen_temporal.src == imagen.src) {
      setTimeout(() => {
        eliminarPar(imagen_temporal, imagen);
      }, 500);
    } else {
      setTimeout(() => {
        regresar(imagen_temporal, imagen);
      }, 500);
    }
  }
  esperando = !esperando;
}

function regresar(imagen1, imagen2) {
  imagen1.src = "./img/0.png";
  imagen2.src = "./img/0.png";
  imagen1.setAttribute("onclick", `cambiarImagen(this, ${imagen1.id})`);
  imagen2.setAttribute("onclick", `cambiarImagen(this, ${imagen2.id})`);
}

function eliminarPar(imagen1, imagen2) {
  imagen1.style.visibility = "hidden";
  imagen2.style.visibility = "hidden";
  imagen1.removeAttribute("onclick");
  imagen2.removeAttribute("onclick");
  contador++;
  if (contador != 8) {
    document.getElementById(
      "contador"
    ).innerHTML = `Pares Encontrados: ${contador}`;
  } else {
    document.getElementById(
      "contador"
    ).innerHTML = `Pares Encontrados: ${contador} ¡Ganaste!`;
  }
}

function revolver() {
  var j = 0;
  for (let i = 15; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    [tarjetas[i], tarjetas[j]] = [tarjetas[j], tarjetas[i]];
  }
}

function fondo() {
  var fondo = Math.floor(Math.random() * 3) + 1;
  document.getElementById(
    "tabla"
  ).style = `background-image: url("./img/fondo${fondo}.png");`;
}

function reiniciar() {
  location.reload();
}
