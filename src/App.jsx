import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

function App() {
  const routerr = createBrowserRouter([
    {

      path: "/", element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/services", element: <Services /> }

      ]




    }
  ])

  return <RouterProvider router={routerr} />

}

export default App
