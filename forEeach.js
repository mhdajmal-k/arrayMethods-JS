// forEeach Method syntax

// array.forEach((element,index,array) => {
    
// });

const array=[1,2,3,4,5,]

array.forEach((element,index,array)=>{
    console.log("the elements of array:"+element)
    console.log("the index of array:"+index)
    console.log("the array :"+array)
})

//sum of the array

let sum=0;
array.forEach((element)=>{
    sum+=element
})
console.log(sum)

// accuracance of the letter

const letter=['a','b','c','a','c','d','a']

let count={}
letter.forEach((element)=>{
    count[element]?count[element]++:count[element]=1
})
console.log(count)

