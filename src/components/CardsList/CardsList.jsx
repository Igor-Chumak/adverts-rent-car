import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { api, LIMIT_PAGE_API, selectStatistic, selectAdverts } from 'store';
import { BtnLoadMore, CardItem } from 'components';
import { CardsListBox, CardsListNoItems } from './CardsList.styled';

export const CardList = () => {
  const dispatch = useDispatch();
  // const advertsToList = useSelector(selectVisibleAdverts);
  const advertsToList = useSelector(selectAdverts);
  const statistic = useSelector(selectStatistic);
  const [updated, setUpdated] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(false);
  const pageMax = Math.floor(statistic?.totalAds / LIMIT_PAGE_API) + 1;

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
  }, [advertsToList.length, statistic?.totalAds]);

  const handlePagination = () => {
    if (page === pageMax) return;
    setPage(prev => prev + 1);
  };

  return (
    <>
      <CardsListBox>
        {advertsToList.length === 0 && (
          <CardsListNoItems>
            There is no advert for your search terms
          </CardsListNoItems>
        )}
        {advertsToList.map(advert => (
          <CardItem advert={advert} key={advert.id} />
        ))}
      </CardsListBox>
      {isLoadMoreVisible && (
        <BtnLoadMore type="button" onClick={handlePagination}>
          Load more{' '}
          <span>
            {page === pageMax ? pageMax : page + 1} from {pageMax}
          </span>
        </BtnLoadMore>
      )}
    </>
  );
};
