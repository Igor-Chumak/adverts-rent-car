import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  api,
  // selectTotalAds,
  // selectVisibleAdverts,
  selectStatistic,
  selectAdverts,
} from 'store';
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

  useEffect(() => {
    if (updated) {
      dispatch(api.getAdvertThunk({ page }));
    }
    return () => setUpdated(true);
  }, [dispatch, page, updated]);

  // useEffect(() => {
  //   setUpdated(true);
  // }, []);

  useEffect(() => {
    if (advertsToList.length >= 12) {
      setIsLoadMoreVisible(true);
    }
    if (advertsToList.length === statistic?.totalAds) {
      setIsLoadMoreVisible(false);
    }
  }, [advertsToList.length, statistic?.totalAds]);

  return (
    <>
      <CardsListBox>
        {advertsToList.length === 0 && (
          <CardsListNoItems>
            There is no advert for your search terms
          </CardsListNoItems>
        )}
        {advertsToList.map(advert => (
          <CardItem
            advert={advert}
            key={advert.id}
            isLoadMoreVisible={isLoadMoreVisible}
          />
        ))}
      </CardsListBox>
      {advertsToList.length === 12 && <BtnLoadMore>Load more</BtnLoadMore>}
    </>
  );
};
