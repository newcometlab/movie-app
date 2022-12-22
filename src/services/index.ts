import axios from 'axios'
import { Movie } from '../types'

const apiKey = 'OYnT4O3iLspW791tzfLAhGGH8gIfGJew7mNFAJve'

interface ApiResponse {
  data: any
}

export const getMovieList = async (): Promise<number[]> => {
  return axios
    .get(
      `https://api.watchmode.com/v1/search/?apiKey=${apiKey}&search_field=name&search_value=everest&type=movie`
    )
    .then((response: ApiResponse) => {
      if (
        response.data.title_results &&
        Array.isArray(response.data.title_results)
      )
        return response.data.title_results.map((row: any) => {
          return row.id as number
        })
      else return []
    })
}

export const getMovieDetail = async (titleId: number): Promise<Movie> => {
  return axios
    .get(
      `https://api.watchmode.com/v1/title/${titleId}/details/?apiKey=${apiKey}`
    )
    .then((response: ApiResponse) => {
      return {
        id: response.data.id,
        title: response.data.original_title,
        summary: response.data.plot_overview,
        imageUrl: response.data.poster,
        videoUrl: response.data.trailer,
        year: response.data.year,
        rating: response.data.user_rating,
        categories: response.data.genre_names,
      }
    })
}
