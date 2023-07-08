import { Suspense, useEffect, useState } from "react";
import css from "./Searchbar.module.css";
import { Outlet, useSearchParams } from "react-router-dom";
import { searchMovies } from "services/endpointFetch";
import { useCastomContext } from "context/Context";
import FilmOfDay from "components/filmOfDay/FilmOfDay";
import Loader from "components/loader/Loader";

const Searchbar = () => {
  const context = useCastomContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const filterQuery = searchParams.get('query') ?? '';
  const [error, setError] = useState(null); // Стан для зберігання помилки

  useEffect(() => {
    context.setError(null);
    setError(null);
    handleFetch(filterQuery);
  }, []);

  const handleChange = ({ target }) => {
    const queryValue = target.value;
    setSearchParams({ query: queryValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetch(filterQuery);
  };

  const handleFetch = () => {
    searchMovies(filterQuery)
      .then((data) => {
        context.handleData(data, 'results');
        setError(null);
      })
      .catch((error) => {
        context.handleError(error);
        setError(error.message);
      });
  };

  return (
    <>
      <div className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>         
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            onChange={handleChange}
            value={filterQuery}
          />
           <button type="submit" className={css.button}>
            Search
          </button>
        </form>
        <Suspense fallback={<div><Loader /></div>}>
          <Outlet />
        </Suspense>
      </div>
      <div  className={css['list__movie-box']}>
        <ul className={css['list__movie']}>
          {context.data.map((el) => (
            <FilmOfDay 
              key={el.id} 
              id={el.id} 
              title={el.title} 
              name={el.name} 
            />
          ))}
        </ul>
      </div>
      {error && <div className={css.error}>{error}</div>}
    </>
  );
};

export default Searchbar;
