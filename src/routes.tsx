import React from 'react'
import Dashboard from './pages/dashboard'
import MovieDetail from './pages/detail'
import Projects from './pages/projects'
import ContactUs from './pages/contact-us'
import Team from './pages/team'
import Login from './pages/login'

const RouteList = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/detail/:id',
    element: <MovieDetail />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]

export default RouteList
