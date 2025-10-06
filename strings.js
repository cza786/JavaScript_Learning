const name= "Chand";
const number="27";


//string Interpolation
console.log( `My name is ${name} and my number is ${ number}`);


const gameName= new String('Str_ike_rs');

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4);

console.log(newString);

const anotherString = gameName.slice(-8,-2);

console.log(anotherString);

const url="https://www.youtube.com/watch?v=fozwNnFunlo";
console.log(url.replace('?',','));

console.log(url.includes('youtube'));

console.log(gameName.split('_'));
