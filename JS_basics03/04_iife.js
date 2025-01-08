//named iife

(function chai(){
    console.log("Tea")
})
();

//unnamed iife

(()=>{
    console.log("tea2")
})
();

((name1)=>{
    console.log(`${name1}`)
})
('Sumit')