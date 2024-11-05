 //  Primitive 
// 7 types : string  , number , boolean , null , undefined , symbol , BigInt
const score = 1000
const scoreValue = 100.20

 const isLoggedIn= false;
 const outsidetemp = null;
 let userEmail 
const id = Symbol('123');
const anotherId = Symbol('123');
//console.log(id === anotherId);

const bigNumber= 34567890233434343n;

 // Reference (Non - Primitive )
// Array , Objects , functions 

 const heroes = ["shaktiman" , "nagraj " , " doga"]
let myObj = {
     name :"sahil",
     age : 22,
}
const myfunction = function()
{
//    console.log("hello world");
    
}
myfunction();

// console.log(typeof bigNumber);
// console.log(typeof myfunction);
// console.log(typeof anotherId);
// console.log(typeof userEmail);
// console.log(typeof outsidetemp);



//**********************************************//
// Stack(Primitive) ==> copy of address is given 
// Heap (Non-Primitive) => Reference is given 

let myName = "sahil";
let anotherName = myName;
anotherName = "chai and fun"
console.log(anotherName);
console.log(myName);

let user1 = {
    email : "sahil@email" ,
    upi : "sahil@Paytm" ,
}
let user2 = user1 ;
user2.email = "sahil@yahoo"

console.log(user1.email);
console.log(user2.email);