// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Cn = require("re-classnames/src/Cn.bs.js");
var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var MyStyled = require("./MyStyled.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

var card = Curry._1(Css.style, {
      hd: Css.padding(Css.px(12)),
      tl: {
        hd: Css.borderWidth(Css.px(2)),
        tl: {
          hd: Css.borderColor(Css.hex("000")),
          tl: {
            hd: Css.borderStyle(Css.solid),
            tl: /* [] */0
          }
        }
      }
    });

var Styles = {
  card: card
};

var item1 = {
  image: "",
  nome: "batata",
  price: 20.0
};

var items = [
  item1,
  item1,
  item1,
  item1
];

function App(Props) {
  return React.createElement("div", undefined, Belt_Array.map(items, (function (item) {
                    return React.createElement(MyStyled.make, {
                                children: null,
                                className: Cn.$plus(card, " bg-yellow-400")
                              }, React.createElement("h3", {
                                    className: "title"
                                  }, item.nome), React.createElement("p", undefined, item.price));
                  })));
}

var make = App;

exports.Styles = Styles;
exports.item1 = item1;
exports.items = items;
exports.make = make;
/* card Not a pure module */
