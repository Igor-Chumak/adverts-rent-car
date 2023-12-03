import styled from 'styled-components';

export const CardWrap = styled.li`
  /* padding-bottom: ${props => props.theme.spacing(1)}; */
  max-width: 274px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* color: inherit; */
  /* font-weight: normal;
  font-size: 20px; */
  /* border-color: inherit;
  border-bottom: 1px solid; */

  /* &:last-child {
    border-bottom: none;
  } */
`;

export const ImgWrap = styled.div`
  position: relative;
  margin-bottom: 14px;
  width: 100%;
  height: 268px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    border-radius: 14px;
  }
  outline: 1px solid blue;
`;

export const SvgFavorite = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  /* stroke: ${props => props.theme.colors.dark};
  fill: ${props => props.theme.colors.dark}; */
`;

export const InfoWrap = styled.div`
  margin-bottom: 28px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  color: inherit;
`;

export const InfoName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  & span {
    color: ${props => props.theme.colors.accent};
  }
  & p:last-child {
    margin-right: 9px;
  }
`;

export const InfoLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.smallest};
  line-height: 1.5;
  opacity: 50%;
  white-space: nowrap;
  overflow: hidden;
  & p {
    padding-left: 6px;
    padding-right: 6px;
    border-color: inherit;
    border-right: 1px solid;
  }
  & p:first-child {
    padding-left: 0px;
  }
  & p:last-child {
    padding-right: 0px;
    border-right: none;
  }
`;
