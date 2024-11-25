function optionKey() {
  var selects = document.getElementsByTagName("select");
  for (let i = 0; i < selects.length; i++) {
    for (let j = 0; j < 26; j++) {
      var option = document.createElement("option");
      option.value = j;
      option.textContent = j;
      selects[i].appendChild(option);
    }
  }
}

function example1() {
  document.getElementById("originalMessage").value =
    `Soy multitarea: puedo procastinar, preocuparme y comer al mismo tiempo`.toUpperCase();
  document.getElementById("key1").value = 16;
  document.getElementById("key2").value = 12;
  document.getElementById("key3").value = 21;
  document.getElementById("key4").value = 6;
  document.getElementById("key5").value = 2;
  document.getElementById("key6").value = 1;
}

function example2() {
  document.getElementById("originalMessage").value =
    ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper ipsum ac rhoncus porttitor. Morbi malesuada velit at tortor viverra, vitae viverra augue faucibus. Maecenas bibendum justo in posuere consectetur. Donec hendrerit posuere justo, vel gravida neque ultricies et. Etiam viverra ultricies vehicula. Maecenas velit augue, porta ut viverra a, venenatis malesuada dolor. Nunc ut dignissim ligula. Donec vel massa vitae elit porttitor luctus. Nullam ac posuere ex, ultricies scelerisque sapien. Donec ac viverra odio. Fusce egestas ullamcorper neque, eu sodales augue mattis quis.
Vivamus luctus nulla id quam faucibus maximus. Maecenas vitae gravida mi, nec vestibulum justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam pretium felis ut ex tempus laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id fermentum odio, eget semper ligula. Sed gravida diam id neque condimentum varius. Nam vel turpis at eros tincidunt fringilla ac id leo. Vivamus blandit justo in nunc mattis, vel iaculis arcu aliquam.`.toUpperCase();
  document.getElementById("key1").value = 16;
  document.getElementById("key2").value = 12;
  document.getElementById("key3").value = 21;
  document.getElementById("key4").value = 6;
  document.getElementById("key5").value = 2;
  document.getElementById("key6").value = 1;
}

function clearAll() {
  document.getElementById("originalMessage").value = "";
  document.getElementById("encryptedMessage").value = "";
  document.getElementById("key1").value = 1;
  document.getElementById("key2").value = 1;
  document.getElementById("key3").value = 1;
  document.getElementById("key4").value = 1;
  document.getElementById("key5").value = 1;
  document.getElementById("key6").value = 1;
}

function allows(event) {
  var keycode = event.keyCode || event.which;
  var typeTool = String.fromCharCode(keycode);
  if (
    !/^[A-Z]$/.test(typeTool) &&
    keycode != 13 &&
    keycode != 32 &&
    keycode != 8
  ) {
    event.preventDefault();
  }
}

function capital(textArea) {
  textArea.value = textArea.value.toUpperCase();
}

function encrypt() {
  var message = document.getElementById("originalMessage").value;
  var output = "",
    k = 1;
  for (let i = 0; i < message.length; i++) {
    var letter = message.charCodeAt(i);
    var displacement = parseInt(document.getElementById("key" + k++).value);
    if (/^[A-Z]$/.test(message[i])) {
      if (letter + displacement > 90) {
        output += String.fromCharCode(letter + displacement - 26);
      } else {
        output += String.fromCharCode(letter + displacement);
      }
    } else {
      output += String.fromCharCode(letter);
    }
    if (k == 7) k = 1;
  }
  document.getElementById("encryptedMessage").value = output.trim();
}

function saveKey() {
  var file = document.createElement("a");
  var content =
    document.getElementById("key1").value +
    "," +
    document.getElementById("key2").value +
    "," +
    document.getElementById("key3").value +
    "," +
    document.getElementById("key4").value +
    "," +
    document.getElementById("key5").value +
    "," +
    document.getElementById("key6").value;
  file.setAttribute(
    "href",
    "data:text/plain; charset=utf-8," + encodeURIComponent(content)
  );
  file.setAttribute("download", "key.txt");
  file.style.display = "none";
  document.body.appendChild(file);
  file.click();
  document.body.removeChild(file);
}

function saveMessage() {
  if (document.getElementById("encryptedMessage").value.trim() != "") {
    var file = document.createElement("a");
    var content = document.getElementById("encryptedMessage").value;
    file.setAttribute(
      "href",
      "data:text/plain; charset=utf-8," + encodeURIComponent(content)
    );
    file.setAttribute("download", "encryptedmessage.txt");
    file.style.display = "none";
    document.body.appendChild(file);
    file.click();
    document.body.removeChild(file);
  } else {
    console.log("No hay ningun mensaje encriptado");
  }
}
