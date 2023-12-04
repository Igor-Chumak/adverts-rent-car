import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoading } from 'store';
import { Button } from 'components';
import {
  FavoriteIconStroke,
  FavoriteIconFill,
  CardWrap,
  ImgWrap,
  InfoLine,
  InfoName,
  InfoWrap,
  SvgFavorite,
} from './CardItem.styled';
import { Modal } from 'components/Modal/Modal';
import { removeFromFavorites } from 'store';
import { addToFavorites } from 'store';

import DEFAULT_PHOTO from 'assets/no_photo.jpg';
import sprite from 'assets/sprite.svg';

export const CardItem = ({ advert }) => {
  const {
    id,
    year,
    make,
    model = '',
    type = '',
    img: imgURL = '',
    accessories = [],
    rentalPrice = '',
    rentalCompany = '',
    address = '',
  } = advert;
  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = useState(false);
  const favorites = useSelector(state => state.favorites.items) ?? [];
  const isFavorite = favorites.some(favorite => favorite.id === id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(advert));
    }
  };

  const isLoading = useSelector(selectIsLoading);

  const handleCloseEditModal = e => {
    setOpenEditModal(e);
  };

  return (
    <>
      <CardWrap>
        <ImgWrap>
          <img
            src={imgURL ? `${imgURL}` : DEFAULT_PHOTO}
            alt={`${make} ${model} id:${id}`}
          />
          <SvgFavorite
            type="button"
            id={id}
            onClick={() => handleFavorite()}
            disabled={isLoading}
          >
            {isFavorite ? (
              <FavoriteIconFill>
                <use href={`${sprite}#icon-active`}></use>
              </FavoriteIconFill>
            ) : (
              <FavoriteIconStroke>
                <use href={`${sprite}#icon-normal`}></use>
              </FavoriteIconStroke>
            )}
          </SvgFavorite>
        </ImgWrap>
        <InfoWrap>
          <InfoName>
            <p>
              {make} <span>{model}</span>, {year}
            </p>
            <p>{rentalPrice}</p>
          </InfoName>
          <InfoLine>
            <p>{address ? address.split(',')[1] : ''}</p>
            <p>{address ? address.split(',')[2] : ''}</p>
            <p>{rentalCompany}</p>
          </InfoLine>
          <InfoLine>
            <p>{type}</p>
            <p>{make}</p>
            <p>{id}</p>
            <p>{accessories[0]}</p>
          </InfoLine>
        </InfoWrap>
        <Button
          type="button"
          id={id}
          onClick={() => setOpenEditModal(advert)}
          disabled={isLoading}
        >
          Learn more
        </Button>
      </CardWrap>
      {openEditModal && (
        <Modal advert={advert} handleCloseModal={handleCloseEditModal} />
      )}
    </>
  );
};

CardItem.propTypes = {
  advert: PropTypes.exact({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    fuelConsumption: PropTypes.string,
    engineSize: PropTypes.string,
    accessories: PropTypes.array,
    functionalities: PropTypes.array,
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
    rentalConditions: PropTypes.string,
    mileage: PropTypes.number,
  }),
};
