const specificDate = new Date("Octorber 20, 2024");

const year = specificDate.getFullYear();

const month = specificDate.getMonth();

const Dates = specificDate.getDate();

const formattedDate = Intl.DateTimeFormat
console.log(year, month, Dates);