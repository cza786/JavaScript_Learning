// // //Primitive (call by value)

// // // 7 types : strings, Number, Boolean, null, undefined, Symbol, BigInt

// // //Non Premitive (Reference Type

// // //Array, objects, Functions

// // //JavaScript is dyanmically Typed language(can hold different variables at runtime)
// // //Because not explicitly declared a variable type

// // //Bohat acha sawaal hai 👌

// // JavaScript me Symbol ek unique identifier hota hai.
// // Jab aap Symbol("123") likhtay ho, to wo string "123" sirf description ke liye hoti hai (debugging/printing ke liye).

// // Lekin har dafa Symbol("123") likhne par naya unique symbol banta hai.
// // Is liye:

// // const id = Symbol("123");
// // const numberId = Symbol("123");

// // console.log(id === numberId); // false


// // Ye false aayega, kyunke dono alag unique references hain, chahe unka description same ho.

// // Agar aap chahte ho ke ek hi symbol bar bar same aaye, to Symbol.for() use karte hain:
// // const id1 = Symbol.for("123");
// // const id2 = Symbol.for("123");

// // console.log(id1 === id2); // true


// // 👉 Symbol.for(key) ek global registry use karta hai. Agar pehle se "123" ka symbol bana hua hai, to usi ko return karega.

// // 🔑 Summary:

// // Symbol("123") → hamesha naya unique symbol.

// // Symbol.for("123") → registry se same symbol return karega.

const id = Symbol('123')
const numberId = Symbol('123')

console.log(id==numberId)

let bigInt= 47283572398508n;

const heros=[Chand, Zaib, TheGreat]

let myObj={
    Name: Chand,
    Age:22,


 }

const myFunction = function(){
console.log("Hello World")
}

console.log(typeof myObj)




//////////*********************Stack(Primitive) & Heap(Non-Premitive) *///////////////////////

let myYoutubeName = "Chand";
let  channel = myYoutubeName;
channel = "Zaib"
console.log(myYoutubeName)

console.log(channel)

//In Stack we change in the copy of previous stack value



let userOne = 
{
   email:"chandcza786@gmail.com",
   jazzCash: 458943509,

}

let userTwo=userOne;
userTwo.email="chandcza555@gmail.com";

console.log(userOne);

//In Heap we directly reference to the actual Data


