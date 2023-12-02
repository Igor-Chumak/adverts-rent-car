import PropTypes from 'prop-types';

export function numberToDivide(numberString) {
  return Number(numberString)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

numberToDivide.propTypes = {
  numberString: PropTypes.string,
};
