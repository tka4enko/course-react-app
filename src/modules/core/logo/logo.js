import React from "react";
import './logo.scss'
import {Link} from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'}className={'logo'}>
      netflix
    </Link>
  );
};

export {Logo};

