import React from "react";
import styled from "styled-components";

const ButtonItem = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 30px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
  ${({ type }) =>
    type === "positive"
      ? `background: #64c964; color: #fff;`
      : type === "negative"
      ? `background: #fd565f; color: #fff;`
      : `background: #ccc; color: #000;`};
`;

const Button = ({ text, type, onClick }) => {
  return (
    <ButtonItem type={type} onClick={onClick}>
      {text || "button"}
    </ButtonItem>
  );
};

export default Button;
