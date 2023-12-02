import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'store';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useEffect } from 'react';
import { auth } from 'store';
import { useAuth } from 'hooks';
import { Loader, RestrictedRoute, SharedLayout } from 'components';
Notify.init({
  width: '500px',
  fontSize: '20px',
  position: 'center-top',
  timeout: '2000',
  messageMaxLength: 150,
  distance: '20px',
  showOnlyTheLastOne: true,
  clickToClose: true,
  // closeButton: true,
  opacity: 1,
  warning: {
    background: '#df120b',
    textColor: '#fff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(0, 0, 0, 0.466)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,1)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
});

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(auth.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route
            path="/favorites"
            element={
              <RestrictedRoute
                redirectTo="/catalog"
                component={<FavoritesPage />}
              />
            }
          />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
      {isLoading && <Loader />}
      {error && Notify.warning(error)}
    </>
  );
};
