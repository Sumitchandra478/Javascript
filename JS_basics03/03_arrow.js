// const myUser={
//     console.log(this)  //syntax error as we need to have key value pair
//     userName:"Sumit",
//     age:25,
//     welcomeMessage:function(){
//     //  console.log(`my name is ${this.userName}`)
//      console.log(this.userName)
//      //console.log(this)  //all key value pair inside object in { }
    // }
// }
// myUser.welcomeMessage()  //My name is Sumit
// myUser.userName="Dev"
// myUser.welcomeMessage() //My name is Dev
// // 
// console.log(`${myUser.userName}`)  //Dev
// console.log(this)  //{}
// console.log(`${this.userName}`)  //undefined

// function myFun(){
//     //console.log(this)  //will print several values so here this is not empty
    
//     let userName="Sumit" 
//     //here no key value and also need to use const /let etc
    
//    // console.log(`${this.userName}`)  //undefined
//    console.log(this.userName)  //undefined
    
//     }
//     myFun()
//     console.log(this)

//***********************Array *******************/
// const tea=() =>{
//     let userName="Sumit"
//     console.log(this.userName)   //undefined same as normal fun
//     console.log(this)  
//     //here as function it doesnt hold serveral value but just {}

// }
// tea()

const myFun=(str1,str2)=>{name:"Sumit"}  //undefined need to enclose in parenthesis==>({name:"Sumit"} )
console.log(myFun("dev","Sumit"))

