//if in a array all the value meet specified condition it will return true
//other wise return false


const number=[1,2,3,4,5,6,6]
const checkAllEnvenNumber=number.every((elem)=>elem%2==0)
console.log(checkAllEnvenNumber);

const product=[
    {
        name:"Tv",
        quatity:2
    },
    {
        name:"mobile",
        quatity:7

    },
    {
        name:"laptop",
        quatity:7
    }
]
const checkingProductQuantity=product.every((elem)=>elem.quatity>0)
console.log(checkingProductQuantity);

