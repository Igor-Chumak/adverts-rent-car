import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardList, Section, WrapPage } from 'components';
import {
  api,
  LIMIT_PAGE_API,
  selectStatistic,
  clearAdverts,
  selectVisibleAdverts,
} from 'store';
import { BtnLoadMore, Filters } from 'components';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const advertsToList = useSelector(selectVisibleAdverts);
  const statistic = useSelector(selectStatistic);
  const [updated, setUpdated] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(false);
  const pageMax = Math.floor(statistic?.totalAds / LIMIT_PAGE_API) + 1;
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    if (updated) {
      dispatch(api.getAdvertThunk({ page }));
    }
  }, [dispatch, page, updated]);

  useEffect(() => {
    setUpdated(true);
  }, []);

  useEffect(() => {
    if (
      advertsToList.length < 12 ||
      advertsToList.length === statistic?.totalAds
    ) {
      setIsLoadMoreVisible(false);
      return;
    }
    setIsLoadMoreVisible(true);
  }, [advertsToList?.length, statistic?.totalAds]);

  const handlePagination = () => {
    if (page === pageMax) return;
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
            Load more{' '}
            <span>
              {page === pageMax ? pageMax : page + 1} from {pageMax}
            </span>
          </BtnLoadMore>
        )}
      </Section>
    </WrapPage>
  );
};
export default CatalogPage;
