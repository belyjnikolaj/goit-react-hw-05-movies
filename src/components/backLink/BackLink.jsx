import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

import css from './BackLink.module.css';

const BackLink = ({ children, to }) => { 

  return (
    <section className={css['back__link-section']}>
      <Link className={css['back__link']} to={to}>
        <HiArrowLeft size="14" />
        {children}
      </Link>
    </section>    
  );
};

export default BackLink;
