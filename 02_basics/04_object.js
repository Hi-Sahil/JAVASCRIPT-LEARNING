//const user = new Object()
const user = {}
user.id= "123abc"
user.name="ssahil"
user.isLoggedIn = false
// console.log(user);

const regularuser ={
    email : "some@gmail.com",
    userfullname : {
        firstname : "sahil",
        lastname : "semwal"
    }
}
console.log(regularuser);

const obj1 = {1:'q ', 2 :'w'}
const obj2 = {3:'a ', 4 :'b'}
//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({}, obj1 , obj2)
const obj3 = {...obj1 , ...obj2}
console.log(obj3);

const users =[
    {
    id :1,
    name:"sahil"       
    },
    {
    id :1,
    name:"sahil"       
    },
    {
    id :1,
    name:"sahil "      
    },

]

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("isLoggedIn"));


const course  = {
    cousename :"hindi" ,
    price : 400 ,
    courseinstructor : "hitesh"
}
// course.courseinstructor
const {courseinstructor:inst} = course // destructuring of objects
console.log(inst);

//  in react 
// rather than writing props.company passs company in {}
//const navbar=( {company})=>{

// }
// navbar(company = "hitesh")

// //json value frm api
// {
// "name" = "hitesh" , 
// "price" = "free"
// "coursename" = "js in hindi "
// }

// //api in form of array
// [
//     {} ,
//     {},
//     {}
// ]