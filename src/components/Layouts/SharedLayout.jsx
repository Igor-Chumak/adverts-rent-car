import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Loader, Navigation, UserMenu, AuthNav, Header } from 'components';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
