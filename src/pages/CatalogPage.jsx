import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardList, Section, WrapPage } from 'components';
import {
  api,
  clearAdverts,
  selectVisibleAdverts,
  selectIsLoadMoreVisible,
} from 'store';
import { BtnLoadMore, Filters } from 'components';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const advertsToList = useSelector(selectVisibleAdverts);
  const [updated, setUpdated] = useState(false);
  const [page, setPage] = useState(1);
  const isLoadMoreVisible = useSelector(selectIsLoadMoreVisible);
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    if (updated) {
      dispatch(api.getAdvertThunk({ page }));
    }
  }, [dispatch, page, updated]);

  useEffect(() => {
    setUpdated(true);
  }, []);

  const handlePagination = () => {
    setPage(prev => prev + 1);
  };

  const handleFormSubmit = () => {
    const { make } = filters;
    dispatch(clearAdverts());
    dispatch(api.getAdvertThunk({ make }));
  };

  return (
    <WrapPage>
      <Section title="">
        <Filters onFormSubmit={handleFormSubmit} />
        <CardList advertsToList={advertsToList} />
        {isLoadMoreVisible && (
          <BtnLoadMore type="button" onClick={handlePagination}>
            Load more
          </BtnLoadMore>
        )}
      </Section>
    </WrapPage>
  );
};
export default CatalogPage;
