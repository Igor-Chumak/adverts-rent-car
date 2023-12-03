// import PropTypes from 'prop-types';
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

import DEFAULT_PHOTO from 'images/no_photo.jpg';
import iconNoFavorite from 'images/no_favorite.svg';
// import iconFavorite from 'images/favorite.svg';

export const CardItem = ({ advert }) => {
  const {
    id,
    year,
    make,
    model = '',
    type = '',
    img: imgURL = '',
    // description = '',
    // fuelConsumption = '',
    // engineSize = '',
    accessories = [],
    // functionalities = [],
    rentalPrice = '',
    rentalCompany = '',
    address = '',
    // rentalConditions = '',
    // mileage = 0,
  } = advert;
  const [openEditModal, setOpenEditModal] = useState(false);
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
            width={274}
          />
          <SvgFavorite
            type="button"
            id={id}
            onClick={() => setOpenEditModal(advert)}
            disabled={isLoading}
          >
            <img src={iconNoFavorite} alt="" />
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
        <Modal advertDetail={advert} handleCloseModal={handleCloseEditModal} />
      )}
    </>
  );
};

// CardItem.propTypes = {
//   advert: PropTypes.exact({
//     name: PropTypes.string,
//     number: PropTypes.string,
//     id: PropTypes.number.isRequired,
//   }).isRequired,
// };

// CardItem.propTypes = {
//   advert: PropTypes.exact({
//     name: PropTypes.string,
//     number: PropTypes.string,
//     id: PropTypes.string,
//   }).isRequired,
// };
