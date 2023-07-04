import { useEffect } from 'react';


import { getTrendingFilms } from 'services/endpointFetch';
import { useCastomContext } from 'context/Context';

import css from './ListFilmsOfDay.module.css'
import FilmOfDay from 'components/filmOfDay';


const ListFilmsOfDay = () => {
  const context = useCastomContext()
 
 useEffect(() => {
  context.setError(null);
  getTrendingFilms()
    .then((data) => context.handleData(data, 'results'))
    .catch(context.handleError);
    return () => {}
 });
  
    return (
      <div className={css.App}>
        <h1>Tranding today</h1>
        {context.error && (
        <div className={css.error}>{context.error}</div>
        )}
        {
      <ul className={css.gallery}>
        {context.data.map((el) => (
          <FilmOfDay
            key={el.id}
            id={el.id}
            title={el.title}
            name={el.name}
          />
        ))}
      </ul>}
      </div>
    );
}

export default ListFilmsOfDay;