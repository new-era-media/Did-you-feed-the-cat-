import React, { Component } from "react";
import "./App.scss";
import Card from "./Card/Card";

class App extends Component {
  state = {
    cards: [
      {
        filling: "фуагра",
        portions: "10 порций",
        gift: "Мышь в подарок",
        volume: "0.5",
        text: "Чего сидишь? Порадуй котэ, купи.",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <h2 className="App-title">Ты сегодня покормил кота?</h2>
        <div className="frame-cards">
          {this.state.cards.map((item, index) => {
            return <Card text={item.text} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
