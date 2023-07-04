import { useEffect } from 'react';
import { useCastomContext } from 'context/Context';

import css from './FilmDetails.module.css'
import { getMovieDetails } from 'services/endpointFetch';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import BackLink from 'components/backLink';

const FilmDetails  = () => {
  const { movieId } = useParams();
  const context = useCastomContext();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    context.setError(null);
    getMovieDetails(movieId)
      .then(context.handleDataMovie)
      .catch(context.handleError);
  },);
// console.log(context.data);
  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div className={css.App}>      
      {context.error && (
        <div className={css.error}>{context.error}</div>
      )}
      {context.dataMovie && (
        <>
          <section className={css['data__container']}>
            <div>
              <img className={css['img__container']} src={`${
                context.dataMovie.poster_path
                  ? "https://image.tmdb.org/t/p/w200" + context.dataMovie.poster_path
                  : "https://www.reelviews.net/resources/img/default_poster.jpg"
              }`} alt={context.dataMovie.title || "No name"} />
              </div>  
            <div>
              <h1>{context.dataMovie.title || "No name"}</h1>
              <p>{context.dataMovie.overview}</p>
              <h3>Genres</h3>
              <ul className={css.genres}>
                {context.dataMovie.genres.map((el) => (
                  <li key={ el.id }>{ el.name }</li>
                ))}   
              </ul>
            </div>
          </section>
          <section>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews </Link>
              </li>       
            </ul>            
          </section>
          
        <Outlet />
      </>
        
      )}
    </div>
    </>
    
  );
}

export default FilmDetails;
