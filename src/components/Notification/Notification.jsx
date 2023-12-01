import PropTypes from 'prop-types';
import { OkButton } from 'components';
import { BtnWrap, Message, NotificationBox } from './Notification.styled';

export const Notification = ({
  message,
  updateNotification,
  setNotification,
}) => {
  return (
    <NotificationBox>
      <Message>{message}</Message>
      <BtnWrap>
        <OkButton type="button" onClick={() => setNotification('')}>
          Cancel
        </OkButton>
        <OkButton type="button" onClick={() => updateNotification()}>
          UpDate
        </OkButton>
      </BtnWrap>
    </NotificationBox>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  updateNotification: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};
