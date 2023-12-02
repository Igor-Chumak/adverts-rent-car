import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { useAuth } from 'hooks';
import { Loader, Navigation, UserMenu, Header } from 'components';

export const SharedLayout = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = true;

  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <UserMenu />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
