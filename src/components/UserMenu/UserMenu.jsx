import { useDispatch } from 'react-redux';
import { auth } from 'store';
import { useAuth } from 'hooks';
import { ButtonLogOut, UserName, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <ButtonLogOut type="button" onClick={() => dispatch(auth.logOut())}>
        Log Out
      </ButtonLogOut>
    </Wrapper>
  );
};
