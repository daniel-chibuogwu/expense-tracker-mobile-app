export function getFormattedDate(date) {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

//use this to solve the single digits return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
