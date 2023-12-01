import styled from 'styled-components';

export const ContactFormForm = styled.form`
  max-width: ${props => props.theme.spacing(140)};
  margin: 0 auto;
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(3)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.bg_color.item};
  border-color: inherit;
  border: 1px solid;
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.main};

  // label:last-of-type {
  //   margin-bottom: ${props => props.theme.spacing(5)};
  // }
`;

export const ContactFormLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing(3)};
  font-weight: 600;
  line-height: 2;
`;

export const ContactFormInput = styled.input`
  display: block;
  padding: ${props => props.theme.spacing(2)};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  border: 2px solid;
  color: ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.spacing(2)};

  &:focus {
    color: initial;
  }

  &:not(:placeholder-shown):invalid {
    border-color: red;
  }

  &:not(:placeholder-shown):valid {
    border-color: green;
  }
`;

export const ContactFormSubmit = styled.button`
  margin-top: ${props => props.theme.spacing(4)};
  display: block;
  min-width: ${props => props.theme.spacing(5)};
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(3)};
  padding-right: ${props => props.theme.spacing(3)};
  /* padding: ${props => props.theme.spacing(2)}; */
  color: initial;
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.darkgrey};
  box-shadow: ${props => props.theme.shadows.small};
  &:hover {
    transform: scale(1.1);
    box-shadow: ${props => props.theme.shadows.regular};
    color: red;
  }
`;
