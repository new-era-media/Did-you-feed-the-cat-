import React from "react";
import "./Card.scss";

const Card = (props) => {
  const disabled = props.enable ? "card-container" : "card-container disable";

  const description = props.enable
    ? props.text
    : `Печалька, с ${props.filling} закончилось`;

  const style = {};
  props.enable ? (style.color = "white") : (style.color = "yellow");

  const elColor =
    props.elementColor === "blue"
      ? { backgroundImage: `url(${require("../assets/image/bg_card-1.png")})` }
      : { backgroundImage: `url(${require("../assets/image/bg_card-2.png")})` };

  const bgColor =
    props.elementColor === "blue"
      ? { backgroundColor: "#1898D9" }
      : { backgroundColor: "#DB1668" };

  return (
    <div className={disabled} data-name={props.dataname}>
      <div className="card-container__card card" onClick={props.addHendler}  style={elColor}>
        <p className="card-container__card_preTitle">
          Сказачное заморское яство
        </p>
        <h2 className="card-container__card_title">Нямушка</h2>
        <p className="card-container__card_filling">с {props.filling}</p>
        <p className="card-container__card_portion">{props.portions}</p>
        <p className="card-container__card_gift">{props.gift}</p>
        <p className="card-container__card_feedback">{props.feedback}</p>
        <div className="card-container__card_circle" style={bgColor}>
          <p className="card_circle-number">{props.volume}</p>
          <p className="card_circle-unit">кг</p>
        </div>
      </div>
      <p className="card-container__text" style={style}>
        {description}
      </p>
    </div>
  );
};

export default Card;
