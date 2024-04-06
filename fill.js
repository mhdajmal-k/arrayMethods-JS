//fill the array
//we specify start index and end index


const number=[1,2,3,4,5,6] 
number.fill("filled")
console.log(number);


//the 0 means fill 1 is from the index ,5 mens how many index not inclusive means 4
number.fill('no filled',3,6)
console.log(number);

const b=[1,2,3,4,5]
b.fill(0)
console.log(b);
b.fill(10)
console.log(b);
b.fill(100,2,6)
console.log(b);

b.fill(0)
const v= new Array(4); // Create an array with 4 undefined elements
const a = v.fill().map((_, index) => index + 100).filter((elem) => elem % 2 == 0);
console.log(a);



