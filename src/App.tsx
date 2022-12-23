import React, { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import { useAppDispatch } from './store/hooks'
import MainLayout from './layouts/main'
import { fetchMoviesAsync } from './reducers/moviesSlice'
import RouteList from './routes'

const AppRoutes = () => {
  const routes = useRoutes(RouteList)
  return routes
}

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMoviesAsync())
  }, [dispatch])

  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  )
}

export default App
