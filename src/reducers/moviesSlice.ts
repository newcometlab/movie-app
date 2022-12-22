import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { getMovieDetail, getMovieList } from '../services'
import { Movie } from '../types'
import { moviesStatic } from '../utils/constants'

export interface MoviesState {
  movies: Movie[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: MoviesState = {
  movies: [],
  status: 'idle',
}

export const fetchMoviesAsync = createAsyncThunk('fetchMovies', async () => {
  // const titleIds = await getMovieList();
  // const movies: Movie[] = [];
  // await Promise.all(
  //   titleIds.map(async (titleId) => {
  //     const ret = await getMovieDetail(titleId);
  //     movies.push(ret);
  //   })
  // );

  // return movies;

  return moviesStatic as Movie[]
})

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.movies = action.payload
      })
      .addCase(fetchMoviesAsync.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export default moviesSlice.reducer
