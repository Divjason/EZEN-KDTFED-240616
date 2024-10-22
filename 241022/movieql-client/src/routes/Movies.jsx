import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  height: 45vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
`;

const Loading = styled.div`
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin-top: 20vh;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 60vw;
  margin-top: -50px;
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const PosterBg = styled.div`
  background: url(${(props) => props.background}) center/cover no-repeat;
  width: 100%;
  height: 100%;
`;

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
      medium_cover_image
    }
  }
`;

const Movies = () => {
  const { data, loading } = useQuery(ALL_MOVIES);
  if (loading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Container>
      <Header>
        <Title>Movies List</Title>
      </Header>
      <MoviesGrid>
        {data.allMovies.map((movie) => (
          <PosterContainer key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <PosterBg background={movie.medium_cover_image} />
            </Link>
          </PosterContainer>
        ))}
      </MoviesGrid>
    </Container>
  );
};

export default Movies;
