import { Link } from 'react-router-dom';
import { StyledNavbar } from './Navbar.styles';

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Формы</Link>
    </StyledNavbar>
  );
};
