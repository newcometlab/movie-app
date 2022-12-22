import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../../components/rating'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/store'

export default function MovieDetail() {
  const { id: movieId } = useParams()
  const movies = useAppSelector((state: RootState) => state.movies.movies)

  const movie = useMemo(
    () => movies.find((movie) => String(movie.id) === movieId),
    [movies, movieId]
  )

  if (movie === undefined) {
    return <></>
  }

  return (
    <div className="w-full block md:flex md:flex-row md:justify-center md:gap-6 lg:gap-8">
      <div className="w-full md:w-3/5">
        <div
          className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
          style={{ paddingTop: '75%' }}
        >
          <iframe
            title="iframe-1"
            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${movie.videoUrl.slice(
              movie.videoUrl.indexOf('v=') + 2
            )}`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full md:flex-1 bg-primary rounded-lg p-4 md:p-6 mt-4 md:mt-0">
        <div className="w-full flex flex-row justify-start gap-2 sm:gap-4 items-center">
          <p className="text-2xl sm:text-3xl text-secondary font-bold">
            {movie.title}
          </p>
          <Rating rating={movie.rating} limit={10} />
        </div>
        <p className="text-sm sm:text-base text-secondary font-medium">
          {movie.summary}
        </p>
        <div className="w-full flex flex-row justify-start gap-2 sm:gap-4 items-center mt-2 md:mt-4">
          <p className="text-sm sm:text-base text-secondary font-medium">
            Year:{' '}
          </p>
          <p className="text-sm sm:text-base text-style-color-indigo font-medium">
            {movie.year}
          </p>
        </div>
        <div className="w-full flex flex-row justify-start gap-2 sm:gap-4 items-center">
          <p className="text-sm sm:text-base text-secondary font-medium">
            Categories:{' '}
          </p>
          <p className="text-sm sm:text-base text-style-color-indigo font-medium">
            {movie.categories.join(', ')}
          </p>
        </div>
      </div>
    </div>
  )
}
