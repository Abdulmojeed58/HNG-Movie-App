import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home, { loader as movieLoader } from "./pages/Home"
import MovieDetails, {loader as MovieDetailsLoader} from "./pages/MovieDetails"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element:<Home />,
        loader: movieLoader,
      },
      {
        path: ':id',
        element: <MovieDetails />,
        loader: MovieDetailsLoader,
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
