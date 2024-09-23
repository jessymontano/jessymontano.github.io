var elemento = 0;
function capturar() {
  //agregamos los elementos de forma horizontal
  var indexRow = document.getElementById("renglonIndice");
  var index = (indexRow.insertCell(-1).innerHTML = `[${elemento}]`);
  var dataRow = document.getElementById("renglonDato");
  var data = (dataRow.insertCell(-1).innerHTML =
    document.getElementById("elementoInput").value);

  //agregamos columnas de forma vertical
  var tabla = document.getElementById("tablaVertical");
  var verticalRow = tabla.insertRow(-1);
  var cell1 = (verticalRow.insertCell(0).innerHTML = `[${elemento}]`);
  var cell2 = (verticalRow.insertCell(1).innerHTML =
    document.getElementById("elementoInput").value);

  if (elemento > 8) {
    document.getElementById("capturarBoton").disabled = true;
    document.getElementById("elementoInput").disabled = true;
    document.getElementById("generarBoton").disabled = false;
  } else {
    document.getElementById(
      "arreglo"
    ).innerHTML = `Capture el elemento [${++elemento}]`;
    aleatorios();
  }
}

function aleatorios() {
  document.getElementById("elementoInput").value = Math.floor(
    Math.random() * 1000
  );
}

function reiniciar() {
  elemento = 0;
  document.getElementById("arreglo").innerHTML = `Capture el elemento [0]`;
  document.getElementById("capturarBoton").disabled = false;
  document.getElementById("elementoInput").disabled = false;
  document.getElementById("generarBoton").disabled = true;
  document.getElementById("renglonIndice").innerHTML = "";
  document.getElementById("renglonDato").innerHTML = "";
  document.getElementById("renglonIndice2").innerHTML = "";
  document.getElementById("renglonDato2").innerHTML = "";
  document.getElementById("renglonIndice3").innerHTML = "";
  document.getElementById("renglonDato3").innerHTML = "";
  document.getElementById("tablaVertical").innerHTML = "";
  document.getElementById("tablaVertical2").innerHTML = "";
  document.getElementById("tablaVertical3").innerHTML = "";
  document.getElementById("resultados").innerHTML = "";
  aleatorios();
}

function calcular() {
  document.getElementById("tablaVertical2").innerHTML = "";
  document.getElementById("tablaVertical3").innerHTML = "";
  var cells = document.getElementById("renglonDato").children;
  var min = parseInt(cells[0].innerHTML);
  var max = parseInt(cells[0].innerHTML);
  var sum = 0;
  var avg = 0;
  for (let i = 0; i < cells.length; i++) {
    if (min > parseInt(cells[i].innerHTML)) {
      min = parseInt(cells[i].innerHTML);
    }
    if (max < parseInt(cells[i].innerHTML)) {
      max = parseInt(cells[i].innerHTML);
    }
    sum += parseInt(cells[i].innerHTML);
  }
  avg = sum / cells.length;

  //se copia la tabla horizontal
  document.getElementById("tablaHorizontal2").innerHTML =
    document.getElementById("tablaHorizontal").innerHTML;
  document.getElementById("tablaHorizontal2").rows[0].id = "renglonIndice2";
  document.getElementById("tablaHorizontal2").rows[1].id = "renglonDato2";
  cells = document.getElementById("renglonDato2").children;
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells.length; j++) {
      if (parseInt(cells[i].innerHTML) < parseInt(cells[j].innerHTML)) {
        let temp = cells[i].innerHTML;
        cells[i].innerHTML = cells[j].innerHTML;
        cells[j].innerHTML = temp;
      }
    }
  }

  document.getElementById("tablaHorizontal3").innerHTML =
    document.getElementById("tablaHorizontal").innerHTML;
  document.getElementById("tablaHorizontal3").rows[0].id = "renglonIndice3";
  document.getElementById("tablaHorizontal3").rows[1].id = "renglonDato3";
  cells = document.getElementById("renglonDato3").children;
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells.length; j++) {
      if (parseInt(cells[i].innerHTML) > parseInt(cells[j].innerHTML)) {
        let temp = cells[i].innerHTML;
        cells[i].innerHTML = cells[j].innerHTML;
        cells[j].innerHTML = temp;
      }
    }
  }

  for (let i = 0; i < cells.length; i++) {
    var fila = document.getElementById("tablaVertical2");
    var nuevaFila = fila.insertRow(-1);
    var valor = (nuevaFila.insertCell(0).innerHTML = `[${i}]`);
    var valor1 = (nuevaFila.insertCell(1).innerHTML = cells[9 - i].innerHTML);

    fila = document.getElementById("tablaVertical3");
    nuevaFila = fila.insertRow(-1);
    valor = nuevaFila.insertCell(0).innerHTML = `[${i}]`;
    valor1 = nuevaFila.insertCell(1).innerHTML = cells[i].innerHTML;
  }

  //vertical

  var medium =
    (parseInt(cells[4].innerHTML) + parseInt(cells[5].innerHTML)) / 2;

  var valores = document.getElementById("tablaHorizontal");
  var frecuencias = {};
  var moda = [];
  var maximaFrecuencia = 0;

  for (let i = 0; i < valores.rows[1].cells.length; i++) {
    var elementoModa = valores.rows[1].cells[i].innerHTML;

    frecuencias[elementoModa] = (frecuencias[elementoModa] || 0) + 1;
    if (frecuencias[elementoModa] > maximaFrecuencia) {
      maximaFrecuencia = frecuencias[elementoModa];
      moda = [elementoModa];
    } else if (frecuencias[elementoModa] === maximaFrecuencia) {
      if (!moda.includes(elementoModa)) {
        moda.push(elementoModa);
      }
    }
  }

  var modaFinal = "";
  if (maximaFrecuencia === 1) {
    modaFinal = "No hay moda";
  } else {
    modaFinal = `Las modas son: ${moda.join(", ")}`;
  }

  document.getElementById(
    "resultados"
  ).innerHTML = `El valor menor es ${min} <br> el valor mayor es ${max} <br> la suma es ${sum} <br> el promedio es ${avg} <br> la mediana es ${medium} <br> ${modaFinal}`;
}
