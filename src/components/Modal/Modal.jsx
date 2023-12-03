import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

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
  // InfoLine,
} from './Modal.styled';
import DEFAULT_PHOTO from 'images/no_photo.jpg';
import { InfoLine } from 'components/CardItem/CardItem.styled';
// import { ReactComponent as IconBtnClose } from 'images/x.svg';

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

  const handleSubmit = e => {
    e.preventDefault();
    // const updateContact = { name: nameEdit, number: numberEdit, id };
    // dispatch(api.updateContactThunk(updateContact));
    handleCloseModal('');
  };

  return createPortal(
    <Overlay onClick={onClickOverlay}>
      <ModalWrapper>
        <BtnClose type="button" id={id} onClick={handleSubmit}>
          X{/* <IconBtnClose /> */}
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
        <RentalWrap>
          <Text>Rental Conditions:</Text>
          <RentalLineWrap>
            <p>Minimum age : 25</p>
            <p>Valid driver's license</p>
          </RentalLineWrap>
          <RentalLineWrap>
            <p>Security deposit required</p>
            <p>
              Mileage: <span>5,858</span>
            </p>
            <p>
              Price: <span>40$</span>
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
