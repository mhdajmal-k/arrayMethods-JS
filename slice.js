//it make show copy of the array
//does not modify original array
//array.slice(start,end)
//end not include

const number=[1,2,3,4,5,6]
const sliced=number.slice(0,5)
console.log(sliced);

//give -number it will start form the back
const negSliced=number.slice(-5)
console.log(negSliced);

