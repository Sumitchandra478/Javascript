// let map1=new Map()
// map1.set('1',"name")
// map1.set('1',"chandra")
// map1.set(3,"number")
// // console.log(map1.get('1')) //2nd line is updated by 3rd line
// console.log(map1)

// let map1=new Map()
// map1.set('1',"name")
// map1.set('3',"number")
// map1.set('1',"chandra")
// console.log(map1)  //Map(2) { '1' => 'chandra', '3' => 'number' }

let map1=new Map()
map1.set('1',"name")
map1.set('3',"number")
map1.set('1',"name")  //Map(2) { '1' => 'name', '3' => 'number' }
// console.log(map1) 
for(const key of map1){
    // console.log(key)
    //o/p
//[ '1', 'name' ]
//[ '3', 'number' ]
}

// for(const [key,value] of map1){

//     console.log(key ,':-',value )
// }

const myObj={
    name:"Sumit",
    sirName:"Chandra",
    name:"Dev"
}
// for(const key in myObj){
//     //console.log(key)  //prints only keys

//    // console.log(`Key is ${key} and value is ${myObj[key]}`)

// }
console.log(myObj)

// const map2=new Map()
// map2.set(1,"Sumit")
// map2.set(2,"Chandra")
// map2.set('3',"DevKumar")

// for(const key of map2){
//     console.log(key)
// }