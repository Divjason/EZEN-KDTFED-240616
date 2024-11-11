import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  searchContents,
  GetMoviesResult,
  searchGeneres,
  getReviews,
  getVideos,
} from "../api";
import { makeImagePath } from "../utils";
import YouTube from "react-youtube";

const Container = styled.main`
  width: 100%;
  margin-top: 60px;
`;

const SearchBox = styled.div`
  width: 100%;
  padding: 10px;
`;

const MovieSection = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const MovieImg = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const MovieTitle = styled.h4`
  font-size: 36px;
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white.darker};
  border-radius: 8px;
  padding: 0 10px;
`;

const MovieOverView = styled.p`
  font-size: 24px;
  line-height: 1.6;
  border-top: 1px solid ${(props) => props.theme.black.lighter};
  border-bottom: 1px solid ${(props) => props.theme.black.lighter};
  padding: 20px 0;
`;

const MovieDate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
  }
`;

const MovieValue = styled.div`
  font-size: 18px;
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.black.lighter};
  color: ${(props) => props.theme.white.darker};
  text-align: center;
  line-height: 50px;
`;

const MovieRate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
  }
`;

const RateNumbers = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
  }
`;

const ReviewSection = styled.div`
  background: #f8f9fa;
  color: ${(props) => props.theme.black.darker};
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  li {
    margin: 10px 0;
    padding: 10px;
  }
`;

const ReviewTitle = styled.span`
  font-size: 20px;
`;

const GenereSection = styled.div`
  background: #ffa300;
  padding: 10px;
  border-radius: 8px;
`;

const Search = () => {
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");

  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const ids = movieData?.results.map((movie) => movie.id);

  const { data: genereData, isLoading: genereLoading } = useQuery({
    queryKey: ["getGeneres"],
    queryFn: searchGeneres,
  });

  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["getReviews", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getReviews(id))) : Promise.resolve([]),
    enabled: !!ids,
  });

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["getVideos", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getVideos(id))) : Promise.resolve([]),
    enabled: !!ids,
  });

  console.log(videoData);
  console.log(videoData?.[0].results[0]?.key);

  interface Obj {
    id: Number;
    name: string;
  }

  interface ReviewContents {
    author: string;
    author_details: {
      name: string;
      username: string;
      avatar_path: string;
      rating: number;
    };
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }

  return (
    <Container>
      {movieLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {movieData?.results.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                <MovieImg src={makeImagePath(movie.backdrop_path)} />
                <MovieInfo>
                  <MovieTitle>{movie.original_title}</MovieTitle>
                  <MovieOverView>{movie.overview}</MovieOverView>
                  <MovieDate>
                    <span>Release : {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>Rate : {movie.vote_average?.toFixed(2)}</span>
                  </MovieRate>
                  <RateNumbers>
                    <span>
                      Members : {movie.vote_count?.toLocaleString("ko-kr")}
                    </span>
                  </RateNumbers>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                  <GenereSection>
                    {movie.genre_ids
                      .map(
                        (id) =>
                          genereData?.genres.find((item: Obj) => item.id === id)
                            ?.name
                      )
                      .filter((name) => name)
                      .join(", ")}
                  </GenereSection>
                </MovieInfo>
              </MovieSection>
              <ReviewSection>
                <h3>😎😜Review😎😍</h3>
                {reviewLoading ? (
                  <div>Loading Reviews...</div>
                ) : (
                  <ul>
                    {reviewData &&
                    reviewData[index]?.results &&
                    Array.isArray(reviewData[index].results) ? (
                      reviewData[index].results.map(
                        (review: ReviewContents) => (
                          <li key={review.id}>
                            <ReviewTitle>{review.content}</ReviewTitle>
                          </li>
                        )
                      )
                    ) : (
                      <li>No Reviews</li>
                    )}
                  </ul>
                )}
              </ReviewSection>
              <div>
                {videoLoading ? (
                  <div>Video Loading...</div>
                ) : videoData &&
                  videoData[index] &&
                  videoData[index].length > 0 ? (
                  <YouTube
                    videoId={videoData[index].results[0]?.id}
                    opts={{
                      width: "1620px",
                      height: "800px",
                      playerVars: {
                        autoplay: 0,
                        modestbranding: 1,
                        loop: 0,
                        playlist: videoData[index].results[0]?.id,
                      },
                    }}
                    onReady={(e: any) => {
                      e.target.mute();
                    }}
                  />
                ) : (
                  <div>No Video</div>
                )}
              </div>
            </SearchBox>
          ))}
        </>
      )}
    </Container>
  );
};

export default Search;
