// const darazUser = new Object();
const darazUser = {}

darazUser.id = "456";
darazUser.name =" zaib"
darazUser.isLoggedIn = true
// console.log(darazUser);
const regularUser = {
    email : "chandcza786@gmail.com",


    fullname : {
    firstname : "Chand ",
    lastname  : "Zaib"
     }
}

// console.log(regularUser.fullname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj = Object.assign({},obj1,obj2,obj3);
const obj = {...obj1,...obj2,...obj3}
// console.log(obj);

const user = [
    {
        email: "a@gmai.com",
        id : 3
    }
,
    {
        email: "a@gmai.com",
        id : 3
    }
,
    {
        email: "a@gmai.com",
        id : 3
    }
]
 user[1].email
 console.log(darazUser);
 console.log(Object.keys(darazUser));

 console.log(Object.values(darazUser))
 console.log(Object.entries(darazUser))

 console.log(darazUser.hasOwnProperty('isLoggedIn'));



 //////////////de-structure/////////

 const course = {
    name: "JavaScript",
    price : "1000$",
    instructor: "Chand Zaib"
 }

 const{instructor}=course;
 console.log(instructor);
