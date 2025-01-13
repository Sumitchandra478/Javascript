const myObj={
    name:"Sumit",
    address:{
        Village:"Laxmipur",
        Post:"Gauripur"
    },
    email:"sumitchandra478@gmail.com",
    greeting2 :function(){
      console.log(`Hello ${this.name}`)
    }
}

myObj.name="Dev"   //causes permanent change
myObj.age=25  //key-value created

//const {address:Permanent_address}=myObj  
  
   //Permanent_address is a standalone variable created via destructuring & not a property of myObj so write myObj.Permanent_address=myObj.address
   myObj.Permanent_address=myObj.address  //a ney key-value is created and not updated existing one
   delete myObj.address

// console.log(myObj.Permanent_address)

// console.log(myObj)

// console.log(`${age}`);  //dont work unless u define first ==> const {age}=myObj

const myObj2={1:'a',2:'b',3:'c'}

//Merging

//console.log(myObj,myObj2) 
/*  Output
{
  name: 'Dev',
  address: { Village: 'Laxmipur', Post: 'Gauripur' },
  email: 'sumitchandra478@gmail.com',
  age: 25,
  Permanent_address: { Village: 'Laxmipur', Post: 'Gauripur' }
} { '1': 'a', '2': 'b', '3': 'c' } 
  
This is not merging but normal printing two objects
*/


// METHOD 1 of merging

//myObj.assign(myObj2)   //assign is not a function so error

//try 2
// Object.assign(myObj,myObj2)   //myObj2 inserts in myObj like unshift
// console.log(myObj)

//inserting into new Object

const myObj3=Object.assign({},myObj,myObj2)
//console.log(myObj3);  //here in empty obj,myObj2 is unserted as unshift and myObj in last

//METHOD-2
//console.log(...myObj,...myObj2)  //error

//const newObj=(...myObj,...myObj2)   //error it should be curly bracket

//console.log({...myObj,...myObj2})  //correct

//TO GET KEYS ,VALUES AND KEY VALUES

// console.log(Object.keys(myObj3))  
// console.log(Object.values(myObj3))
// console.log(Object.entries(myObj3))

//OUTPUT of all above are in array

//accessing key's value=>
  //1.   console.log(myObj.name)
const {name}=myObj
//2.   console.log(name) or console.log(`${name}`)  

// 3.   console.log(myObj["name"])

// for(keys in myObj){
//   console.log(`Key is ${keys} and values is ${myObj[keys]}`)
// }

//updating value of key which is permanent

myObj["name"]="Sumit Chandra"
// console.log(myObj)

//USe function to print value of name which is present in Object

const myObj4={
  name:"Sumit",
  address:{
      Village:"Laxmipur",
      Post:"Gauripur"
  },
  email:"sumitchandra478@gmail.com",
  greeting2 :function(){
    console.log(`Hello ${this.name}`)
  }
}

         //OR
         
myObj.greeting=function(){
  console.log(`Hello ${this.name}`)
}

// myObj.greeting()

myObj.greeting2()












