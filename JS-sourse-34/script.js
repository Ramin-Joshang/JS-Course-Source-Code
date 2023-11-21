// * Date

// console.log(Date());

// * string
// const date = new Date("2000-05-05");
// const date = new Date("November 5, 2018 20:30:45");
// console.log(date);

// console.log(date);

// * Date arguments

// Date(year,month,day,hours,minutes,secondes,ms)

// const date = new Date(2020, 24, 35, 5, 12, 30, 0);
// console.log(date);


// const date = new Date(2015, 5, 25, 10, 12, 30);
// const date = new Date(2015, 5, 25, 10, 12);
// const date = new Date(2015, 5, 25, 10);
// const date = new Date(2015, 5, 25);
// const date = new Date(2015, 5);
// const date = new Date(50 * 365 * 24 * 60 * 60 * 1000);

// console.log(24 * 60 * 60 * 1000);

// console.log(date);

// const date = new Date();

// * Convert Date

// console.log(date.toString());

// console.log(date.toDateString());

// console.log(date.toUTCString());

// console.log(date.toISOString());

// * Method

const date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());

const date1 = new Date(2000, 5, 20);
const lastMs = date1.getTime();

const currentMs = date.getTime();

console.log(currentMs);
console.log(lastMs);

const finalTime = currentMs - lastMs;

const date2 = new Date(finalTime);
console.log(date2.getFullYear() - 1970);

