import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Routes, useLocation, useMatch } from "react-router-dom";
import styled from "styled-components";
import {
  searchContents,
  GetMoviesResult,
  searchGeneres,
  getReviews,
  getVideos,
  Movie,
} from "../api";
import { makeImagePath } from "../utils";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

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

const Tabs = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin: 25px 0;
  padding-left: 100px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  padding: 7px 30px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  color: ${(props) =>
    props.isActive ? props.theme.red : props.theme.black.darker};
  transition: all 0.3s;
  &:hover {
    background: ${(props) => props.theme.red};
    color: #fff;
  }
`;

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  background: crimson;
  width: 20%;
  padding: 20px;
  border-radius: 10px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      display: inline;
      margin: 0 5px;
      a {
        text-decoration: none;
        color: #fff;
        padding: 5px 10px;
        border-radius: 50%;
        transition: background 0.3s, color 0.3s;
        &:hover {
          background: ${(props) => props.theme.red};
          color: #fff;
        }
      }
      &.active a {
        color: #fff;
        background: ${(props) => props.theme.red};
      }
    }
  }
`;

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

interface ContentState<T> {
  [key: number]: T[];
}

const Search = () => {
  const [videos, setVideos] = useState<ContentState<string>>({});
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

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

  useEffect(() => {
    if (movieData && videoData) {
      movieData.results.forEach((movie) => {
        getVideos(movie.id).then((data) => {
          if (data?.results) {
            const videoIds = data.results.map((video: any) => video.key);
            setVideos((prev) => ({
              ...prev,
              [movie.id]: videoIds,
            }));
          }
        });
      });
    }
  }, [movieData, videoData]);

  const reviewMatch = useMatch("search/review");
  const videoMatch = useMatch("search/video");

  const [showReviewContent, setShowReviewContent] = useState(false);
  const [showVideoContent, setShowVideoContent] = useState(false);

  const toggleReviewContent = () => {
    setShowReviewContent(!showReviewContent);
  };

  const toggleVideoContent = () => {
    setShowVideoContent(!showVideoContent);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(2);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies: Movie[] =
    movieData?.results.slice(indexOfFirstMovie, indexOfLastMovie) || [];

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [currentPage]);
  return (
    <Container>
      {movieLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {currentMovies?.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                {movie.backdrop_path ? (
                  <MovieImg
                    src={makeImagePath(movie.backdrop_path)}
                    alt="img"
                  />
                ) : (
                  <div style={{ width: "50%" }}>Ready for image</div>
                )}

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
                    {reviewData && Array.isArray(reviewData[index].results) ? (
                      reviewData[index].results.map(
                        (review: ReviewContents) => (
                          <li key={review.id}>
                            <div>{review.author}</div>
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
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id][0]}
                    opts={{
                      width: "100%",
                      height: "800px",
                      playerVars: {
                        autoplay: 0,
                        modestbranding: 1,
                        loop: 0,
                        playlist: videos[movie.id][0],
                      },
                    }}
                  />
                ) : (
                  "No Available"
                )}
              </div>
            </SearchBox>
          ))}
          <StyledPagination>
            <Pagination
              onChange={handlePageChange}
              activePage={currentPage}
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={movieData?.results.length || 0}
              pageRangeDisplayed={5}
            />
          </StyledPagination>
        </>
      )}
    </Container>
  );
};

export default Search;
