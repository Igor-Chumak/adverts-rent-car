import styled from 'styled-components';

export const WrapPage = styled.main`
  max-height: calc(100vh - 60px);
  /* max-height: 100%; */
  position: relative;
  /* margin-top: 65px; */
  top: 60px;
  overflow-y: auto;
  /* padding-top: 77px; */
  /* outline: 1px solid yellow; */
`;

export const Container = styled.div`
  /* position: relative; */
  max-width: 1200px;
  /* max-width: 100%; */

  padding-left: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(2)};

  margin-left: auto;
  margin-right: auto;
  /* outline: 1px solid red; */
`;

export const WrapHomePage = styled(WrapPage)`
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.title};
  background: ${props => props.theme.bodyImage};
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
