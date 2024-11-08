import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { searchContents, GetMoviesResult, searchGeneres } from "../api";
import { makeImagePath } from "../utils";

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

const Search = () => {
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");

  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: genereData, isLoading: genereLoading } = useQuery({
    queryKey: ["getGeneres"],
    queryFn: searchGeneres,
  });

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
                </MovieInfo>
              </MovieSection>
            </SearchBox>
          ))}
        </>
      )}
    </Container>
  );
};

export default Search;
