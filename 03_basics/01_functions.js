
function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");   
}

//sayMyName();

                       //parameters
// function Add2Numbers(num1 , num2){
// console.log( num1+num2);
// }

function Add2Numbers(num1 , num2){
    let result = ( num1+num2);
    return result ;
   // after resukt nothing is accepted ..
   // console.log("sahil");
    
    }
const result = Add2Numbers(3,5);
                          //arguements
 // console.log("result :" , result);

 function LoginUserName(userName){
    if(userName === undefined){
        console.log("please enter a userName")
    }
   else {return`${userName} just logged in`}
 }
 //console.log(LoginUserName())
           

function calculateCartPrice(val1 , val2 , ...num1){ //... rest operator
          return num1
}
// console.log(calculateCartPrice(2 , 4 , 6 , 8));

const user ={
    username : "hitesh" , 
    prices:199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);  
}
//handleObject(user)
handleObject({
    username:'sam ',
    price : 399
})
const myNewArray = [200,400,100,600]
function returnSecondValue(getarray){
    return getarray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,700,300,500]));