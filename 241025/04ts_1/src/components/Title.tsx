import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Label = styled.h1``;

interface Props {
  label: string;
}

const Title = ({ label }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};

export default Title;
