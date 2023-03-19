import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <NavLink className='navbar-list-link' to='/'>
          Home
        </NavLink>
        <NavLink className='navbar-list-link' to='add'>
          Add Product
        </NavLink>
      </ul>
    </nav>
  );
};
