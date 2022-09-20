export function getFormattedDate(date) {
  // return `${date.getDate() < 10 ? "0" : ""}${date.getDate()}-${
  //   date.getMonth() + 1 < 10 ? "0" : ""
  // }${date.getMonth() + 1}-${date.getFullYear()}`;
  return date.toISOString().slice(0, 10);
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
