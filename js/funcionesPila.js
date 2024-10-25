const palabrasAleatorias = [
  "sol",
  "libro",
  "café",
  "nube",
  "guitarra",
  "ventana",
  "camino",
  "sombra",
  "fuego",
  "montaña",
  "río",
  "luz",
  "jardín",
  "arena",
  "puente",
];

function aleatorias() {
  var indice = Math.floor(Math.random() * palabrasAleatorias.length);
  document.getElementById("elemento").value = palabrasAleatorias[indice];
  document.getElementById("push").value = `push(${palabrasAleatorias[indice]})`;
  document.getElementById("find").value = `find(${palabrasAleatorias[indice]})`;
}

function cambioTexto() {
  var texto = document.getElementById("elemento").value;
  document.getElementById("push").value = `push(${texto})`;
  document.getElementById("find").value = `find(${texto})`;
}

function push() {
  if (document.getElementById("elemento").value.trim() != "") {
    document.getElementById("mensaje").innerHTML = "";

    var renglon = document.createElement("tr");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    celda2.style.border = "1px solid black";
    celda1.textContent = "tope->";
    celda2.textContent = document.getElementById("elemento").value;
    renglon.appendChild(celda1);
    renglon.appendChild(celda2);
    var rt = document.getElementById("tabla");

    if (rt.hasChildNodes()) {
      document.getElementById("tabla").firstChild.firstChild.textContent = "";
    }
    rt.insertBefore(renglon, rt.children[0]);
  } else {
    document.getElementById("mensaje").innerHTML =
      "No se aceptan cadenas vacías";
  }
}

function pop() {
  var rt = document.getElementById("tabla");
  if (rt.hasChildNodes()) {
    document.getElementById(
      "message"
    ).innerHTML = `Se eliminó del tope ${rt.firstChild.childNodes[1].textContent}`;
    rt.removeChild(rt.firstChild);
    document.getElementById("tabla").firstChild.firstChild.textContent =
      "tope->";
  } else {
    document.getElementById("mensaje").innerHTML =
      "No hay elementos para hacer el pop()";
  }
}

function peek() {
  var rt = document.getElementById("tabla");
  if (rt.hasChildNodes()) {
    document.getElementById(
      "mensaje"
    ).innerHTML = `En el tope de la pila se encuentra ${rt.firstChild.childNodes[1].textContent}`;
    document.getElementById("tabla").firstChild.firstChild.textContent =
      "tope->";
  } else {
    document.getElementById("mensaje").innerHTML =
      "No hay elementos en la pila";
  }
}

function clear() {
  document.getElementById("tabla").textContent = "";
  document.getElementById("mensaje").innerHTML = "Se hizo clear en la pila";
}

function find() {
  var rt = document.getElementById("tabla");
  var control = false;
  if (rt.hasChildNodes()) {
    for (let i = 0; i < rt.childNodes.length; i++) {
      let nodo = rt.childNodes[i].childNodes[1].textContent;
      if (nodo == document.getElementById("elemento").value) {
        document.getElementById("mensaje").innerHTML = "Si se encuentra";
        control = true;
        break;
      }
    }
    if (!control) {
      document.getElementById("mensaje").innerHTML = "No se encuentra";
    }
  } else {
    document.getElementById("mensaje").innerHTML =
      "No hay elementos en la pila";
  }
}

function isEmpty() {
  var rt = document.getElementById("tabla");
  if (rt.hasChildNodes()) {
    document.getElementById("mensaje").innerHTML = "true";
  } else {
    document.getElementById("mensaje").innerHTML = "false";
  }
}
