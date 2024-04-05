//return one output || numberc
const number=[1,2,3,4,5,6,7,8,9,10]
const total=number.reduce((accumulator,currentValue,index)=>{
  return  accumulator+currentValue
},0)
console.log(total);
