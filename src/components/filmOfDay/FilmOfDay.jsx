
import { Link } from 'react-router-dom';
import css from './FilmOfDay.module.css';

const FilmOfDay = ({ title, id, name } ) => {  

    return (
        
        <li className={css['gallery-item']} key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>      
        </li>
        
    );
} 

export default FilmOfDay;
