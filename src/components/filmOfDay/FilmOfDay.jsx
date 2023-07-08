
import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './FilmOfDay.module.css';
import { Suspense } from 'react';
import Loader from 'components/loader/Loader';

const FilmOfDay = ({ title, id, name }) => {  
    const location = useLocation();
   
    return (
        
        <li className={css['item__movie']} key={id}>
            <Link className={css['link__movie']} state={{from: location}} to={`/movies/${id}`}>{title || name}</Link>      
            <Suspense fallback={<div><Loader /></div>}>
                <Outlet />
            </Suspense>
        </li>
        
    );
} 

export default FilmOfDay;
