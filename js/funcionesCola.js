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
  document.getElementById(
    "enqueue"
  ).value = `enqueue(${palabrasAleatorias[indice]})`;
}

function cambioTexto() {
  var texto = document.getElementById("elemento").value;
  document.getElementById("enqueue").value = `enqueue(${texto})`;
  document.getElementById("find").value = `find(${texto})`;
}

function enqueue() {
  var queue = document.getElementById("tabla");
  var renglon = "";
  if (queue.hasChildNodes()) {
    renglon = queue.firstChild;
  } else {
    renglon = document.createElement("tr");
    queue.appendChild(renglon);
  }

  var celda = document.createElement("td");
  celda.style.border = "1px solid black";
  celda.textContent = document.getElementById("elemento").value;
  renglon.appendChild(celda);

  var inicio = Array.from(queue.rows).find(
    (r) => r.cells[0].textContent === "Inicio"
  );
  if (!inicio) {
    var renglon2 = document.createElement("tr");
    var celda2 = document.createElement("td");
    celda2.textContent = "Inicio";
    renglon2.appendChild(celda2);
    queue.appendChild(renglon2);
  }
  document.getElementById("elemento").focus();
  aleatorias();
  document.getElementById(
    "front"
  ).value = `front(${queue.firstChild.firstChild.textContent})`;
}

function dequeue() {
  var queue = document.getElementById("tabla");
  if (queue.rows.length > 0) {
    var renglon = queue.rows[0];
    if (renglon.cells.length > 0) {
      renglon.deleteCell(0);
      if (renglon.cells.length === 0) {
        if (queue.rows.length > 1) {
          queue.deleteRow(1);
        }
        document.getElementById("front").value = "front()";
      }
    }
    document.getElementById(
      "front"
    ).value = `front(${queue.firstChild.firstChild.textContent})`;
  }

  if (queue.rows.length > 1) {
    var renglon2 = queue.rows[1];
    if (renglon2.cells.length > 0) {
      renglon2.cells[0].textContent = "Inicio";
    }
  }
}

function clear() {
  document.getElementById("tabla").innerHTML = "";
  document.getElementById("mensaje").innerHTML = "Se hizo clear en la cola";
  document.getElementById("front").value = "front()";
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
      "No hay elementos en la cola";
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
