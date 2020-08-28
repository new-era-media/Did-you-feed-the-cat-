import React, { Component } from "react";
import "./App.scss";
import Card from "./Card/Card";

class App extends Component {
  shop = (e, el) => {
    if (!e.target.closest(".disable")) {
      let shoppingСart = this.state.shoppingСart;
      if (this.state.shoppingСart.indexOf(el) === -1) {
        let shoppingСart = this.state.shoppingСart;
        shoppingСart.push(el);
      } else {
        shoppingСart = shoppingСart.filter((word) => word !== el);
      }
      this.setState({
        shoppingСart,
      });
    }
  };

  state = {
    cards: [
      {
        dataname: "Fuagra",
        filling: "фуа-гра",
        portions: (
          <span>
            <strong>10</strong> порций
          </span>
        ),
        gift: "мышь в подарок",
        volume: "0,5",
        text: (
          <span>
            Чего сидишь? Порадуй котэ,
            <span className="Pay" onClick={(e) => {
                  this.shop(e, 'Fuagra');
                }}>
              {" "}
              купи.
            </span>
          </span>
        ),
        enable: true,
        elementColor: "blue",
      },
      {
        dataname: "Fish",
        filling: "рыбой",
        portions: (
          <span>
            <strong>40</strong> порций
          </span>
        ),
        gift: (
          <span>
            <strong>2</strong> мыши в подарок
          </span>
        ),
        volume: "2",
        text: "Головы щучьи с чесноком, да свежайшая сёмгушка.",
        enable: true,
        elementColor: "pink",
      },
      {
        dataname: "Сhicken",
        filling: "курой",
        portions: (
          <span>
            <strong>100</strong> порций
          </span>
        ),
        gift: (
          <span>
            <strong>5</strong> мышей в подарок
          </span>
        ),
        volume: "5",
        text: "Чего сидишь? Порадуй котэ, купи.",
        feedback: "Заказчик доволен",
        enable: false,
      },
    ],
    shoppingСart: [],
  };

  render() {
    return (
      <div className="App">
        <p
          style={{
            color: "white",
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: "99",
          }}
        >
          {this.state.shoppingСart.join(" ")}
        </p>
        <h2 className="App-title">Ты сегодня покормил кота?</h2>
        <div className="App-frame-cards">
          {this.state.cards.map((item, index) => {
            return (
              <Card
                addHendler={(e) => {
                  this.shop(e, this.state.cards[index].dataname);
                }}
                dataname={item.dataname}
                filling={item.filling}
                portions={item.portions}
                gift={item.gift}
                volume={item.volume}
                text={item.text}
                feedback={item.feedback}
                enable={item.enable}
                elementColor={item.elementColor}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
