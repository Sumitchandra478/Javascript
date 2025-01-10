//  const mySym=Symbol("key1");

// const myObj={
//     name:"Sumit",
//     email:"sumitchandra478@gmail.com",
//     age:18,
//     isLoggedIn:true,
//     //define symbol as object
//     [mySym]:"myKey1"   //though mySym has stored symbol earlier but here its not symbol but string
// }

// // // console.log(myObj.email) //or
// // // console.log(myObj["email"])
// // // console.log(typeof myObj[mySym])   //not in " " then its defined as symbol

// myObj.email="dev478@gmail.com"
// console.log(myObj)  //obj is call by ref and non primitive so value in ref will be changed

// // Object.freeze(myObj)
// // myObj.name="Dev"
// // console.log(myObj["name"])   //o/p is sumit only

// myObj.greeting=function(){
//     console.log("Hello JS user")
// }

// // console.log(myObj.greeting())
// //console.log(`${myObj.greeting()}+${myObj["name"]}`)

// myObj.greeting2=function(){
//     console.log(`Hello JS User, ${this.name}`)
// }
// console.log(myObj.greeting2())  //gives undefined

const myObj={
    name:"Sumit",
    mobile:8112206447,
    Address:"Pune"
}
myObj.name="Chandra"
// const {name}=myObj
// console.log(name)
// console.log(myObj)
console.log(Object.values(myObj))

console.log(myObj.name)
const {name}=myObj
console.log(`${name}`)

console.log(myObj["name"])

for(const key in myObj){
    console.log(myObj[key])
}
