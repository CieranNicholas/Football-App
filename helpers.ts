export const getFormattedDate = (date: Date) => {
  return date.toLocaleDateString();
};

export const getFormattedTime = (date: Date) => {
  return date.toLocaleTimeString();
};
