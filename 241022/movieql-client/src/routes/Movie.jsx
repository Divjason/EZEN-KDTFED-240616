import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  gap: 10px;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;

const Loading = styled.div`
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin-top: 20vh;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin: 15px 0 20px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 22px;
  line-height: 30px;
`;

const Image = styled.div`
  flex: 1;
  width: 100%;
  height: 700px;
  background: url(${(props) => props.bg}) center top/cover no-repeat;
  border-radius: 8px;
`;

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      rating
      medium_cover_image
      small_cover_image
      isLiked @client
    }
  }
`;

const Movie = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Container>
      <ItemGroup>
        <Column>
          <Title>{data.movie.title}</Title>
          <Subtitle>⭐ {data.movie.rating}</Subtitle>
          <Button onClick={onClick}>
            🌈 {data.movie.isLiked ? "Unlike" : "Like"}
          </Button>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            illo nobis veritatis, expedita quis voluptatibus voluptate quas, nam
            sed ea amet hic. Quas culpa eius molestiae maiores ratione,
            assumenda mollitia. Voluptatibus eum, accusantium sequi cum
            repudiandae doloremque quidem ab praesentium dolore molestiae
            dignissimos odit, repellat facilis possimus expedita error molestias
            vel beatae deleniti in rerum vero quia magni tenetur! Nobis?
          </Description>
        </Column>
        <Image bg={data.movie.medium_cover_image} />
      </ItemGroup>
    </Container>
  );
};

export default Movie;
