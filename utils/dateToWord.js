const months = [
  null,
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const dateToWord = (date) => {
  const [year, month, day] = date.split("-");
  return `${months[month]} ${day}, ${year}`;
};
