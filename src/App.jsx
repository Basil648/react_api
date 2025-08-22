import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Homes from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Online from './pages/Online'
import Offline from './pages/Offline'

function App() {

  const bouter = createBrowserRouter([

    {
      path: "/", element: <Layout />,
      children: [
        { path: "/", element: <Homes /> },
        { path: "/about", element: <About /> },
        {
          path: '/services', element: <Services />,
          children: [
            { path: "offline", element: <Offline /> },
            // { path: "/online", element: <Online /> }

          ]
        },
        { path: "/contact", element: <Contact /> }
      ]
    }


  ])


  return <RouterProvider router={bouter} />
}

export default App