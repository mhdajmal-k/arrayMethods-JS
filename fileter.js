//as name of filter it is a filter function in array 
//create new array

//filtering even numbers
const numbers=[1,2,3,4,5,6,7,8,9,10]
const evenNumbers=numbers.filter((elem)=>elem%2==0)
console.log(evenNumbers);


//duplicate elements
const duplicate=[1,2,3,4,5,6,6,7,8,9,6,3,2,1]
const nums=duplicate.filter((elem,index,ara)=>{
    console.log(index,"it index");
    console.log(ara.indexOf(elem));
    return ara.indexOf(elem)===index

})
console.log(nums);

