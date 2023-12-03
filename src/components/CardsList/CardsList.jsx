import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  api,
  // selectVisibleAdverts,
  selectAdverts,
} from 'store';
import { BtnLoadMore, CardItem } from 'components';
import { CardsListBox, CardsListNoItems } from './CardsList.styled';

export const CardList = () => {
  const dispatch = useDispatch();
  // const advertsToList = useSelector(selectVisibleAdverts);
  const advertsToList = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(api.getAdvertThunk({ page: 1 }));
  }, [dispatch]);

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
      {advertsToList.length === 12 && <BtnLoadMore>Load more</BtnLoadMore>}
    </>
  );
};
