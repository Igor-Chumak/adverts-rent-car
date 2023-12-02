import styled from 'styled-components';

export const SectionBox = styled.section`
  /* padding-top: ${props => props.theme.spacing(4)}; */
  /* padding-bottom: ${props => props.theme.spacing(3)}; */
  /* &:last-child {
    padding-bottom: ${props => props.theme.spacing(25)};
  } */
  outline: 1px solid blue;
`;

export const Title = styled.h2`
  margin-bottom: ${props => props.theme.spacing(3)};
  /* background-color: ${props => props.theme.bg_color.item}; */
  color: ${props => props.theme.colors.title};
  font-weight: 800;
  font-size: 28px;
  text-align: center;
  letter-spacing: 0.1em;
`;
