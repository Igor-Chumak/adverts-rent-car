import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding-top: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(3)};
  width: 100%;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 1.43;
  background-color: ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.spacing(3)};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hover};
  }
`;

export const BtnRental = styled.a`
  margin-right: auto;
  padding-top: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(3)};
  width: ${props => props.theme.spacing(42)}; // 168
  display: block;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 1.43;
  text-align: center;
  background-color: ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.spacing(3)};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hover};
  }
`;

export const BtnHome = styled(Button)`
  margin-top: ${props => props.theme.spacing(15)};
  margin-right: auto;
  margin-left: auto;
  width: ${props => props.theme.spacing(50)};
  color: ${props => props.theme.colors.title};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: ${props => props.theme.fontSizes.large};
  text-shadow: 1px 1px 1px #ffff;
  background-color: inherit;
  border-color: ${props => props.theme.colors.title};
  border: 1px solid;
  box-shadow: 1px 1px 1px #ffff;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.title};
    color: ${props => props.theme.colors.white};
    text-shadow: unset;
    opacity: 70%;
  }
`;

export const BtnLoadMore = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing(12.5)}; //50px;
  display: block;
  color: ${props => props.theme.colors.accent};
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.5;
  text-align: center;
  &:focus,
  &:hover {
    color: ${props => props.theme.hover};
    text-decoration: underline;
  }
`;
