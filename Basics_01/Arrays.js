const marvel_heroes=["thor","Spiderman","IronMan"];
const dc_heroes = ["flash","Batman","Superman"];

//Array is a single element here 
//because array can take any type of element
// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);

//In third(array) value, there is first(index) value
// console.log(marvel_heroes[3][1]);

//as we can use also, we have to declare concate variables
const allconcat = marvel_heroes.concat(dc_heroes);
console.log(allconcat);

console.log(Array.isArray("Chand"));
console.log(Array.from("Chand"));
console.log(Array.from({name: "Chand"})); //Intersting Case

let score1= 20;
let score2= 30;
let score3 = 40;

console.log(Array.of(score1,score2,score3));





