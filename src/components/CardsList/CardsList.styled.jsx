import styled from 'styled-components';

export const CardsListBox = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing(25)};
  /* margin-bottom: ${props => props.theme.spacing(3)}; */
  /* padding-top: ${props => props.theme.spacing(2)}; */
  /* padding-bottom: ${props => props.theme.spacing(2)}; */
  /* padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)}; */

  max-width: 100%;

  /* max-width: ${props => props.theme.spacing(140)}; */
  /* max-height: calc(100vh - ${props => props.theme.spacing(95)}); */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: ${props => props.theme.spacing(12.5)};
  column-gap: ${props => props.theme.spacing(7.25)};
  flex-basis: 274px;

  font-weight: 600;
  line-height: 1.2;
  /* background-color: ${props => props.theme.bg_color.item}; */
  outline: 1px solid red;
`;

export const CardsListNoItems = styled.h3`
  margin-left: auto;
  margin-right: auto;
`;
