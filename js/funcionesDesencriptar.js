function clearAll() {
  document.getElementById("originalMessage").value = "";
  document.getElementById("encryptedMessage").value = "";
}

function saveMessage() {
  if (document.getElementById("originalMessage").value.trim() != "") {
    var file = document.createElement("a");
    var content = document.getElementById("originalMessage").value;
    file.setAttribute(
      "href",
      "data:text/plain; charset=utf-8," + encodeURIComponent(content)
    );
    file.setAttribute("download", "originalmessage.txt");
    file.style.display = "none";
    document.body.appendChild(file);
    file.click();
    document.body.removeChild(file);
  } else {
    console.log("No hay ningun mensaje desencriptado");
  }
}

function load() {
  document.getElementById("keyFile").addEventListener("change", (event) => {
    var archivo = event.target.files[0];
    if (archivo) {
      var reader = new FileReader();
      reader.onload = (e) => {
        var contenido = e.target.result;
        var keys = contenido.split(",");
        var selects = document.getElementsByTagName("select");
        for (let i = 0, k = 0; i < selects.length; i++) {
          var option = document.createElement("option");
          option.value = keys[k];
          option.textContent = keys[k++];
          option.defaultSelected = true;
          selects[i].appendChild(option);
        }
      };

      reader.onerror = (e) => {
        console.log("error al abrir el archivo");
      };

      reader.readAsText(archivo);
    } else {
      console.log("seleccione un archivo");
    }
  });

  document
    .getElementById("encryptedFile")
    .addEventListener("change", (event) => {
      var archivo = event.target.files[0];
      if (archivo) {
        var reader = new FileReader();
        reader.onload = (e) => {
          var contenido = e.target.result;
          document.getElementById("encryptedMessage").value = contenido;
        };

        reader.onerror = (e) => {
          console.log("error al abrir el archivo");
        };

        reader.readAsText(archivo);
      } else {
        console.log("seleccione un archivo");
      }
    });
}

function decrypt() {
  var message = document.getElementById("encryptedMessage").value;
  var output = "",
    k = 1;
  for (let i = 0; i < message.length; i++) {
    var letter = message.charCodeAt(i);
    var displacement = parseInt(document.getElementById("key" + k++).value);
    if (/^[A-Z]$/.test(message[i])) {
      if (letter - displacement < 65) {
        output += String.fromCharCode(letter - displacement + 26);
      } else {
        output += String.fromCharCode(letter - displacement);
      }
    } else {
      output += String.fromCharCode(letter);
    }
    if (k == 7) k = 1;
  }
  document.getElementById("originalMessage").value = output.trim();
}
