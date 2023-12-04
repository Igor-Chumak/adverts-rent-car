import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';

import { selectIsLoading } from 'store';
import { Button } from 'components';
import {
  CardWrap,
  ImgWrap,
  InfoLine,
  InfoName,
  InfoWrap,
  SvgFavorite,
} from './CardItem.styled';
import { Modal } from 'components/Modal/Modal';

import DEFAULT_PHOTO from 'assets/no_photo.jpg';
import { ReactComponent as IconNoFavorite } from 'assets/no_favorite.svg';
import { ReactComponent as IconFavorite } from 'assets/favorite.svg';

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
  const [openEditModal, setOpenEditModal] = useState(false);
  const [favorite, setFavorite] = useState(false);
  // const dispatch = useDispatch();

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
            onClick={() => setFavorite(!favorite)}
            disabled={isLoading}
          >
            {favorite ? <IconFavorite /> : <IconNoFavorite />}
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
