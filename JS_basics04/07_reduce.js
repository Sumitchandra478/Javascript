// const myArr=[1,2,3,4]

// //const collect=myArr.reduce( (accum,item)=>{return accum+item},0 )

// // simply==>

//     const collect=myArr.reduce( function(accum,item){
//         console.log(`value of accum is ${accum} and value of item is ${item}`)
//         return accum+item
//     },3)

// console.log(collect);


//shopping cart

const myArray=[
    {
        course:"Python",
        Price:999
    },
    {
        course:"java",
        Price:1999
    },
    {
        course:"DSA",
        Price:599
    },
    {
        course:"Data science",
        Price:3999
    },
]

const totalPrice=myArray.reduce( (initial_price, objName)=>{
    return initial_price+objName.Price
},0 )

console.log(totalPrice)
