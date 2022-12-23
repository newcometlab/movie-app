import Card from '../../components/card'
import Select from '../../components/select'
import { RootState } from '../../store/store'
import { useAppSelector } from '../../store/hooks'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ratingRanges } from '../../utils/constants'

export default function Dashboard() {
  const movies = useAppSelector((state: RootState) => state.movies.movies)
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()
  const category = searchParams.get('category')
  const year = searchParams.get('year')
  const rating = searchParams.get('rating')
  const query = searchParams.get('query')

  const [allCategories, setAllCategories] = useState<string[]>([])
  const [allYears, setAllYears] = useState<number[]>([])

  const getSearchParamUri = (
    category: string,
    year: string,
    rating: string,
    query: string
  ) => {
    let url = ''
    if (category) url += `category=${category}`
    if (year) url += `${url === '' ? '' : '&'}year=${year}`
    if (rating) url += `${url === '' ? '' : '&'}rating=${rating}`
    if (query) url += `${url === '' ? '' : '&'}query=${query}`
    return url === '' ? url : `?${url}`
  }

  const filteredMovies = useMemo(() => {
    if (
      (!category || category === '') &&
      (!year || year === '') &&
      (!rating || rating === '') &&
      (!query || query === '')
    ) {
      const _movies = movies.slice()
      return _movies.sort((a, b) => b.rating - a.rating).slice(0, 8)
    } else {
      const _movies = movies.filter((movie) => {
        if (category && category !== '' && !movie.categories.includes(category))
          return false

        if (movie.year === null) return false
        if (year && year !== '' && movie.year !== Number(year)) return false

        const _ratingRage = ratingRanges.find(
          (ratingRange) => ratingRange.title === rating
        )
        if (movie.rating === null) return false
        if (
          rating &&
          rating !== '' &&
          _ratingRage &&
          (movie.rating <= _ratingRage.start || movie.rating > _ratingRage.end)
        )
          return false

        if (
          query &&
          query !== '' &&
          movie.title.toLowerCase().indexOf(query.toLowerCase()) === -1
        )
          return false

        return true
      })
      return _movies.sort((a, b) => b.rating - a.rating).slice(0, 8)
    }
  }, [movies, category, year, rating, query])

  const searchParamUri = useMemo(
    () =>
      getSearchParamUri(category ?? '', year ?? '', rating ?? '', query ?? ''),
    [category, year, rating, query]
  )

  useEffect(() => {
    const _allCategories: string[] = []
    const _allYears: number[] = []
    movies.forEach((movie) => {
      movie.categories.forEach((category) => {
        if (!_allCategories.includes(category)) _allCategories.push(category)
      })

      if (movie.year && !_allYears.includes(movie.year))
        _allYears.push(movie.year)
    })
    _allCategories.sort((a, b) => String(a).localeCompare(String(b)))
    _allYears.sort((a, b) => a - b)
    setAllCategories(_allCategories)
    setAllYears(_allYears)
  }, [movies])

  return (
    <>
      <div className="w-full sm:flex sm:flex-row sm:justify-end sm:gap-2">
        <div className="w-full sm:w-36">
          <input
            type="text"
            value={query ?? ''}
            onChange={(ev) => {
              navigate(
                getSearchParamUri(
                  category ?? '',
                  year ?? '',
                  rating ?? '',
                  ev.target.value ?? ''
                )
              )
            }}
            className="form-control block w-full px-2 py-1 text-base font-normal text-secondary bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-style-color-cyan focus:outline-none"
            placeholder="Search Name"
          />
        </div>
        <div className="sm:w-full flex flex-row justify-end gap-2 mt-4 sm:mt-0">
          <div className="w-full sm:w-28">
            <Select
              value={
                allCategories.find((_category) => _category === category)
                  ? allCategories.findIndex(
                      (_category) => _category === category
                    )
                  : -1
              }
              onChange={(ev) => {
                const val = ev.target.value
                if (
                  val !== undefined &&
                  !isNaN(Number(val)) &&
                  Number(val) !== -1
                ) {
                  navigate(
                    getSearchParamUri(
                      allCategories[Number(val)],
                      year ?? '',
                      rating ?? '',
                      query ?? ''
                    )
                  )
                } else {
                  navigate(
                    getSearchParamUri('', year ?? '', rating ?? '', query ?? '')
                  )
                }
              }}
              items={Array({
                value: -1,
                title: 'All',
              }).concat(
                allCategories.map((category, idx) => {
                  return { value: idx, title: category }
                })
              )}
            />
          </div>
          <div className="w-full sm:w-28">
            <Select
              value={
                allYears.find((_year) => _year === Number(year))
                  ? Number(year)
                  : -1
              }
              onChange={(ev) => {
                const val = ev.target.value
                if (
                  val !== undefined &&
                  !isNaN(Number(val)) &&
                  Number(val) !== -1
                ) {
                  navigate(
                    getSearchParamUri(
                      category ?? '',
                      String(val),
                      rating ?? '',
                      query ?? ''
                    )
                  )
                } else {
                  navigate(
                    getSearchParamUri(
                      category ?? '',
                      '',
                      rating ?? '',
                      query ?? ''
                    )
                  )
                }
              }}
              items={Array({
                value: -1,
                title: 'All',
              }).concat(
                allYears.map((year) => {
                  return { value: year, title: String(year) }
                })
              )}
            />
          </div>
          <div className="w-full sm:w-28">
            <Select
              value={
                ratingRanges.find((ratingRange) => ratingRange.title === rating)
                  ? ratingRanges.findIndex(
                      (ratingRange) => ratingRange.title === rating
                    )
                  : -1
              }
              onChange={(ev) => {
                const val = ev.target.value
                if (
                  val !== undefined &&
                  !isNaN(Number(val)) &&
                  Number(val) !== -1
                ) {
                  navigate(
                    getSearchParamUri(
                      category ?? '',
                      year ?? '',
                      ratingRanges[Number(val)].title,
                      query ?? ''
                    )
                  )
                } else {
                  navigate(
                    getSearchParamUri(
                      category ?? '',
                      year ?? '',
                      '',
                      query ?? ''
                    )
                  )
                }
              }}
              items={Array({
                value: -1,
                title: 'All',
              }).concat(ratingRanges)}
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <p className="text-xl sm:text-3xl text-primary font-bold text-center">
          {searchParamUri !== '' ? 'Filtered Movies' : 'Top 8 Movies'}
        </p>
        {filteredMovies.length > 0 ? (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 lg:gap-8 mt-4">
            {filteredMovies.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.imageUrl}
                  title={movie.title}
                />
              )
            })}
          </div>
        ) : (
          <p className="w-full text-style-color-slate text-xl text-center mt-2">
            Nothing to show
          </p>
        )}
      </div>
      <div className="w-full mt-6">
        <p className="text-xl sm:text-3xl text-primary font-bold text-center">
          All Movies
        </p>
        {movies.length > 0 ? (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 lg:gap-8 mt-4">
            {movies.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.imageUrl}
                  title={movie.title}
                />
              )
            })}
          </div>
        ) : (
          <p className="w-full text-style-color-slate text-xl text-center mt-2">
            Nothing to show
          </p>
        )}
      </div>
    </>
  )
}
