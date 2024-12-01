//var c = 300;
let a = 300; //Global Scope

if(true){
    let a = 10;
    const b = 20;            // Block Scope
   //var c  = 30 ;
  // console.log(`a:${a}`);  
}
// for(let i = 0 ; i<Array.length ; i++){
//     const element = Array[i];
// }
//console.log(a);
// console.log(b);
//console.log(c);


function one (){
    const username = "sahil"
    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    // child functions can use parent function variables
    two()
}
//one()

if(true){
    const username = "hitesh"
    if(username ==="hitesh"){
        const website = "youtube"
      //  console.log(username+website);
        
    }
   // console.log(website);  // out of scope
    
}
//console.log(username);    // out of scope

console.log(addOne(5));//no error 
function addOne(num)
{return num +1 }

addTwo(5)//error
const addTwo = function(num){
    return num+2
}
