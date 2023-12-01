import PropTypes from 'prop-types';
import { ContainerHeader, CreateThemeSwitcher } from 'components';
import { HeaderBar } from './Header.styled';

export const Header = ({ children }) => {
  return (
    <HeaderBar>
      <ContainerHeader>
        {children}
        <CreateThemeSwitcher />
      </ContainerHeader>
    </HeaderBar>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
