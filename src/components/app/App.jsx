import { Route, Routes } from "react-router-dom"
import { lazy } from "react";
import Layout from "components/layout";

const MovesPage = lazy(() => import("pages/MovesPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const FilmDetails = lazy(() => import("components/filmDetails"));
const Cast = lazy(() => import("components/cast"));
const Reviews = lazy(() => import("components/reviews"));

const App = () => {
 
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>    
        <Route index element={<HomePage />}/>
        <Route path='movies' element={<MovesPage />} />
        <Route path='movies/:movieId' element={<FilmDetails />} >
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Route>    
    </Routes>
  )
}
export default App
