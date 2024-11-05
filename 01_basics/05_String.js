const name = "sahil";
const repoCount = 70 ;
//  console.log( name + repoCount+"value");

console.log (`hello my name is ${name} and my repo count is ${repoCount}`)

 const myName = new String('sahil-Jii');
 console.log(myName[0]);
 console.log(myName.__proto__);
 console.log(myName.length);
 console.log(myName.toUpperCase());
 console.log(myName.charAt(5));
 console.log(myName.indexOf('J'));

 
  const newName = myName.substring(-8,4);
  console.log(newName);
  
  const anotherName = myName.slice(-8,4)
  console.log(anotherName);

  const newString1 = "     Sahil     ";
  console.log(newString1);
  console.log(newString1.trim());

  const url ="https://sahil.com/sahil%20semwal"


  console.log(  url.replace('%20' , '-'));
  console.log(  url.includes('hello' ));

  console.log(myName.split('-'));
  
  

  