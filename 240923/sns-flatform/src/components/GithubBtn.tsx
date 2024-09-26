import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";

const Button = styled.span`
  width: 100%;
  background: #fff;
  color: #000;
  font-weight: 600;
  margin-top: 20px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 50px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

const GithubBtn = () => {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/github-mark.svg" />
      Continue With GitHub
    </Button>
  );
};

export default GithubBtn;
