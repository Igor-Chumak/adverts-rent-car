import styled from 'styled-components';
import {} from 'components/CardItem/CardItem.styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWrapper = styled.div`
  overflow-y: auto;
  position: relative;
  width: ${props => props.theme.spacing(135.25)}; // 541
  height: ${props => props.theme.spacing(188)}; // 752
  padding: ${props => props.theme.spacing(10)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${props => props.theme.spacing(6)};
  background-color: ${props => props.theme.body};
  border-radius: ${props => props.theme.spacing(6)};
  border-color: ${props => props.theme.colors.white};
  outline: 1px solid;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: ${props => props.theme.spacing(4)}; // 16px;
  right: ${props => props.theme.spacing(4)}; // 16px;
  width: ${props => props.theme.spacing(6)}; // 24px;
  height: ${props => props.theme.spacing(6)}; // 24px;
  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.largest};
  opacity: 80%;
`;

export const ImgWrap = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.spacing(3.5)}; // 14px;
  width: 100%;
  height: ${props => props.theme.spacing(62)}; //248px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }
  outline: 1px solid blue;
`;

export const InfoName = styled.div`
  margin-bottom: ${props => props.theme.spacing(2)}; // 8px;
  max-width: 277;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.large};
  line-height: 1.33;
  white-space: nowrap;
  overflow: hidden;
  & span {
    color: ${props => props.theme.colors.accent};
  }
  outline: 1px solid blue;
`;
