import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  margin-right: ${props => props.theme.spacing(3)};
  padding: 8px 12px;
  color: ${props => props.theme.colors.titleA};
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  transition: 0.1s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.btn_vol};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.btn_vol_hover};
  }

  &.active {
    color: ${props => props.theme.colors.hover};
    text-shadow: ${props => props.theme.shadows.title};
  }

  &[data-last] {
    margin-right: ${props => props.theme.spacing(30)};
  }
`;
