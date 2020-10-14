module Styles = {
  open Css;
  let card = style([
    padding(px(12)),
    borderWidth(px(2)),
    borderColor(hex("000")),
    borderStyle(solid),
  ])
};

type item = {
  image: string,
  nome: string,
  price: float
};

let item1 = {
  image: "",
  nome: "batata",
  price: 20.0
};

let items = [| item1, item1, item1, item1 |];

[@react.component]
let make = () => {
  <div>
    {
      items->Belt.Array.map(item => {
        <MyStyled className={Cn.(Styles.card + [%tw " bg-yellow-400"])}>
          <h3 className="title">item.nome->React.string</h3>
          <p>item.price->React.float</p>
        </MyStyled>
      })->React.array
    }
  </div>
};
