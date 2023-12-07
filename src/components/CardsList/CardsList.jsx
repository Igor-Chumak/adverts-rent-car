import { CardItem } from 'components';
import { CardsListBox, CardsListNoItems } from './CardsList.styled';

export const CardList = ({ advertsToList }) => {
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
    </>
  );
};
