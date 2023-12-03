import styled from 'styled-components';

export const CardsListBox = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing(25)};
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: ${props => props.theme.spacing(12.5)};
  column-gap: ${props => props.theme.spacing(7.25)};
`;

export const CardsListNoItems = styled.h3`
  margin-left: auto;
  margin-right: auto;
`;
