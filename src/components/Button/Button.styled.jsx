import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding-top: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(3)};
  /* min-width: ${props => props.theme.spacing(5)}; */
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

export const BtnLoadMore = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  display: block;
  color: ${props => props.theme.colors.accent};
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.5;
  text-align: center;
`;

// export const Clear = styled(Button)`
//   position: absolute;
//   top: 32px;
//   right: 30px;
//   margin: 0;
//   padding-bottom: ${props => props.theme.spacing(1)};
//   padding-top: ${props => props.theme.spacing(1)};
//   border: 1px solid ${props => props.theme.colors.dark};
//   border-radius: 6px;
//   color: initial;
// `;

export const OkButton = styled(Button)`
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-top: ${props => props.theme.spacing(1)};
  padding-left: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(4)};
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 1.2;
  transform: scale(1.1);
  color: initial;
`;
