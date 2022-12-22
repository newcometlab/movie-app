import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useAppDispatch } from './store/hooks'
import MainLayout from './layouts/main'
import Dashboard from './pages/dashboard'
import MovieDetail from './pages/detail'
import { fetchMoviesAsync } from './reducers/moviesSlice'
import Projects from './pages/projects'
import ContactUs from './pages/contact-us'
import Team from './pages/team'
import Login from './pages/login'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMoviesAsync())
  }, [dispatch])

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
