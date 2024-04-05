//splice method is used to change the contens of array by 
//removing existing element not crate new array
//add new element in place
//array.splice(start, deleteCount, item1, item2, ...);

const number=[1,2,3,4,5,1,3,7]
number.splice(5,3,6,7,8,9)
console.log(number);
// number.splice(0,2,6,7,8,9,10)
// console.log(number);
//adding elements
number.splice(9,0,10)
console.log(number);
