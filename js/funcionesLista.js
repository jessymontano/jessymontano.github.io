function cambioTexto() {
  var texto = document.getElementById("elemento").value;
  document.getElementById("push").value = `push(${texto})`;
  document.getElementById("unshift").value = `unshift(${texto})`;
  document.getElementById("indexOf").value = `indexOf(${texto})`;
  document.getElementById("includes").value = `includes(${texto})`;
  var numero = document.getElementById("posicion").value;
  document.getElementById("insertAt").value = `insertAt(${texto}, ${numero})`;
}

function push() {
  var lista = document.getElementById("tabla");
  var renglon = "";
  if (lista.hasChildNodes()) {
    renglon = lista.firstChild;
  } else {
    renglon = document.createElement("tr");
    lista.appendChild(renglon);
  }

  var celda = document.createElement("td");
  celda.style.border = "1px solid black";

  celda.textContent = document.getElementById("elemento").value;
  renglon.appendChild(celda);
}
