import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api, selectIsLoading } from 'store';
import { BtnItem } from 'components';
import { BtnWrap, CardItem } from './CardItem.styled';
import { Modal } from 'components/Modal/Modal';

export const CardItems = ({ advert }) => {
  const { name, number, id } = advert;
  const [openEditModal, setOpenEditModal] = useState(false);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const handleCloseEditModal = e => {
    setOpenEditModal(e);
  };

  return (
    <>
      <CardItem>
        {name} : {number}
        <BtnWrap>
          <BtnItem
            type="button"
            id={id}
            onClick={() => setOpenEditModal(advert)}
            disabled={isLoading}
          >
            Edit
          </BtnItem>
        </BtnWrap>
      </CardItem>
      {openEditModal && (
        <Modal contactEdit={advert} handleCloseModal={handleCloseEditModal} />
      )}
    </>
  );
};

CardItems.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
