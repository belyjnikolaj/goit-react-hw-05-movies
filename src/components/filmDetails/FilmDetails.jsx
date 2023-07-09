import { Suspense, useEffect, useRef } from 'react';
import { useCastomContext } from 'context/Context';

import css from './FilmDetails.module.css'
import { getMovieDetails } from 'services/endpointFetch';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import BackLink from 'components/backLink';
import Loader from 'components/loader/Loader';
import AdditionalInfo from 'components/additionalInfo';
import BasicInfo from 'components/basicInfo/BasicInfo';

const FilmDetails = () => {
  const { movieId } = useParams();
  const context = useCastomContext();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? ("/" && "/movies"));
  const { dataMovie } = context;
  const { poster_path, title, release_date, overview, genres, vote_average } = dataMovie || {};
  

 const previousMovieId = useRef(null);

useEffect(() => {
  context.setError(null);
  if (movieId !== previousMovieId.current) {
    getMovieDetails(movieId)
      .then(context.handleDataMovie)
      .catch(context.handleError);
    previousMovieId.current = movieId;
  }
  return () => {};
}, [context, movieId]);

  return (   
    <div className={css.container}>      
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      
      
      <div className={css.error}>      
      {context.error && (
        <div className={css.error}>{context.error}</div>
      )}
        
      {dataMovie && (
        <>
            <BasicInfo
              poster_path={poster_path}
              title={title}
              release_date={release_date}
              overview={overview}
              genres={genres}
              vote_average={vote_average} />          
          <AdditionalInfo/>
        <Suspense fallback={<div><Loader /></div>}>
         <Outlet />
      </Suspense>      
      </>        
      )}
    </div>
    </div>    
  );
}

export default FilmDetails;
