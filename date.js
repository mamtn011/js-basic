console.log("Date connected");

// Javascript Date methods..............................

const date = new Date();

console.log(date);

// new Date() can accept arguments of (year, month, day, hours, minutes, seconds, milliseconds)
console.log(new Date(2020, 8, 4));

// new Date() also can accept arguments a date as string. ISO:("2015-03-25"), Short:("03/25/2015"), Long: ("25 Mar 2015") or ("Mar 25 2015")
console.log(new Date("2015-03-23"));
console.log(new Date("03/24/2015"));
console.log(new Date("Mar 25 2015"));
console.log(new Date("26 Mar 2015"));

// date is an object ..we can't show an object on browser..we have to make it string
console.log(typeof date); // date is object
console.log(date.toString()); // to make string
console.log(date.toISOString()); // to make ISO formate
console.log(date.toUTCString()); // to make UTC fomate
console.log(date.toTimeString()); // to show only time
console.log(date.toLocaleString()); // to show with local formate
console.log(date.toLocaleTimeString()); // to show only time in local formate
console.log(date.toLocaleDateString()); // to show only date in local formate

// to get specific information we can use ..
console.log(date.getFullYear()); // to get year
console.log(date.getMonth()); // to get month(start from 0-11. 0=January)
console.log(date.getDate()); // to get date(tarikh 1-31)
console.log(date.getDay()); // to get day(start from 0-6. 0=Saturday)
console.log(date.getHours()); // to get hour(0-23)
console.log(date.getMinutes()); // to get minutes(0-59)
console.log(date.getSeconds()); // to get minutes(0-59)
console.log(date.getMilliseconds()); // to get milliseconds (0-999)
console.log(date.getTime()); // to get milliseconds from 1st Jan 1970

// to set specific information we can use ..
console.log(date.setFullYear(2020)); // to set year
console.log(date.getFullYear()); // after setting year
console.log(date.setMonth(0)); // to set month(start from 0-11. 0=January)
console.log(date.setDate(23)); // to set date(tarikh 1-31)
console.log(date.setHours(21)); // to set hour(0-23)
console.log(date.setMinutes(56)); // to set minutes(0-59)
console.log(date.setSeconds(33)); // to set minutes(0-59)
console.log(date.setMilliseconds(600)); // to set milliseconds (0-999)
console.log(date.setTime(45685555677));
console.log(date.getFullYear()); // after setting time

// curent time function
const getCurrentTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const frmtHour = hour < 10 ? "0" + hour : hour;
  const minute = date.getMinutes();
  const frmtMinute = minute < 10 ? "0" + minute : minute;
  const second = date.getSeconds();
  const frmtSecond = second < 10 ? "0" + second : second;
  return `Time is: ${frmtHour}:${frmtMinute}:${frmtSecond} now!`;
};

const repeatTime = setInterval(() => {
  console.log(getCurrentTime());
}, 1000);

clearInterval(repeatTime);

// to find distance in hours, minutes and seconds
const myFunction3 = (a, b) => {
  const totalDistance = Math.abs(a.getTime() - b.getTime());
  const hours = Math.trunc(totalDistance / 3600000);
  const minutes = Math.trunc((totalDistance % 3600000) / 60000);
  const seconds = (totalDistance % 60000) / 1000;
  const obj = {
    hrs: hours,
    min: minutes,
    sec: seconds,
  };
  return obj;
};

console.log(
  myFunction3(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"))
);
console.log(
  myFunction3(new Date("2000/01/01 09:50:23"), new Date("2000/01/01 08:00:00"))
);
console.log(
  myFunction3(new Date("2000/01/01 11:04:12"), new Date("2000/01/01 08:00:00"))
);
