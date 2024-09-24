import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";

const Wrapper = styled.div`
  width: 420px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.h1`
  font-size: 42px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || name === "" || email === "" || password === "") return;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      // setError()
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>Log into 🎃</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="name"
          value={name}
          type="text"
          placeholder="Name"
          required
        />
        <Input
          onChange={onChange}
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <Input
          type="submit"
          value={isLoading ? "Loading..." : "Create Account"}
        />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
    </Wrapper>
  );
};

export default CreateAccount;
