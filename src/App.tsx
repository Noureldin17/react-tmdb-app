import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout.tsx";
import Home from "./pages/Home.tsx";
import Movies from "./pages/Movies.tsx";
import TvShows from "./pages/TvShows.tsx";
import People from "./pages/People.tsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/movies", element: <Movies /> },
        { path: "/tvshows", element: <TvShows /> },
        { path: "/people", element: <People /> },
        { path: "/login", element: <TvShows /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
