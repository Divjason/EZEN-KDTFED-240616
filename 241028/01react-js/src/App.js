import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color};
`;

const Input = styled.input`
  background-color: ${(props) => (props.required ? "tomato" : "white")};
`;

// const Box = styled.div`
//   background: ${({ bgColor }) => bgColor};
//   width: 100px;
//   height: 100px;
// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// const Btn = styled.button`
//   background: tomato;
//   color: #fff;
//   border: none;
//   border-radius: 8px;
//   padding: 8px;
// `;

const rotationAnimation = keyframes`
from {
  transform: rotate(0deg);
  border-radius: 0px;
} to {
  transform: rotate(360deg);
  border-radius: 100px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 1s linear infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const App = () => {
  return (
    <Container>
      <Title>Hello World!</Title>
      {/* <Box bgColor="teal" />
      <Circle bgColor="tomato" /> */}
      {/* <Btn>Log in</Btn>
      <Btn as="a" href="#">
        Log out
      </Btn> */}
      <Input required={true} />
      <Input />
      {/* <Box>
        <Emoji>😍</Emoji>
      </Box>
      <Emoji>✋</Emoji> */}
    </Container>
  );
};

export default App;
