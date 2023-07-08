import Loader from 'components/loader/Loader';
import { useCastomContext } from 'context/Context'
import { Suspense, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/endpointFetch';
import  css from './Reviews.module.css';

const Reviews = () => {
  const context = useCastomContext()
  const { movieId } = useParams();

  useEffect(() => {
  context.setError(null);
  getMovieReviews(movieId)
    .then((data) => context.handleData(data, 'results'))
    .catch(context.handleError);
    return () => {}
  }, [movieId]);
  
  return (
    <>
      <ul className={css.list}>
        {context.data.length > 0 ? (
          context.data.map((el) => (
            <li className={css.item} key={el.id}>
              <h2 className={css.name}>Author: {el.author}</h2>
              <p className={css.text}>{el.content}</p>
            </li>
          ))
        ) : (
          <p className={css.text}>We don't have any reviews for this movie.</p>
        )}
      </ul>
      <Suspense fallback={<div><Loader /></div>}>
         <Outlet />
      </Suspense>
    </>
  )
}

export default Reviews