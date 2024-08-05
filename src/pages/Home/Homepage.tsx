import { Link } from 'react-router-dom';
import { StyledHomepage } from './Homepage.styles';

export const Homepage = () => {
  return (
    <StyledHomepage>
      <div className="content">
        <p>Начните заполнение с первой формы!</p>
        <Link to="/first-form">Перейти</Link>
      </div>
    </StyledHomepage>
  );
};
