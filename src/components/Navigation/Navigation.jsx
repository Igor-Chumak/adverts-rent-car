import { useSelector } from 'react-redux';
import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const favorites = useSelector(state => state.favorites.items) ?? [];

  return (
    <nav>
      <NavLinkStyled to="/" end>
        Home
      </NavLinkStyled>
      <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
      {favorites.length > 0 && (
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      )}
    </nav>
  );
};
