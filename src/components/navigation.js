import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = (props) => {
  const { cartItemNumber } = props;
  return (
    <header className="main-navigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart ({cartItemNumber})</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  cartItemNumber: PropTypes.number,
};

Navigation.defaultProps = {
  cartItemNumber: 0,
};

export default Navigation;
