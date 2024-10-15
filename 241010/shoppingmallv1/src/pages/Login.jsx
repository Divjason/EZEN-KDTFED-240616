import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto 0;
`;

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const trueOk = useSelector((state) => state.auth.authenticate);

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(trueOk);
    navigate("/");
    dispatch(authenticateAction.login(id, pw));
  };
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setId(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPw(e.target.value)}
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Login
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
