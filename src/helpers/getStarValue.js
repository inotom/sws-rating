import extractIntDeci from '../helpers/extractIntDeci.js';

/**
 * return star wax and wane size value.
 *
 * @param {Number} index Star component index value.
 * @param {Number} rateValue Rate model value.
 * @returns {Number}
 */
export default (index, rateValue) => {
  const [integer, decimal] = extractIntDeci(parseFloat(rateValue.toFixed(1)));
  if (index <= integer) {
    return 10;
  } else if (index - 1 === integer) {
    return decimal;
  }
  return 0;
};
