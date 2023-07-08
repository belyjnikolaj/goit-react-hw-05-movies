import { Link } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

const AdditionalInfo = () => {
  
  return (
    <section className={css['section__info']}>
        <h3>Additional information</h3>
        <ul className={css.list}>
            <li className={css.item}>
                <Link to="cast">Cast</Link>
            </li>
            <li className={css.item}>
                <Link to="reviews">Reviews </Link>
            </li>       
        </ul>            
    </section> 
  )
}

export default AdditionalInfo