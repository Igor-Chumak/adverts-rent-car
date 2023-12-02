// import { useAuth } from 'hooks';
import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = true;

  return (
    <nav>
      <NavLinkStyled to="/" end>
        Home
      </NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>}
      {isLoggedIn && <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>}
    </nav>
  );
};
