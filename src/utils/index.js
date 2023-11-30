import { format, parse } from "date-fns";

export function formatDate(inputDate, outputFormat = "dd-MM-yyyy") {
  const defaultInputFormat = "EEE MMM dd yyyy HH:mm:ss XXXX";
  const parsedDate = parse(inputDate, defaultInputFormat, new Date());
  const formattedDate = format(parsedDate, outputFormat);
  return formattedDate;
}

export function calculateDiscount(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;

  const remainingAmount = originalPrice - discountAmount;

  return remainingAmount;
}

export function getTouchedFields(values, touched) {
  const touchedFields = {};

  Object.keys(values).forEach((key) => {
    if (touched[key]) {
      touchedFields[key] = values[key];
    }
  });

  return touchedFields;
}

export const shuffleArray = (array) => {
  let shuffledArray = [...array];
  shuffledArray.sort(() => Math.random() - 0.5);
  return shuffledArray;
};
