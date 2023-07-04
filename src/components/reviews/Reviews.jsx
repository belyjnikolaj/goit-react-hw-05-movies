import { useCastomContext } from 'context/Context'
import React, { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/endpointFetch';

const Reviews = () => {
  const context = useCastomContext()
  const { movieId } = useParams();

  useEffect(() => {
  context.setError(null);
  getMovieReviews(movieId)
    .then((data) => context.handleData(data, 'results'))
    .catch(context.handleError);
    return () => {}
  });
  
  return (
    <div>
      <ul>
        {context.data.length > 0 ? (
          context.data.map((el) => (
            <li key={el.id}>
              <p>Author: {el.author}</p>
              <p>{el.content}</p>
            </li>
          ))
        ) : (
          <li>We don't have any reviews for this movie.</li>
        )}
      </ul>
      <Outlet />
    </div>
  )
}

export default Reviews