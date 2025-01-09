const course={
    courseName:"javascript from Chai aur Code",
    price:999,
    instructor:"Hitesh"
}

//console.log(course.instructor)
const {instructor:teacher}=course;
// // console.log(instructor)
// console.log(teacher)
const {instructor}=course
console.log(instructor)

// console.log(course["teacher"])

// console.log(course)