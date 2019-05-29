
export function findDay(year, month, date) {
  const dict = {0: "Saturday", 1: "Sunday", 2: "Monday", 3: "Tuesday", 4: "Wednesday", 5: "Thursday", 6: "Friday"}

  let a = Math.floor((14 - month) / 12);
  let y = year - a;
  let m = month + 12 * a - 2;
  let d = (date + y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + Math.floor(31 * m / 12)) % 7;

  return dict[d];
};
