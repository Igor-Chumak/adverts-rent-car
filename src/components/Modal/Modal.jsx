import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWrapper } from './Modal.styled';
import {
  ContactFormForm,
  ContactFormInput,
  ContactFormLabel,
  ContactFormSubmit,
} from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { api } from 'store';

export const Modal = ({ advertDetail, handleCloseModal }) => {
  const dispatch = useDispatch();

  const { name, number, id } = advertDetail;
  const [nameEdit, setNameEdit] = useState(name);
  // const [numberEdit, setNumberEdit] = useState(number);

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
        <>
          <ContactFormForm onSubmit={handleSubmit}>
            <ContactFormLabel>
              Name
              <ContactFormInput
                type="text"
                name="name"
                minLength="2"
                maxLength="22"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder=""
                required
                value={nameEdit}
                onChange={e => setNameEdit(e.target.value)}
              />
            </ContactFormLabel>
            <ContactFormSubmit type="submit">UpDate</ContactFormSubmit>
          </ContactFormForm>
        </>
      </ModalWrapper>
    </Overlay>,
    document.querySelector('#root_modal')
  );
};

ModalWrapper.propTypes = {
  handleCloseModal: PropTypes.func,
  contactEdit: PropTypes.exact({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};
