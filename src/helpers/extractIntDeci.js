/**
 * extract integer part and deciaml part.
 *
 * @param {Number} num
 * @returns {Array}
 */
export default (num) => {
  if (typeof num !== 'number') {
    throw Error(`${num} is not a number`);
  }
  let i = (num > 0) ? Math.floor(num) : Math.ceil(num);

  let sepNum = String(num).split('.');
  let d = sepNum.length === 2 ? parseInt(sepNum[1], 10) : 0;
  return [i, d];
};
