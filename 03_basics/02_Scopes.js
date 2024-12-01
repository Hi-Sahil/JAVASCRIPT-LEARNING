//var c = 300;
let a = 300; //Global Scope

if(true){
    let a = 10;
    const b = 20;            // Block Scope
   // var c  = 30 ;
   console.log(`a:${a}`);  
}
// for(let i = 0 ; i<Array.length ; i++){
//     const element = Array[i];
// }
 console.log(a);
// console.log(b);
//console.log(c);
