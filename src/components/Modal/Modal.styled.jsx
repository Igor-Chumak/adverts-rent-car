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
  /* border: 1px solid; */
  outline: 1px solid;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.largest};
  opacity: 80%;
`;

export const ImgWrap = styled.div`
  position: relative;
  margin-bottom: 14px;
  width: 100%;
  height: 248px;
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
