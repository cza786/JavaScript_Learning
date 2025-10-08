//Objects two tyes: Leteral(No Singleton), Constructor(SingleTon)

//object Literals

const sym = Symbol("One")

const JsUser = {
    name : "Chand",
    age : 21,
    [sym] : "One", //it uses as a symbol thorough [sym] instead of string
    location: "Islamabad",
    email : "chandcza786@gmail.com",
    isloggedin : true,
    loginDays : ["Monday","Friday"],
}

console.log(JsUser.name)
console.log(JsUser["name"]) // here key key itself has taken as a string
console.log(JsUser[sym]);// interview question
console.log(JsUser.email);
// // if we declared name as string "name" in object then we cannot access it through "."

JsUser.email = "chand786@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "chand@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
console.log("HI I'm JS");
}
console.log(JsUser.greeting());

JsUser.greetingtwo = function(){
console.log(`HI I'm JS, ${this.name}`);
}
console.log(JsUser.greetingtwo());