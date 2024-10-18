var _0x5caa8d = _0x4b8c;
function _0x4b8c(_0x5f2752, _0x27e0a5) {
  var _0x1a0180 = _0x1a01();
  return (
    (_0x4b8c = function (_0x4b8c42, _0x2cfb6b) {
      _0x4b8c42 = _0x4b8c42 - 0x1a8;
      var _0x33c026 = _0x1a0180[_0x4b8c42];
      return _0x33c026;
    }),
    _0x4b8c(_0x5f2752, _0x27e0a5)
  );
}
(function (_0x4321e5, _0x4f2cfc) {
  var _0x25ac32 = _0x4b8c,
    _0x61e186 = _0x4321e5();
  while (!![]) {
    try {
      var _0x19afa0 =
        parseInt(_0x25ac32(0x1be)) / 0x1 +
        -parseInt(_0x25ac32(0x1b0)) / 0x2 +
        (-parseInt(_0x25ac32(0x1ac)) / 0x3) *
          (parseInt(_0x25ac32(0x1b1)) / 0x4) +
        (-parseInt(_0x25ac32(0x1b7)) / 0x5) *
          (-parseInt(_0x25ac32(0x1b3)) / 0x6) +
        parseInt(_0x25ac32(0x1c4)) / 0x7 +
        (-parseInt(_0x25ac32(0x1b9)) / 0x8) *
          (parseInt(_0x25ac32(0x1c3)) / 0x9) +
        -parseInt(_0x25ac32(0x1c7)) / 0xa;
      if (_0x19afa0 === _0x4f2cfc) break;
      else _0x61e186["push"](_0x61e186["shift"]());
    } catch (_0x492891) {
      _0x61e186["push"](_0x61e186["shift"]());
    }
  }
})(_0x1a01, 0x4038e);
var tarjetas = [
    "1.png",
    _0x5caa8d(0x1c8),
    _0x5caa8d(0x1b5),
    "2.png",
    "3.png",
    _0x5caa8d(0x1c5),
    _0x5caa8d(0x1ca),
    _0x5caa8d(0x1ca),
    _0x5caa8d(0x1b4),
    _0x5caa8d(0x1b4),
    "6.png",
    "6.png",
    _0x5caa8d(0x1c0),
    _0x5caa8d(0x1c0),
    _0x5caa8d(0x1aa),
    _0x5caa8d(0x1aa),
  ],
  imagen_temporal,
  esperando = ![],
  contador = 0x0;
function cambiarImagen(_0x3cae11, _0x52b11c) {
  var _0x102f3c = _0x5caa8d;
  (_0x3cae11[_0x102f3c(0x1b8)] = _0x102f3c(0x1c2) + tarjetas[_0x52b11c]),
    _0x3cae11[_0x102f3c(0x1a8)]("onclick"),
    !esperando
      ? (imagen_temporal = _0x3cae11)
      : imagen_temporal[_0x102f3c(0x1b8)] == _0x3cae11[_0x102f3c(0x1b8)]
      ? setTimeout(() => {
          eliminarPar(imagen_temporal, _0x3cae11);
        }, 0x1f4)
      : setTimeout(() => {
          regresar(imagen_temporal, _0x3cae11);
        }, 0x1f4),
    (esperando = !esperando);
}
function _0x1a01() {
  var _0x39cce1 = [
    "style",
    "cambiarImagen(this,\x20",
    "./img/0.png",
    "getElementById",
    "399556pAPTWX",
    "random",
    "7.png",
    "innerHTML",
    "./img/",
    "2420937zbdZou",
    "2204986nUhGTe",
    "3.png",
    "floor",
    "4583300SUXhzQ",
    "1.png",
    "onclick",
    "4.png",
    "background-image:\x20url(\x22./img/fondo",
    "hidden",
    "removeAttribute",
    "reload",
    "8.png",
    "visibility",
    "1185xJtcRR",
    "\x20¡Ganaste!",
    "tabla",
    "setAttribute",
    "113214YnqIEO",
    "1948HKoSLm",
    "contador",
    "629754LrQoYK",
    "5.png",
    "2.png",
    ".png\x22);",
    "25Fnsyhl",
    "src",
    "8fRfHGE",
  ];
  _0x1a01 = function () {
    return _0x39cce1;
  };
  return _0x1a01();
}
function regresar(_0x5229f4, _0x2f8da5) {
  var _0x5b6696 = _0x5caa8d;
  (_0x5229f4[_0x5b6696(0x1b8)] = _0x5b6696(0x1bc)),
    (_0x2f8da5[_0x5b6696(0x1b8)] = _0x5b6696(0x1bc)),
    _0x5229f4[_0x5b6696(0x1af)](
      "onclick",
      "cambiarImagen(this,\x20" + _0x5229f4["id"] + ")"
    ),
    _0x2f8da5["setAttribute"](
      _0x5b6696(0x1c9),
      _0x5b6696(0x1bb) + _0x2f8da5["id"] + ")"
    );
}
function eliminarPar(_0x5274a5, _0x1f6268) {
  var _0x1b4a62 = _0x5caa8d;
  (_0x5274a5[_0x1b4a62(0x1ba)][_0x1b4a62(0x1ab)] = _0x1b4a62(0x1cc)),
    (_0x1f6268[_0x1b4a62(0x1ba)][_0x1b4a62(0x1ab)] = _0x1b4a62(0x1cc)),
    _0x5274a5["removeAttribute"](_0x1b4a62(0x1c9)),
    _0x1f6268[_0x1b4a62(0x1a8)](_0x1b4a62(0x1c9)),
    contador++,
    contador != 0x8
      ? (document["getElementById"](_0x1b4a62(0x1b2))[_0x1b4a62(0x1c1)] =
          "Pares\x20Encontrados:\x20" + contador)
      : (document[_0x1b4a62(0x1bd)](_0x1b4a62(0x1b2))[_0x1b4a62(0x1c1)] =
          "Pares\x20Encontrados:\x20" + contador + _0x1b4a62(0x1ad));
}
function revolver() {
  var _0x5d5522 = _0x5caa8d,
    _0x3a4c30 = 0x0;
  for (let _0x593580 = 0xf; _0x593580 > 0x0; _0x593580--) {
    (_0x3a4c30 = Math["floor"](Math[_0x5d5522(0x1bf)]() * (_0x593580 + 0x1))),
      ([tarjetas[_0x593580], tarjetas[_0x3a4c30]] = [
        tarjetas[_0x3a4c30],
        tarjetas[_0x593580],
      ]);
  }
}
function fondo() {
  var _0x4edd00 = _0x5caa8d,
    _0xb871c5 = Math[_0x4edd00(0x1c6)](Math["random"]() * 0x3) + 0x1;
  document[_0x4edd00(0x1bd)](_0x4edd00(0x1ae))[_0x4edd00(0x1ba)] =
    _0x4edd00(0x1cb) + _0xb871c5 + _0x4edd00(0x1b6);
}
function reiniciar() {
  var _0x2ed03e = _0x5caa8d;
  location[_0x2ed03e(0x1a9)]();
}
