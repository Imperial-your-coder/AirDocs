module.exports = function formatMontant(value){
  if (typeof value !== 'number') value = Number(value) || 0;
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' FC';
};
