//concat all array
const a=[1,2,3,[4,5,6,,[7,8,[9,10]]]]
const flatArray=a.flat(Infinity)
console.log(flatArray);