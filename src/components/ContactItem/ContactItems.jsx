import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api, selectIsLoading } from 'store';
import { BtnItem } from 'components';
import { BtnWrap, ContactItem } from './ContactItems.styled';
import { Modal } from 'components/Modal/Modal';

export const ContactItems = ({ contact }) => {
  const { name, number, id } = contact;
  const [openEditModal, setOpenEditModal] = useState(false);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const handleDelete = itemId => dispatch(api.deleteContactThunk(itemId));

  const handleCloseEditModal = e => {
    setOpenEditModal(e);
  };

  return (
    <>
      <ContactItem>
        {name} : {number}
        <BtnWrap>
          <BtnItem
            type="button"
            id={id}
            onClick={() => setOpenEditModal(contact)}
            disabled={isLoading}
          >
            Edit
          </BtnItem>
          <BtnItem
            type="button"
            id={id}
            onClick={() => handleDelete(id)}
            disabled={isLoading}
          >
            Delete
          </BtnItem>
        </BtnWrap>
      </ContactItem>
      {openEditModal && (
        <Modal contactEdit={contact} handleCloseModal={handleCloseEditModal} />
      )}
    </>
  );
};

ContactItems.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
