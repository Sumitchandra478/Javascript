//AS consructor

// const tinderUser=new Object()  //singleton

// const myUser={
//     fullDetails:{
//        email:"sumitchandra478@gmail.com",
//        fullName:{
//         firstName:"Sumit",
//         lastName:"Chandra"
//        }
//     }
// }
// console.log(myUser.fullDetails) /*{
//     email: 'sumitchandra478@gmail.com',
//     fullName: { firstName: 'Sumit', lastName: 'Chandra' }
//   } */
// console.log(myUser.fullDetails.fullName)

//{ firstName: 'Sumit', lastName: 'Chandra' }

const myElem1={1:'a',2:'b'}
const myElem2={3:'c',4:'d'}
const myObj1={myElem1,myElem2}
// console.log(myObj1)  //{ myElem1: { '1': 'a', '2': 'b' }, myElem2: { '3': 'c', '4': 'd' } } lie array
const Obj3=Object.assign(myElem1,myElem2)
// console.log(Obj3)
// console.log(Object.keys(Obj3))
console.log(Object.entries(Obj3))  //[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

// const obj3={...myElem1,...myElem2}
// console.log(obj3)

// in terms of array

// const myObj3=[
//   {},
//   {1:'a',2:'b'},
//   {2:"SUmit",3:"Chandra"},
//   {}
// ]
// //myObj3[0] ==>is an object

// console.log(Object.keys(myElem1))
// console.log(Object.values(myElem2))

