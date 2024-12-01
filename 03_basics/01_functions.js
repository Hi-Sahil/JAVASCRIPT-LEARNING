
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
 console.log(LoginUserName())
           
