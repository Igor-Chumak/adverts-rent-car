import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

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
  ModalCloseIcon,
} from './Modal.styled';
import DEFAULT_PHOTO from 'assets/no_photo.jpg';
import { InfoLine } from 'components/CardItem/CardItem.styled';
import { BtnRental } from 'components';
import sprite from 'assets/sprite.svg';

export const Modal = ({ advert, handleCloseModal }) => {
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
        <BtnClose type="button" onClick={() => handleCloseModal('')}>
          <ModalCloseIcon>
            <use href={`${sprite}#icon-x`}></use>
          </ModalCloseIcon>
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
        <BtnRental href="tel:+380730000000">Rental car</BtnRental>
      </ModalWrapper>
    </Overlay>,
    document.querySelector('#root_modal')
  );
};

ModalWrapper.propTypes = {
  handleCloseModal: PropTypes.func,
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
