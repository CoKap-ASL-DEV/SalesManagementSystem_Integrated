function numberWithCommas(x) {
  return x.toLocaleString(undefined, {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default numberWithCommas;
