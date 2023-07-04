import { Route, Routes } from "react-router-dom"

import MovesPage from "pages/MovesPage";
import Layout from "components/layout/Layout";
import HomePage from "pages/HomePage";
import FilmDetails from "components/filmDetails/FilmDetails";
import Cast from "components/cast/Cast";
import Reviews from "components/reviews/Reviews";

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
