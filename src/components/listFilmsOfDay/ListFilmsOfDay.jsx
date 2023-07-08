import { Suspense, useEffect } from 'react';

import { getTrendingFilms } from 'services/endpointFetch';
import { useCastomContext } from 'context/Context';

import css from './ListFilmsOfDay.module.css'
import FilmOfDay from 'components/filmOfDay';
import { Outlet } from 'react-router-dom';
import Loader from 'components/loader/Loader';
// import { useLocation } from 'react-router-dom';

const ListFilmsOfDay = () => {
  const context = useCastomContext()
  // const location = useLocation();
 
 useEffect(() => {
  context.setError(null);
  getTrendingFilms()
    .then((data) => context.handleData(data, 'results'))
    .catch(context.handleError);
    return () => {}
 }, []);
  
    return (
      <div className={css['list__box']}>
        <h1 className={css['list__title']}>Tranding today</h1>
        {context.error && (
        <div className={css.error}>{context.error}</div>
        )}
        {
      <ul className={css['list__movie']}>
        {context.data.map((el) => (
          <FilmOfDay
            key={el.id}
            id={el.id}
            title={el.title}
            name={el.name}
          />
        ))}
          </ul>}
        <Suspense fallback={<div><Loader /></div>}>
         <Outlet />
      </Suspense>
      </div>
    );
}

export default ListFilmsOfDay;