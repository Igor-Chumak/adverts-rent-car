import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, Navigation, Header } from 'components';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
