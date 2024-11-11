const marvel_hero = ["thor " , "ironman" , "spiderman"]
const dc_hero = ["superman" , "flash" , "batman"]

 // marvel_hero.push(dc_hero)
// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

//  const newarray = marvel_hero.concat(dc_hero);
// console.log(newarray);

const newarray = [...marvel_hero,...dc_hero]
console.log(newarray);

const another_array = [1,2,3 , [4,5,6] ,7 , [6,7,[4,5]]]
const realanother_array = another_array.flat(Infinity)
console.log(realanother_array);
console.log(Array.isArray("sahil"));
console.log(Array.from("sahil"));
console.log(Array.from({name:"sahil"}));//interesting

let score1 = 100
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1,score2,score3));

