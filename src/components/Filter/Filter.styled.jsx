import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: center;
  gap: ${props => props.theme.spacing(5)};
  width: 100%;
  /* position: relative; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  margin-bottom: ${props => props.theme.spacing(3)};
  /* max-width: ${props => props.theme.spacing(80)}; */
  /* padding-bottom: ${props => props.theme.spacing(2)}; */
  /* padding-left: ${props => props.theme.spacing(5)}; */
  /* padding-right: ${props => props.theme.spacing(5)}; */
  font-weight: 600;
  line-height: 1.5;
  /* outline: 1px solid; */
`;

export const FilterLabel = styled.label`
  display: block;
  position: relative;
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* margin-bottom: ${props => props.theme.spacing(3)}; */
  max-width: ${props => props.theme.spacing(65)};
  width: 100%;
  padding-bottom: ${props => props.theme.spacing(3)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  font-weight: 700;
  /* line-height: 1.5; */
  background-color: ${props => props.theme.bg_color.item};
  border-radius: ${props => props.theme.spacing(2)};
  border-color: inherit;
  border: 1px solid;
  /* outline: 1px solid blue; */
`;

export const FilterInput = styled.input`
  display: block;
  width: 100%;
  padding: ${props => props.theme.spacing(2)};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.gray};
  border: 2px solid;
  color: ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.spacing(2)};

  /* outline: 1px solid blue; */
  &:focus {
    color: initial;
  }
`;
