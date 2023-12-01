import styled from 'styled-components';

export const Container = styled.div`
  /* position: relative; */
  max-width: 1200px;

  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;
  /* outline: 1px solid red; */
`;

export const ContainerPage = styled(Container)`
  height: calc(100vh - 77px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.title};
`;

export const ContainerHeader = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(8)};
`;
