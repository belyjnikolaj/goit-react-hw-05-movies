import React from 'react'
import css from './BackLink.module.css'
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const BackLink = ({ to, children }) => {
  return (
    <Link className={css['back__link']} to={to}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};

export default BackLink