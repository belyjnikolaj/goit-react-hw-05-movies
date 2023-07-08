import { Suspense, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom';

import Loader from 'components/loader';
import { useCastomContext } from 'context/Context'
import { getMovieCredits } from 'services/endpointFetch';
import css from "./Cast.module.css";

const Cast = () => {
  const context = useCastomContext()
  const { movieId } = useParams();

  useEffect(() => {
  context.setError(null);
  getMovieCredits(movieId)
    .then((data) => context.handleData(data, 'cast'))
    .catch(context.handleError);
    return () => {}
  }, [movieId]);
  
  return (
    <>
      <ul className={css['list__cast']}>
        {context.data.map((el) => (
          <li className={css.item} key={el.id}>
            <img className={css.img} src={`${
                el.profile_path
                  ? "https://image.tmdb.org/t/p/w92" + el.profile_path
                  : "https://www.reelviews.net/resources/img/default_poster.jpg"
              }`} width='92px' alt={el.name || "No name"} />
            <h2 className={css.name}>{el.name}</h2>
            <p className={css.text}>Character: { el.character }</p>
          </li>
        ))}   
      </ul>
      <Suspense fallback={<Loader />}>
         <Outlet />
      </Suspense>     
    </>
  )
}

export default Cast