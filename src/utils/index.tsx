import { ENumberInterval } from "../types";

export function checkNumInterval(first: number, second: number) {
  let status;
  if (first > second) {
    status = ENumberInterval.INCREASE;
  } else if (second > first) {
    status = ENumberInterval.DECREASE;
  } else {
    status = ENumberInterval.EQUAL;
  }
  return { value: first, status };
}

export function dateFormatter(inputDate: string) {
  const [datePart] = inputDate.split(" ");
  const [year, month, day] = datePart.split("-");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
