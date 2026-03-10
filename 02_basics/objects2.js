//destructuring of objects
const course={
   coursename:"JS in hindi",
   price:"999",
   courseInstructor:"Hitesh"
}

const {courseInstructor:ins}=course

console.log(ins)//o/p->Hitesh

//JSON API
{
    name:"Hitesh",
    course:"JS in hindi",
    price:"free"
}