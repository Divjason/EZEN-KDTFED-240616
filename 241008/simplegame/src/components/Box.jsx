import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  border-radius: 8px;
  &.win {
    border: 3px solid yellowgreen;
    color: yellowgreen;
  }
  &.lose {
    border: 3px solid crimson;
    color: crimson;
  }
  &.tie {
    border: 3px solid dodgerblue;
    color: dodgerblue;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
`;

const Result = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const Box = ({ title, item, result }) => {
  if (title === "Computer" && result !== "tie" && result !== "") {
    result = result === "win" ? "lose" : "win";
  }
  return (
    <Wrapper className={result}>
      <Title>{title}</Title>
      {item === null ? (
        <div>너와 나의 승자는?</div>
      ) : (
        <Img src={item && item.img} alt={"title"} />
      )}

      <Result>{result}</Result>
    </Wrapper>
  );
};

export default Box;
