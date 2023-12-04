import styled from 'styled-components';

export const CardWrap = styled.li`
  width: ${props => props.theme.spacing(68.5)}; // 274px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.spacing(3.5)}; // 14px;
  width: 100%;
  height: ${props => props.theme.spacing(67)}; // 268px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.imgBackground};
  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const SvgFavorite = styled.button`
  position: absolute;
  top: ${props => props.theme.spacing(3.5)}; // 14px;
  right: ${props => props.theme.spacing(3.5)}; // 14px;
  width: ${props => props.theme.spacing(4.5)}; // 18px;
  height: ${props => props.theme.spacing(4.5)}; // 18px;
  &:hover svg,
  &:focus svg {
    fill: #3470ffcc;
  }
`;

export const InfoWrap = styled.div`
  margin-bottom: ${props => props.theme.spacing(7)}; // 28px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${props => props.theme.spacing(2)}; // 8px;
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
    margin-right: ${props => props.theme.spacing(2.25)}; // 9px;
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
    padding-left: ${props => props.theme.spacing(1.5)}; // 6px;
    padding-right: ${props => props.theme.spacing(1.5)}; // 6px;
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
