import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  border-radius: 4px;
  background: rgba(255, 87, 34, 1);
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 87, 34, 0.8);
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  onClick: () => void;
}

const Button = ({ onClick, label }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
