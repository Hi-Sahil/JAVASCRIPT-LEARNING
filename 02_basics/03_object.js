// not singleton {when declared in form of literal}

// Object.create(by construction)
//object literal 
const sym = Symbol("key1");
const sym1 = Symbol("key1");
const jsuser = {
    name : "virat ",
    "full name ": "virat kohli",
    [sym]:"mykey1",
    age : 25 ,
    location : "delhi" ,
    email : "vk17@gmail.com",
    isLoggedIn : false ,
    lastloginDays : ["monday" , "saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name "]);
console.log(jsuser[sym]);

jsuser.email = "vk@chatgpt.com"
//Object.freeze(jsuser)
//jsuser.email = "vk@github.com"
//console.log(jsuser);

  jsuser.greeting = function(){
    console.log("hello js user "); 
}

jsuser.greeting2 = function(){
    console.log(`hello js user ,${this.name}`); 
}
jsuser.greeting();
jsuser.greeting2();
// console.log(jsuser.greeting());
// console.log(jsuser.greeting2());
