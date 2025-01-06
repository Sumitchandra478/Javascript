// function myName(){
//     console.log("S")
//     console.log("U")
//     console.log("M")
//     console.log("I")
//     console.log("T")
// }

// myName ==>ReferenceError
// myName()==>execution
// myName()

//In below myObj is not an object

// const myObj=function(){
//     console.log("hello World!")
// }
// myObj()

// const myObj1={
//     name:"Sumit",
//     email:"dev478"
// }

// myObj1.greeting=function(){
//     console.log("Hello function")
// }
// myObj1.greeting()

// function userlogin(userName="dev"){
//     if(!userName){
//         console.log("Plz enter a user name")
//         return;
//     }
//     return `${userName} is logged in`
// }
// console.log(userlogin())

// function sum(val1,val2,...num1){
//     return num1
// }
// console.log(sum(200,400,600,2000))  // o/p as an array


// As an object in function


// const user={
//     name:"Sumit",
//     courses:"javascript"
// }

// function handleObj(objName){
//     if(objName.hasOwnProperty("name") && objName.hasOwnProperty("course")){
//         console.log(`name of user is ${objName.name} and course is ${objName.course}`)
//         return
//     }
//    console.log("no name or course")
// }
// // handleObj(user)
// handleObj({
//     name:"Dev",
//     course:"JS"
// })

//Array in function


// function sum(num1,length){
//     if(length===num1.length){
//         return 0
//     }
//     return num1[length]+sum(num1,length+1)
// }
// const arr=[2,4,6,8,10]
// console.log(sum(arr,0))

let total=0;
function sum(num1){
  for(let i=0;i<num1.length;i++){
     total=total+num1[i]
  }
  return total

}
const arr=[2,4,6,8,10,15,19]
console.log(sum(arr))

