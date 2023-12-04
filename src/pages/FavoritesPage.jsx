import { useSelector } from 'react-redux';

import { CardItem, Section, WrapPage } from 'components';
import { CardsListBox } from 'components/CardsList/CardsList.styled';

const FavoritesPage = () => {
  const favorites = useSelector(store => store.favorites.items) ?? [];
  return (
    <WrapPage>
      <Section title="">
        <CardsListBox>
          {favorites.map(advert => (
            <CardItem advert={advert} key={advert.id} />
          ))}
        </CardsListBox>
      </Section>
    </WrapPage>
  );
};

export default FavoritesPage;
