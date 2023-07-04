import { useCastomContext } from 'context/Context'
import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/endpointFetch';

const Cast = () => {
  const context = useCastomContext()
  const { movieId } = useParams();

  useEffect(() => {
  context.setError(null);
  getMovieCredits(movieId)
    .then((data) => context.handleData(data, 'cast'))
    .catch(context.handleError);
    return () => {}
 }, []);
  return (
    <div>
      <ul>
        {context.data.map((el) => (
          <li key={el.id}>
            <img src={`${
                el.profile_path
                  ? "https://image.tmdb.org/t/p/w92" + el.profile_path
                  : "https://www.reelviews.net/resources/img/default_poster.jpg"
              }`} width='92px' alt={el.name || "No name"} />
             {/* <img src={`https://image.tmdb.org/t/p/w92${el.profile_path}`} alt="" /> */}
            <h2>{el.name}</h2>
            <p>character { el.character }</p>
          </li>
        ))}   
      </ul>
      <Outlet />
    </div>
  )
}

export default Cast