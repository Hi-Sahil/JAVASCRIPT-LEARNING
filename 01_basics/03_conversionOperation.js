//let score = "33abc" ;
//let score = null ;
//let score = undefined ;
//let score = true ;
let score = "abc" ;
//  console.log(typeof score);
//  console.log(typeof (score));

 let valueinNumber = Number(score);
//  console.log(typeof valueinNumber);
//  console.log(valueinNumber);

 /*
 33=>33 ;
 "33abc"=> NaN
 true =>1 : false => 0 
 */ 
let isLoggedIn = 1 
let booleanisLoggedIn = Boolean(isLoggedIn);
//console.log(booleanisLoggedIn);

// 1 => true  ; 0=> false
// "" => false 
// "sahil"=> True 

let someNumber= 33 ;
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ____________________OPERATIONS______________________

let value = 3 ;
let negValue = -value ;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "sahil"

let str3 = str1 + str2 ;
// console.log(str3);
// console.log( "2" + 1);
// console.log(2 +"1");
// console.log( 1 + 2 +"1"); // toPrimitive
// console.log("1" + 2 + 1);


console.log(+true);
console.log(+"");


let num1 , num2 , num3;
num1  = num2 = num3  = 2+2; // not good practice // readability of code is bad

let a = 100 ;
++a ;
console.log(a);
