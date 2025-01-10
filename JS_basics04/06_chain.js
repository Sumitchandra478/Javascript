const myArr=[2,3,4,5,6,7,8,9,1]

const collect=myArr.map( (item)=>(item+10) )
                .map((item)=>(item+1))
                .filter( (item)=>item>17 )

console.log(collect)