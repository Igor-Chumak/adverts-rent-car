import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(5)};
  font-weight: 700;
  font-size: 24px;
`;

export const UserName = styled.p`
  margin: 0;
`;

export const ButtonLogOut = styled.button`
  padding: 8px 12px;
  /* border: 1px solid black; */
  /* color: black; */
  color: #f5f5e3;
  font-weight: 700;
  font-size: 16px;
  transition: 0.1s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  border-radius: 8px;
  /* background-color: ${props => props.theme.bg_color.btn}; */
  box-shadow: ${props => props.theme.shadows.btn_vol};

  &:hover,
  &:focus {
    color: red;
    box-shadow: ${props => props.theme.shadows.btn_vol_hover};
  }

  &:last-child {
    margin-right: ${props => props.theme.spacing(30)};
  }
`;
