export const point = (price) => {
  if (!price) return;

  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const comaToDot = (price) => {
  return price.replace(/,/g, ".");
};

export const dotToComa = (price) => {
  return price.toString().replace(/\./g, ",");
};

export const decimals = (price) => {
  return Number.parseFloat(price).toFixed(2);
};
