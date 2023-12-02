// import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import { selectIsLoading } from 'store';
import { Button } from 'components';
import { CardWrap, ImgWrap, InfoName, InfoWrap } from './CardItem.styled';
import { Modal } from 'components/Modal/Modal';

import DEFAULT_PHOTO from 'images/no_photo.jpg';

export const CardItem = ({ advert }) => {
  const {
    id,
    year,
    make,
    model = '',
    type = '',
    img: imgURL,
    description = '',
    fuelConsumption = '',
    engineSize = '',
    accessories = [],
    functionalities = [],
    rentalPrice = '',
    rentalCompany = '',
    address = '',
    rentalConditions = '',
    mileage = 0,
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
        </ImgWrap>
        <InfoWrap>
          <InfoName>
            <p>
              {make} <span>{model}</span>, {year}
            </p>
          </InfoName>
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
