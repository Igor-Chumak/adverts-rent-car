import styled from 'styled-components';

export const CardWrap = styled.li`
  /* padding-bottom: ${props => props.theme.spacing(1)}; */
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

  outline: 1px solid green;
`;

export const ImgWrap = styled.div`
  margin-bottom: 14px;
  width: 100%;
  height: 268px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    border-radius: 14px;
  }
  outline: 1px solid red;
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
  outline: 1px solid blue;
`;

export const InfoName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.5;
  outline: 1px solid yellow;
  & span {
    color: ${props => props.theme.colors.accent};
  }
`;
