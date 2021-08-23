export const getRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

export const getRandomColor = () => {
  const r = getRandomNumber(254);
  const g = getRandomNumber(254);
  const b = getRandomNumber(254);
  return `rgb(${r},${g},${b})`;
};
