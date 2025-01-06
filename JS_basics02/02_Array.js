const marvelHeroes=["thor","Ironman","Spiderman"]
const dc_heroes=["superman","flash","batman"]
// console.log(marvelHeroes.shift())  //thor
// console.log(marvelHeroes) //[ 'Ironman', 'Spiderman' ]
// const try1=marvelHeroes.join(dc_heroes)
// console.log(try1)

console.log(...marvelHeroes,...dc_heroes)

// const newHeroes=marvelHeroes
// console.log(newHeroes)
//marvelHeroes.push(dc_heroes); //entire dc heroes items are considered as single array item in marvelHeroes
//console.log(marvelHeroes)

// const merged_heroes=[...marvelHeroes,...dc_heroes]
// console.log(merged_heroes)

// const array_variety=[1,2,[3,4,5,[6,8],9,10]]
// const array2_variety=["sumit","chandra",true]
// const new_merged_array=[...array_variety,...array2_variety]
// console.log(new_merged_array)

// console.log(new_merged_array.flat(Infinity))

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Sumit"))
// console.log(Array.from(({name:"Sumit"})))   //[] and not S,u,m,i,t



