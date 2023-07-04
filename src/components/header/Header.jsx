import { NavLink } from "react-router-dom"
import css from './Header.module.css';
import { styled } from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: rgb(225, 5, 203);
  }
 &:hover {
  text-decoration: underline;
 }
`;
// const customClassName = css['styled-link'];

const Header = () => {
  
  return (
    <nav className={css['header__nav']}>       
      <ul className={css["nav__list"]}>
        <li className={css["nav__item"]}>
          <StyledLink className={css['styled-link']} aria-current="page" to="/">Home</StyledLink>
        </li>
        <li className={css["nav__item"]}>
          <StyledLink className={css['styled-link']} to="/movies">Moves</StyledLink>
        </li>  
      </ul>            
    </nav>
  )
}
export default Header