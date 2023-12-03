import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

import { numberToDivide } from 'utilities/number_to_divide';
import {
  Overlay,
  ModalWrapper,
  BtnClose,
  ImgWrap,
  InfoName,
  InfoWrap,
  Text,
  RentalWrap,
  RentalLineWrap,
  AccessFuncWrap,
  // InfoLine,
} from './Modal.styled';
import DEFAULT_PHOTO from 'images/no_photo.jpg';
import { InfoLine } from 'components/CardItem/CardItem.styled';

export const Modal = ({ advert, handleCloseModal }) => {
  // const dispatch = useDispatch();
  const {
    id,
    year,
    make,
    model = '',
    type = '',
    img: imgURL = '',
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

  const rentalConditionsArray = rentalConditions.split('\n');

  const onClickOverlay = e => {
    if (e.target === e.currentTarget) {
      handleCloseModal('');
    }
  };

  useEffect(() => {
    const onClickEscape = e => {
      if (e.key === 'Escape') {
        handleCloseModal('');
      }
    };
    window.addEventListener('keydown', onClickEscape);
    return () => {
      window.removeEventListener('keydown', onClickEscape);
    };
  }, [handleCloseModal]);

  return createPortal(
    <Overlay onClick={onClickOverlay}>
      <ModalWrapper>
        <BtnClose type="button" id={id} onClick={() => handleCloseModal('')}>
          X
        </BtnClose>
        <InfoWrap>
          <ImgWrap>
            <img
              src={imgURL ? `${imgURL}` : DEFAULT_PHOTO}
              alt={`${make} ${model} id:${id}`}
            />
          </ImgWrap>
          <InfoName>
            <p>
              {make} <span>{model}</span>, {year}
            </p>
          </InfoName>
          <InfoLine>
            <p>{address ? address.split(',')[1] : ''}</p>
            <p>{address ? address.split(',')[2] : ''}</p>
            <p>Id: {id}</p>
            <p>Year: {year}</p>
            <p>Type: {type}</p>
          </InfoLine>
          <InfoLine>
            <p>Fuel Consumption: {fuelConsumption}</p>
            <p>Engine Size: {engineSize}</p>
          </InfoLine>
          <Text>{description}</Text>
        </InfoWrap>
        <AccessFuncWrap>
          <Text>Accessories and functionalities:</Text>
          <InfoLine>
            <p>{accessories[0]}</p>
            <p>{accessories[1]}</p>
            <p>{accessories[2]}</p>
          </InfoLine>
          <InfoLine>
            <p>{functionalities[0]}</p>
            <p>{functionalities[1]}</p>
            <p>{functionalities[2]}</p>
          </InfoLine>
        </AccessFuncWrap>
        <RentalWrap>
          <Text>Rental Conditions:</Text>
          <RentalLineWrap>
            <p>
              {rentalConditionsArray[0].split(':')[0]}:
              <span>{rentalConditionsArray[0].split(':')[1]}</span>
            </p>
            <p>{rentalConditionsArray[1]}</p>
          </RentalLineWrap>
          <RentalLineWrap>
            <p>{rentalConditionsArray[2]}</p>
            <p>
              Mileage: <span>{numberToDivide(mileage)}</span>
            </p>
            <p>
              Price: <span>{rentalPrice.slice(1)}$</span>
            </p>
          </RentalLineWrap>
        </RentalWrap>
      </ModalWrapper>
    </Overlay>,
    document.querySelector('#root_modal')
  );
};

// ModalWrapper.propTypes = {
//   handleCloseModal: PropTypes.func,
//   contactEdit: PropTypes.exact({
//     name: PropTypes.string,
//     number: PropTypes.string,
//     id: PropTypes.string,
//   }),
// };
