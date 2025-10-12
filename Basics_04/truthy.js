//Truthy Values 

// "0",'false', " ", [],{},function(){}


//falsy values
// false, BigInt 0n, 0, -0, "", null, undefined, NaN


// const emptyobj = {}

// if(Object.keys(emptyobj).length === 0){
// console.log("Object is empty")
// }


//In Browser
// false == 0 ----true 
// false == ""  -----true
// 0 == "" -----true

/////////////////////////    Null Coalsing-Operator(??): null ,undefined \\\\\\\\\\\\\\\\\\\\\\\\

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
val1 = undefined ?? 20
// val1 = null ?? 10 ??  25
console.log(val1)



///////////////////////    Trinary-Operator   \\\\\\\\\\\\
 
//conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80"): console.log("more than 80")