module.exports = function reverse (n) {
    let positive = n;
    let result = 0;
  if (n < 0) {
    positive *= (-1);
    result = positive.toString().split('').reverse('').join('');

  } else {
    result = positive.toString().split('').reverse('').join('');
  }
  return +result;
}
