import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
  return (
    <Link to={to} style={{ color: 'inherit', textDecoration: 'none ' }}>
      {children}
    </Link>
  );
};

export default CustomLink;
