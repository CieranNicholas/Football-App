export const getFormattedDate = (date: Date) => {
  return date.toLocaleDateString();
};

export const getFormattedTime = (date: Date) => {
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getFormattedDateDay = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
};

export const getValueByKey = (
  key: string,
  obj: Record<string, string>
): string | undefined => {
  return obj[key];
};
