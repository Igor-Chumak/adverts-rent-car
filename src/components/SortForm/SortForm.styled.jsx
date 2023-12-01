import styled from 'styled-components';

export const SortWrapper = styled.div`
  /* display: block; */
  /* position: relative; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* margin-bottom: ${props => props.theme.spacing(3)}; */
  /* max-width: ${props => props.theme.spacing(80)}; */
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(2)};
  font-weight: 700;
  /* line-height: 1.5; */
  text-align: center;
  background-color: ${props => props.theme.bg_color.item};
  border-radius: ${props => props.theme.spacing(2)};
  border-color: inherit;
  border: 1px solid;
  /* box-shadow: ${props => props.theme.shadows.main}; */
  /* outline: 1px solid red; */
`;

export const SortLabelBox = styled.div`
  /* display: block; */
  /* position: relative; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* margin-bottom: ${props => props.theme.spacing(3)}; */
  /* max-width: ${props => props.theme.spacing(80)}; */
  /* padding-bottom: ${props => props.theme.spacing(2)}; */
  /* padding-left: ${props => props.theme.spacing(5)}; */
  /* padding-right: ${props => props.theme.spacing(5)}; */
  /* font-weight: 700; */
  /* line-height: 1.5; */
  /* outline: 1px solid yellow; */
`;

export const SortLabel = styled.label`
  display: inline-block;
  /* position: relative; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* margin-bottom: ${props => props.theme.spacing(3)}; */
  /* max-width: ${props => props.theme.spacing(80)}; */
  padding: ${props => props.theme.spacing(2)};
  /* padding-bottom: ${props => props.theme.spacing(2)}; */
  /* padding-left: ${props => props.theme.spacing(5)}; */
  /* padding-right: ${props => props.theme.spacing(5)}; */
  color: ${props => props.theme.colors.darkgrey};
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.small};
  /* line-height: 1.5; */
  cursor: pointer;
  border-radius: 6px;
  box-shadow: ${props => props.theme.shadows.small};
  border-radius: ${props => props.theme.spacing(2)};
  border-color: inherit;
  border: 1px solid ${props => props.theme.colors.darkgrey};
  /* outline: 1px solid green; */

  input:checked + & {
    background-color: ${props => props.theme.colors.white};
    color: initial;
    border: none;
  }

  input:checked + &:hover,
  input:checked + &:focus {
    color: red;
  }

  &:not(:last-child) {
    margin-right: ${props => props.theme.spacing(2)};
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: red;
  }
`;

export const SortInput = styled.input`
  display: none;
`;
