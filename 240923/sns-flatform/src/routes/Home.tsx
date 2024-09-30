import styled from "styled-components";
import PostForm from "../components/PostForm";
import TimeLine from "../components/TimeLine";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  gap: 50px;
  height: 90vh;
`;

const Home = () => {
  return (
    <Wrapper>
      <PostForm />
      <TimeLine />
    </Wrapper>
  );
};

export default Home;
