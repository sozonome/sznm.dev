export const dateFormatLong = (date: string, time: boolean = false) => {
  const convertedDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const optionsWithoutTime = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return convertedDate.toLocaleDateString(
    "default",
    time ? options : optionsWithoutTime
  );
};
