(function (_0x105d23, _0x28f74c) {
  const _0x237f0e = _0x4f12,
    _0x165276 = _0x105d23();
  while (!![]) {
    try {
      const _0x26747d =
        -parseInt(_0x237f0e(0x10c)) / 0x1 +
        -parseInt(_0x237f0e(0xf6)) / 0x2 +
        -parseInt(_0x237f0e(0xff)) / 0x3 +
        (parseInt(_0x237f0e(0xf9)) / 0x4) * (-parseInt(_0x237f0e(0xfa)) / 0x5) +
        (-parseInt(_0x237f0e(0x102)) / 0x6) *
          (parseInt(_0x237f0e(0x110)) / 0x7) +
        parseInt(_0x237f0e(0xf2)) / 0x8 +
        parseInt(_0x237f0e(0x104)) / 0x9;
      if (_0x26747d === _0x28f74c) break;
      else _0x165276["push"](_0x165276["shift"]());
    } catch (_0x3ade5f) {
      _0x165276["push"](_0x165276["shift"]());
    }
  }
})(_0x1a21, 0x6e355);
var control = !![],
  contador = 0x0;
function changeTurn(_0x355a57) {
  const _0x1f63b2 = _0x4f12;
  (_0x355a57["disabled"] = !![]),
    (_0x355a57[_0x1f63b2(0xf4)] = control ? "O" : "X"),
    (document[_0x1f63b2(0x111)]("turno")[_0x1f63b2(0xfd)] = control
      ? _0x1f63b2(0x10a)
      : _0x1f63b2(0xf7)),
    (control = !control),
    verificar();
}
function verificar() {
  const _0x393f31 = _0x4f12;
  ++contador == 0x9 &&
    (document[_0x393f31(0x111)]("turno")[_0x393f31(0xfd)] = _0x393f31(0xfb));
  var _0x290e63 = document[_0x393f31(0x103)]("input[type=button]");
  if (
    _0x290e63[0x0][_0x393f31(0xf4)] == _0x290e63[0x1][_0x393f31(0xf4)] &&
    _0x290e63[0x1]["value"] == _0x290e63[0x2][_0x393f31(0xf4)] &&
    _0x290e63[0x0][_0x393f31(0xf4)] != ""
  ) {
    (document["getElementById"](_0x393f31(0x105))["innerHTML"] =
      _0x393f31(0xf3) + _0x290e63[0x0]["value"]),
      disableAll();
    const _0x1de085 = document[_0x393f31(0x100)](_0x393f31(0x109));
    (_0x1de085["textContent"] = _0x393f31(0x101)),
      document["head"][_0x393f31(0x10f)](_0x1de085);
  } else {
    if (
      _0x290e63[0x3][_0x393f31(0xf4)] == _0x290e63[0x4][_0x393f31(0xf4)] &&
      _0x290e63[0x4][_0x393f31(0xf4)] == _0x290e63[0x5][_0x393f31(0xf4)] &&
      _0x290e63[0x3][_0x393f31(0xf4)] != ""
    ) {
      (document[_0x393f31(0x111)](_0x393f31(0x105))[_0x393f31(0xfd)] =
        "Gana\x20" + _0x290e63[0x3][_0x393f31(0xf4)]),
        disableAll();
      const _0x2bd8a1 = document[_0x393f31(0x100)](_0x393f31(0x109));
      (_0x2bd8a1["textContent"] = _0x393f31(0xf8)),
        document["head"][_0x393f31(0x10f)](_0x2bd8a1);
    } else {
      if (
        _0x290e63[0x6][_0x393f31(0xf4)] == _0x290e63[0x7][_0x393f31(0xf4)] &&
        _0x290e63[0x7][_0x393f31(0xf4)] == _0x290e63[0x8][_0x393f31(0xf4)] &&
        _0x290e63[0x6]["value"] != ""
      ) {
        (document[_0x393f31(0x111)](_0x393f31(0x105))["innerHTML"] =
          _0x393f31(0xf3) + _0x290e63[0x6][_0x393f31(0xf4)]),
          disableAll();
        const _0x37d7e3 = document["createElement"](_0x393f31(0x109));
        (_0x37d7e3[_0x393f31(0x107)] = _0x393f31(0xfc)),
          document["head"][_0x393f31(0x10f)](_0x37d7e3);
      } else {
        if (
          _0x290e63[0x0]["value"] == _0x290e63[0x3][_0x393f31(0xf4)] &&
          _0x290e63[0x3][_0x393f31(0xf4)] == _0x290e63[0x6]["value"] &&
          _0x290e63[0x0]["value"] != ""
        ) {
          (document[_0x393f31(0x111)](_0x393f31(0x105))["innerHTML"] =
            _0x393f31(0xf3) + _0x290e63[0x0][_0x393f31(0xf4)]),
            disableAll();
          const _0x592db3 = document[_0x393f31(0x100)]("style");
          (_0x592db3[_0x393f31(0x107)] = _0x393f31(0x108)),
            document[_0x393f31(0x106)]["appendChild"](_0x592db3);
        } else {
          if (
            _0x290e63[0x1][_0x393f31(0xf4)] ==
              _0x290e63[0x4][_0x393f31(0xf4)] &&
            _0x290e63[0x4][_0x393f31(0xf4)] ==
              _0x290e63[0x7][_0x393f31(0xf4)] &&
            _0x290e63[0x1][_0x393f31(0xf4)] != ""
          ) {
            (document["getElementById"](_0x393f31(0x105))["innerHTML"] =
              _0x393f31(0xf3) + _0x290e63[0x1][_0x393f31(0xf4)]),
              disableAll();
            const _0x5ac651 = document[_0x393f31(0x100)](_0x393f31(0x109));
            (_0x5ac651[_0x393f31(0x107)] = _0x393f31(0xf5)),
              document[_0x393f31(0x106)][_0x393f31(0x10f)](_0x5ac651);
          } else {
            if (
              _0x290e63[0x2][_0x393f31(0xf4)] ==
                _0x290e63[0x5][_0x393f31(0xf4)] &&
              _0x290e63[0x5][_0x393f31(0xf4)] ==
                _0x290e63[0x8][_0x393f31(0xf4)] &&
              _0x290e63[0x2][_0x393f31(0xf4)] != ""
            ) {
              (document[_0x393f31(0x111)](_0x393f31(0x105))["innerHTML"] =
                _0x393f31(0xf3) + _0x290e63[0x2][_0x393f31(0xf4)]),
                disableAll();
              const _0x58b5b0 = document["createElement"](_0x393f31(0x109));
              (_0x58b5b0[_0x393f31(0x107)] = _0x393f31(0x10e)),
                document[_0x393f31(0x106)]["appendChild"](_0x58b5b0);
            } else {
              if (
                _0x290e63[0x0][_0x393f31(0xf4)] ==
                  _0x290e63[0x4][_0x393f31(0xf4)] &&
                _0x290e63[0x4][_0x393f31(0xf4)] == _0x290e63[0x8]["value"] &&
                _0x290e63[0x0][_0x393f31(0xf4)] != ""
              ) {
                (document["getElementById"](_0x393f31(0x105))[_0x393f31(0xfd)] =
                  _0x393f31(0xf3) + _0x290e63[0x6]["value"]),
                  disableAll();
                const _0x5159ab = document[_0x393f31(0x100)](_0x393f31(0x109));
                (_0x5159ab[_0x393f31(0x107)] = _0x393f31(0x10b)),
                  document[_0x393f31(0x106)][_0x393f31(0x10f)](_0x5159ab);
              } else {
                if (
                  _0x290e63[0x2][_0x393f31(0xf4)] == _0x290e63[0x4]["value"] &&
                  _0x290e63[0x4][_0x393f31(0xf4)] ==
                    _0x290e63[0x6][_0x393f31(0xf4)] &&
                  _0x290e63[0x2][_0x393f31(0xf4)] != ""
                ) {
                  (document["getElementById"]("turno")[_0x393f31(0xfd)] =
                    _0x393f31(0xf3) + _0x290e63[0x6]["value"]),
                    disableAll();
                  const _0x55ec7f = document[_0x393f31(0x100)](
                    _0x393f31(0x109)
                  );
                  (_0x55ec7f[_0x393f31(0x107)] =
                    "table::after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20calc(100%\x20*\x201.414);\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20calc(100%\x20*\x201.414);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x205px\x20solid\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20rotate(-45deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20top\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20}"),
                    document[_0x393f31(0x106)][_0x393f31(0x10f)](_0x55ec7f);
                }
              }
            }
          }
        }
      }
    }
  }
}
function _0x4f12(_0x53c980, _0x68cad) {
  const _0x1a21f3 = _0x1a21();
  return (
    (_0x4f12 = function (_0x4f12ea, _0x59a4f0) {
      _0x4f12ea = _0x4f12ea - 0xf2;
      let _0x53d2cf = _0x1a21f3[_0x4f12ea];
      return _0x53d2cf;
    }),
    _0x4f12(_0x53c980, _0x68cad)
  );
}
function _0x1a21() {
  const _0xb7ffec = [
    "td:nth-child(1)::after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:48%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:10px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20}",
    "style",
    "turno\x20X",
    "table::before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20calc(100%\x20*\x201.414);\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20calc(100%\x20*\x201.414);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x205px\x20solid\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20rotate(45deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20top\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20}",
    "554927vlhEZV",
    "input[type=button]",
    "td:nth-child(3)::after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:48%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20bottom:0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:10px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20}",
    "appendChild",
    "2569LkkXuo",
    "getElementById",
    "3293408FNQbyx",
    "Gana\x20",
    "value",
    "td:nth-child(2)::after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:48%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20bottom:0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:10px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20}",
    "751168TwTovE",
    "turno\x20O",
    "tr:nth-child(2)::after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2048%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x200%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20}",
    "213316XSkLuE",
    "5PrjQju",
    "EMPATE",
    "tr:nth-child(3)::after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2048%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:10px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20}",
    "innerHTML",
    "length",
    "1651011ozYgUW",
    "createElement",
    "tr:nth-child(1)::after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2048%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20}",
    "5934gPyzla",
    "querySelectorAll",
    "17431893FDeDZa",
    "turno",
    "head",
    "textContent",
  ];
  _0x1a21 = function () {
    return _0xb7ffec;
  };
  return _0x1a21();
}
function disableAll() {
  const _0x1dfd2a = _0x4f12;
  var _0x54deba = document["querySelectorAll"](_0x1dfd2a(0x10d));
  for (
    let _0x823864 = 0x0;
    _0x823864 < _0x54deba[_0x1dfd2a(0xfe)];
    _0x823864++
  ) {
    _0x54deba[_0x823864]["disabled"] = !![];
  }
}
