var myNname = "Mustakim Al mobin";
var myCell = "01736624011";

console.log(myNname, myCell);

// Variable declaration and printing....
var x = 9;
const myname = "mobin";
let phone = "01736624011";

console.log(`X: ${x}
Name: ${myname}
Phone: ${phone}`);

// Object declaration and printing.... key: value
const myObject1 = {
  myNickName: "Mobin",
  myPhone: "01736624011",
  myHome: 14,
  isAvailable: true,
};
console.log(`${myObject1.myHome}, ${myObject1["myNickName"]}`); //print direct with dot or like array with quotation

const { myNickName, myHome, myPhone } = myObject1; // object destructuring..Name must be same...no need to follow same order
console.log(myNickName, myPhone, myHome);

// Array declaration and printing....
const array1 = ["potato", 3, 56, true];
console.log(`${array1[2]}`);

const [aname, qunt, , avail] = array1; // array destructuring..follow same order..Name can be anything..
console.log(aname, qunt, avail);

const myArray1 = [
  //Object in array
  {
    objName: "Mobin",
    objPhone: "01612322542",
    objNum: 2343,
  },
  {
    objName: "Mustakim",
    objPhone: "0173624011",
    objNum: 1991,
  },
];
const [objarr1, objarr2] = myArray1; // array destruct
console.log(objarr1);
console.log(objarr2);

// Function declaration and call with diffrent type of value/reference....
function myFunc1() {
  //function without parameter
  console.log("Hello world!");
}
myFunc1();

function myFunc2(obj1, arr1) {
  //function with an object/array and multiple parameter
  console.log(obj1, arr1);
}
myFunc2(myObject1, array1);

function myFunc3(b, c, d = 10) {
  //function with multiple reference and result returning and parameter default value
  let a = b + c + d;
  return a;
}
let s1 = myFunc3(16, 20);
let s2 = myFunc3(12, 12, 12);
console.log(`${s1}`);
console.log(`${s2}`);

function myFunc4(obj1) {
  //function with an object by return
  return `${myObject1.myNickName}, ${myObject1.myHome}, ${myObject1.myPhone}, ${myObject1.isAvailable}`;
}
console.log(myFunc4(myObject1));
//we can declare a function in many ways....example given bellow..
const funcName1 = function () {
  // way 1
  return console.log("Hello World!");
};
funcName1();
const funcName2 = () => {
  //way 2
  return console.log("Hello World!");
};
funcName2();
const funcName3 = () => console.log("Hello World!"); //way 3 ...only for a return statement
funcName3();
const funcName4 = (strName) => console.log(strName); //way 4 ...with a single parameter only for a return statement
funcName4("Hi! I am Mobin");
//Function in a function...
function outerFunc() {
  console.log("Hello World!");
  return function innerFunc() {
    // inner function has to be return
    console.log("Hi! Mobin here.");
  };
}
outerFunc()();

// Spread and rest operator
/* Spread operator makes an array/object unarray/unobject and rest operator make an array for all argument of a function or take all rest of the value of an array or object and make an array/object */
let ar1 = ["I", "Love", "Programming"];
let ar2 = ["I", "Love", "Juyena"];
let ar3 = [...ar1, "and", ...ar2]; // Spread operator
console.log(ar3);
const ob1 = {
  pName: "Banana",
  pPrice: 60,
  pQuntity: 16,
  isAvail: false,
};
const ob2 = {
  ...ob1,
  inStock: true,
};
console.log(ob2);

let fu = function (num, ...restv) {
  // rest operator
  console.log(restv);
};
fu(2, 3, 4);

//Method declaration.... Method is a function declared in an object as a key
const myObject3 = {
  myNickName: "Mobin",
  myPhone: "01736624011",
  myHome: 14,
  isAvailable: true,
  showReslt: function () {
    //Method
    return `${this.myHome}, ${this.myPhone}}`; //Use of this key
  },
};
console.log(myObject3.showReslt());

//Condition...if..else if...else...ternary...switch-case-break-default......
if (!"mobin") {
  console.log("Yes");
} else if ("Juyena") {
  console.log("Hello");
} else {
  console.log("no");
}
let a = 400,
  b = 500,
  c = 511;
let d = a > b && a > c ? a : b > c ? b : c; // ternary operator
console.log(`${d} is greater`);

const day = new Date().getDay();
switch (
  day // Switch statement
) {
  case 0:
    console.log("It's Sunday, time to relax!");
    break;
  case 1:
    console.log("Happy Monday!");
    break;
  case 2:
    console.log("It's Tuesday. You got this!");
    break;
  case 3:
    console.log("Hump day already!");
    break;
  case 4:
    console.log("Just one more day 'til the weekend!");
    break;
  case 5:
    console.log("Happy Friday!");
    break;
  case 6:
    console.log("Have a wonderful Saturday!");
    break;
  default:
    console.log("Something went horribly wrong...");
}

//Loop...for...while....do-while...forEach..for-of..for-in..
for (let i = 0; i < 5; i++) {
  //for
  console.log(`${i}`);
}

let i = 4; //while
while (i < 8) {
  console.log(`${i}`);
  i++;
}

let j = 5; //do-while
do {
  console.log(`${j}`);
  j++;
} while (j < 10);

const arra = ["I", "love", "programming"]; // forEach....only for array
arra.forEach(function (el, index, arra) {
  console.log(index, el);
});

for (let el of arra) {
  // for-of loop...only for array
  console.log(el);
}

for (let el in myObject1) {
  // for-in loop... for object
  console.log(myObject1[el]);
}
for (let el in arra) {
  // for-in loop... for array
  console.log(arra[el]);
}

//String...Librery functions/methods
const text = "I love programming";
console.log(text.length); // for string length (index 0-17)
console.log(text[4]); // finding character using index number
console.log(text.charAt(5));
console.log(text.charCodeAt(5)); // to find ASCII value of a character
console.log(text.indexOf("o")); // finding index number using character
console.log(text.toUpperCase()); // to UPPERCASE
console.log(text.toLowerCase()); // to lowercase
console.log(text.includes("love")); // whether the part is available or not
console.log(text.trim()); // to remove space from start and end
console.log(text.trimStart()); // to remove space from start only
console.log(text.trimEnd()); // to remove space after end only
console.log(text.slice(0, 5)); // to get a part of string using index number
console.log(text.substring(7, 11));
console.log(text.substr(7, 4)); // to get a number of character using index
console.log(text.concat(" and I love you")); // to to add extra text
console.log(text.split(" ")); // to make an array using separator
console.log(text.replace("I", "We")); // to replace a part of a string
console.log(text.padEnd(text.length + 3, "*")); // to add character at the end
console.log(text.padStart(text.length + 3, "*")); // to add character at the Starting

//Array...Librery functions/methods
const arr = ["I", "love", "programming"];
const arr2 = ["hello", "world"];
const arr3 = ["hello", "world", 24];
console.log(arr.length); //to get array length
console.log(arr[2]); // to get an element using index number
console.log(arr.push("and you")); //adding an element at end of the array
console.log(arr.pop()); //removing an element from end of the array
console.log(arr.unshift("You and")); //adding an element at start of the array
console.log(arr.shift()); //removing an element from start of the array
console.log(arr.slice(0, 2)); // to get a part of the array
console.log(arr.reverse()); // to reverse an array
console.log(arr.reverse());
console.log(arr.join(" ")); // to join an array
console.log(arr.splice(2, 1, "Juyena")); // to replace an element or remove from anywhere
console.log(arr.concat(arr2)); // to add 2 array
arr2.length = 0; // emptying an array
console.log(arr2);

//Array helper methods...................
const arrhm1 = arr.map((el) => (el === "Juyena" ? el + "!" : el));
console.log(arrhm1);
const arrhm2 = arr.filter((el) => el.length > 3 && el);
console.log(arrhm2);
const arrhm3 = arr.filter((el) => el.includes("e") && el);
arrhm3.length == 0 ? console.log("Not found") : console.log(arrhm3);
const arrhm4 = arr.find((el) => el.includes("e") && el);
typeof arrhm4 === "undefined" ? console.log("Not found") : console.log(arrhm4);
const arrhm5 = arr3.every((el) => typeof el === "string");
console.log(arrhm5);
const arrhm6 = arr3.some((el) => typeof el === "number");
console.log(arrhm6);
const arrhm7 = arr.reduce((accum, curvalue) => accum + " " + curvalue);
console.log(arrhm7);
