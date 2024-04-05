//is a higher-order function used to iterate over elements of an array or iterable object and apply a function to each element
// , creating a new array 
//not change the existing array

//multiplication

const array=[1,2,3,4,5,6]
const arrayMultiply=array.map(elem=>elem*2)
console.log(arrayMultiply);


//product totalPrice
const product=[
    {
        name:"laptop",
        price:5300,
        quantity:2
    },
    {
        name:"phone",
        price:4400,
        quantity:8
    },
    {
        name:"tv",
        price:87000,
        quantity:5
    }
]
const totalProductPrice=product.map((ele)=>({
    name:ele.name,
    totalPrice:ele.price*ele.quantity

}))
console.log(totalProductPrice)

//converting string into Number
const letterNumber=['1','2','3','4','5']
const numbers=letterNumber.map(Number)
console.log(numbers)