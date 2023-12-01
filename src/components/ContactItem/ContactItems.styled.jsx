import styled from 'styled-components';

export const ContactItem = styled.li`
  padding-bottom: ${props => props.theme.spacing(1)};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: inherit;
  font-weight: normal;
  font-size: 20px;
  border-color: inherit;
  border-bottom: 1px solid;

  &::before {
    display: inline-block;
    padding-right: 8px;
    color: inherit;
    content: '•';
  }

  &:hover,
  &:focus {
    color: red;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const BtnWrap = styled.div`
  margin-left: auto;
  display: flex;
  gap: ${props => props.theme.spacing(4)};
`;
