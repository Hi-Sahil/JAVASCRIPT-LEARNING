const user = {
    Username:"sahil",
    price:999,

     welcomeMessage:function(){
    console.log(`${this.username} , welcome to website`); 
     // console.log(this);
      
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai()

// const chai =()=>{
//     let username = "hitesh"
//     console.log(this);
    
// }
// chai()

// ()=>{} // array function

// const addTwo = (num1 , num2) =>{
// return num1+num2                   //explicit return
// }
// const addTwo = (num1 , num2) =>num1 + num2 //implicit return
// const addTwo = (num1 , num2) =>(num1 + num2)

const addTwo = (num1 , num2) =>( {username:"sahil"} )

console.log(addTwo(3,4));

//const myArray = [2,5,7,4]
// myArray.forEach( ()={} )