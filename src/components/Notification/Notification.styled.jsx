import styled from 'styled-components';

export const NotificationBox = styled.div`
  padding: ${props => props.theme.spacing(1)};
  display: flex;
  align-items: space-around;
  gap: ${props => props.theme.spacing(4)};
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.colors.alert};
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
  justify-content: center;
  background-color: ${props => props.theme.colors.alert};
`;

export const Message = styled.div`
  display: block;
  padding: ${props => props.theme.spacing(2)};
  color: inherit;
  font-weight: normal;
  font-size: ${props => props.theme.fontSizes.large};
  text-transform: none;
  text-align: center;
`;
