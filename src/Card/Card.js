import React from "react";
import "./Card.scss";

export default (props) => (
  <div className="card-container">
    <div className="card-container__card">
      </div>
    <p className="card-container__text">
        {props.text}
    </p>
  </div>
);
