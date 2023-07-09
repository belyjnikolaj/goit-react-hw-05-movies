import { Suspense, useEffect, useRef } from 'react';

import { getTrendingFilms } from 'services/endpointFetch';
import { useCastomContext } from 'context/Context';

import css from './ListFilmsOfDay.module.css'
import FilmOfDay from 'components/filmOfDay';
import { Outlet } from 'react-router-dom';
import Loader from 'components/loader/Loader';
// import { useLocation } from 'react-router-dom';

const ListFilmsOfDay = () => {
  const context = useCastomContext()
 
const contextRef = useRef(null);

  // При кожному рендері оновлюємо значення contextRef
  useEffect(() => {
    contextRef.current = context;
  }, [context]);

  useEffect(() => {
    const currentContext = contextRef.current;

    currentContext.setError(null);
    getTrendingFilms()
      .then((data) => currentContext.handleData(data, 'results'))
      .catch(currentContext.handleError);
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