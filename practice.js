
// Showing multiple products info using function
(function(){
const products =[
  {
    pName: 'Banana',
    pPrice: 60,
    pQuntity: 16,
    isAvail: false
  },
  {
    pName: 'Egg',
    pPrice: 45,
    pQuntity: 12,
    isAvail: true
  }
];

function showProductInfo(products){
  let singleProduct = '';
  for(let product of products){
    singleProduct +=`Name:${product.pName}, Price:${product.pPrice}, Quantity:${product.pQuntity}, Availability:${product.isAvail}  ${product.isAvail?' In Stock ': ' Out of stock '}`;
  }
  return singleProduct;
}
console.log(showProductInfo(products));
})()





// Reverse a string with function.....
const myName = 'Mustakim Al Mobin';
const myWifeName = 'Juyena Sultana';

function stringReversing(anyString){
  return anyString.split('').reverse().join('');
  /*let revString = anyString.split('');
  revString = revString.reverse();
  revString = revString.join('');
  return revString;*/
}
console.log(stringReversing(myName));
console.log(stringReversing(myWifeName));




// adding all elements of an array using function with validation
let arr6 = [1,2.5,3,4,8,6,7,8,9];
let arr4 = 23;
let arr5 = [2,5,'23',3];
const sum = arr=>{
  let sum = 0;
  if(!Array.isArray(arr)){
    return 'Please Enter an array';
  }//Array validation
  for(let el of arr){
    if(typeof(el) !='number')// validation whether all elements are number or not
    return 'All element must to be a number';
    sum += el;
  }
  return sum;
}
console.log(sum(arr6));
console.log(sum(arr4));
console.log(sum(arr5));
let arrhm8 = arr6.reduce((accum, curvalue)=>{// using reduce method...
return accum + curvalue;
},10 ); // adding extra element
console.log(arrhm8);




const myArray10 = [ //Object in array
  {
    objName: 'Mobin',
    objPhone: '01612322542',
    objNum: 2343
  },
  {
    objName: 'Mustakim',
    objPhone: '0173624011',
    objNum: 1991
  }
];

let obb ={}; 
myArray10.map((el)=>{
  obb[el.objName] = el.objPhone; 
});
console.log(obb);
