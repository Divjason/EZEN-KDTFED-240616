// const getMovies = () => {
//   return async (dispatch) => {
//     const url1 = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
//     const response = await fetch(url);
//     const data = response.json();
//     console.log(data);

//     const url2 = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
//     const response2 = await fetch(url);
//     const data2 = response.json();
//     console.log(data2);

//     const url3 = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;
//     const response3 = await fetch(url);
//     const data3 = response.json();
//     console.log(data3);
//   };
// };

// export const movies = { getMovies };

import api from "../api";

const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    const popularMovieApi = api.get(
      `movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
    );
    const topRatedMovieApi = api.get(
      `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
    );
    const upComingMovieApi = api.get(
      `movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
    );

    const [popularMovie, topRatedMovie, upComingMovie] = await Promise.all([
      popularMovieApi,
      topRatedMovieApi,
      upComingMovieApi,
    ]);
    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popularMovie: popularMovie.data,
        topRatedMovie: topRatedMovie.data,
        upComingMovie: upComingMovie.data,
      },
    });
  };
};

export const movieAction = { getMovies };
