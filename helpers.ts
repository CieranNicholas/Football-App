export const getFormattedDate = (date: Date) => {
  return date.toLocaleDateString();
};

export const getFormattedTime = (date: Date) => {
  return date.toLocaleTimeString();
};

export const getValueByKey = (
  key: string,
  obj: Record<string, string>
): string | undefined => {
  return obj[key];
};
