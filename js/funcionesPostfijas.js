var i = 0;

function pasoAPaso() {
  var expresion = document.getElementById("exp").value.split(" ");
  if (Number.isInteger(Number(expresion[i]))) {
    document.getElementById(
      "pasos"
    ).innerHTML += `Paso: ${expresion[i]} es un número, va al tope de la pila <br>`;
    push(expresion[i]);
  } else if (expresion[i] == "*") {
    var operando1 = pop();
    var operando2 = pop();
    var multiplicacion = operando2 * operando1;
    push(multiplicacion);
    document.getElementById(
      "pasos"
    ).innerHTML += `Paso: ${operando2} * ${operando1} = ${
      operando2 * operando1
    } <br>`;
  } else if (expresion[i] == "+") {
    var operando1 = pop();
    var operando2 = pop();
    var suma = operando2 + operando1;
    push(suma);
    document.getElementById(
      "pasos"
    ).innerHTML += `Paso: ${operando2} + ${operando1} = ${suma} <br>`;
  } else if (expresion[i] == "-") {
    var operando1 = pop();
    var operando2 = pop();
    var resta = operando2 - operando1;
    push(resta);
    document.getElementById(
      "pasos"
    ).innerHTML += `Paso: ${operando2} - ${operando1} = ${resta} <br>`;
  } else if (expresion[i] == "/") {
    var operando1 = pop();
    var operando2 = pop();
    var division = operando2 / operando1;
    push(division);
    document.getElementById(
      "pasos"
    ).innerHTML += `Paso: ${operando2} / ${operando1} = ${division} <br>`;
  } else {
    document.getElementById(
      "pasos"
    ).innerHTML += `Paso: ${expresion[i]} no es un elemento válido en una expresión postfija <br>`;
    document.getElementById("botonEval").disabled = true;
    document.getElementById("botonPasos").disabled = true;
    document.getElementById("exp").disabled = true;
  }
  i++;
  if (i == expresion.length) {
    document.getElementById("botonEval").disabled = true;
    document.getElementById("botonPasos").disabled = true;
    document.getElementById("exp").disabled = true;
    var tabla = document.getElementById("tabla");
    if (tabla.hasChildNodes()) {
      if (tabla.childNodes.length == 1) {
        document.getElementById(
          "resultado"
        ).innerHTML = `Resultado: ${tabla.firstChild.textContent}`;
      } else {
        document.getElementById(
          "resultado"
        ).innerHTML = `Resultado: hay un error en la expresión`;
      }
    }
  }
}

function reiniciar() {
  document.getElementById("botonEval").disabled = false;
  document.getElementById("botonPasos").disabled = false;
  document.getElementById("exp").disabled = false;
  document.getElementById("exp").value = "3 4 * 2 5 + - 4 * 2 /";
  i = 0;
  document.getElementById("tabla").textContent = null;
  document.getElementById("pasos").innerHTML = "Pasos: <br>";
  document.getElementById("resultado").innerHTML = "Resultado: ";
}

function push(operando) {
  var renglon = document.createElement("tr");
  var celda1 = document.createElement("td");
  celda1.textContent = operando;
  renglon.appendChild(celda1);
  celda1.style.border = "1px solid black";
  var tabla = document.getElementById("tabla");
  tabla.insertBefore(renglon, tabla.children[0]);
}

function pop() {
  var tabla = document.getElementById("tabla");
  if (tabla.hasChildNodes()) {
    var contenido = tabla.firstChild.textContent;
    tabla.removeChild(tabla.firstChild);
    return contenido;
  } else {
    document.getElementById(
      "resultado"
    ).innerHTML += `Error en la expresión postfija`;
    document.getElementById("botonEval").disabled = true;
    document.getElementById("botonPasos").disabled = true;
    document.getElementById("exp").disabled = true;
  }
}

function evaluar() {
  var expresion = document.getElementById("exp").value.split(" ");
  for (var i = 0; i < expresion.length; i++) {
    if (Number.isInteger(Number(expresion[i]))) {
      document.getElementById(
        "pasos"
      ).innerHTML += `Paso: ${expresion[i]} es un número, va al tope de la pila <br>`;
      push(expresion[i]);
    } else if (expresion[i] == "*") {
      var operando1 = pop();
      var operando2 = pop();
      var multiplicacion = operando2 * operando1;
      push(multiplicacion);
      document.getElementById(
        "pasos"
      ).innerHTML += `Paso: ${operando2} * ${operando1} = ${
        operando2 * operando1
      } <br>`;
    } else if (expresion[i] == "+") {
      var operando1 = pop();
      var operando2 = pop();
      var suma = operando2 + operando1;
      push(suma);
      document.getElementById(
        "pasos"
      ).innerHTML += `Paso: ${operando2} + ${operando1} = ${suma} <br>`;
    } else if (expresion[i] == "-") {
      var operando1 = pop();
      var operando2 = pop();
      var resta = operando2 - operando1;
      push(resta);
      document.getElementById(
        "pasos"
      ).innerHTML += `Paso: ${operando2} - ${operando1} = ${resta} <br>`;
    } else if (expresion[i] == "/") {
      var operando1 = pop();
      var operando2 = pop();
      var division = operando2 / operando1;
      push(division);
      document.getElementById(
        "pasos"
      ).innerHTML += `Paso: ${operando2} / ${operando1} = ${division} <br>`;
    } else {
      document.getElementById(
        "pasos"
      ).innerHTML += `Paso: ${expresion[i]} no es un elemento válido en una expresión postfija <br>`;
      document.getElementById("botonEval").disabled = true;
      document.getElementById("botonPasos").disabled = true;
      document.getElementById("exp").disabled = true;
    }
  }
  document.getElementById("botonEval").disabled = true;
  document.getElementById("botonPasos").disabled = true;
  document.getElementById("exp").disabled = true;
  var tabla = document.getElementById("tabla");
  if (tabla.hasChildNodes()) {
    if (tabla.childNodes.length == 1) {
      document.getElementById(
        "resultado"
      ).innerHTML = `Resultado: ${tabla.firstChild.textContent}`;
    } else {
      document.getElementById(
        "resultado"
      ).innerHTML = `Resultado: hay un error en la expresión`;
    }
  }
}
