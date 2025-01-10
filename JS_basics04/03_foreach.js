const myArr=["Sam","Dev","Riya"]


//using call back fun
// myArr.forEach(function(item){
//     console.log(item)
// })

// Using Arrow function 

// myArr.forEach((item)=>{console.log(item)})

// using function

// function printing(item){
//     console.log(item)
// }
// myArr.forEach(printing)

//to rpint index,item and array use below

// function printing(item,index,arr){
//     console.log(item,index,arr)
//     }
    
//     myArr.forEach(printing)

//For each for obj inside array

// const coding=[
//     {
//         language:"Python",
//         fileName:"Py"
//     },
//     {
//         language:"javascript",
//         fileName:"JS"
//     },
//     {
//         language:"CoreJAva",
//         fileName:"Java"
//     }
// ]

// coding.forEach(function(item){
//     console.log(Object.values(item))

// })

//in above example, item is name of each object

const objects=[1,2,3,4,5,6,7,8,9,10]
const myObj=[]

// objects.forEach( (item)=>{
//     if(item%2===0){
//      myObj.push(item)
//     }
// } )


objects.forEach( (item)=>{
   console.log(item+10) 
} )

