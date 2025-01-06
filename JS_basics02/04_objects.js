//AS consructor

const tinderUser=new Object()

const myUser={
    fullDetails:{
       email:"sumitchandra478@gmail.com",
       fullName:{
        firstName:"Sumit",
        lastName:"Chandra"
       }
    }
}
console.log(myUser.fullDetails) /*{
    email: 'sumitchandra478@gmail.com',
    fullName: { firstName: 'Sumit', lastName: 'Chandra' }
  } */
console.log(myUser.fullDetails.fullName)

//{ firstName: 'Sumit', lastName: 'Chandra' }