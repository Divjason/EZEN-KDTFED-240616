import React from "react";
import styled from "styled-components";

const BgImg = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #000, transparent);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
`;

const MovieTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const MovieOverView = styled.p`
  width: 800px;
  font-size: 22px;
  line-height: 30px;
`;

const Banner = ({ movie }) => {
  console.log(movie);
  return (
    <BgImg>
      <Img
        src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`}
      />
      <BannerInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieOverView>{movie.overview}</MovieOverView>
      </BannerInfo>
    </BgImg>
  );
};

export default Banner;
