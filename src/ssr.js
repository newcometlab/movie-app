import React from 'react'
import express from 'express'
import { useRoutes } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import RouteList from './routes'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { store } from './store/store'

const app = express()
app.use(express.static('build'))

app.get('*', (req, res) => {
  const promises = RouteList.map((route) => {
    if (route.path === req.path && route.element.type.getInitialData) {
      return route.element.type.getInitialData(store)
    }
    return false
  }).filter(Boolean)
  const App = () => {
    let routes = useRoutes(RouteList)
    return routes
  }
  Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path}>
          <App />
        </StaticRouter>
      </Provider>
    )

    res.send(`<html>
                <head></head>
                <body>
                    <div id="root">${content}</div>
                    <script src="./client/bundle.js"></script>
                </body>
            </html>`)
  })
})

app.listen(8000, () => console.log('listen on 8000'))
