import React from "react";
import ButtonStyle from "./buttonStyle";

const Button = (props) => {
  return (
    <ButtonStyle>
      <button className="button" onClick={props.onClick}>
        {props.children}
      </button>
    </ButtonStyle>
  );
};

export default Button;
