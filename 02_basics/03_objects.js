// singleton


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Soumik",
    "full name": "Soumik Das",
    [mySym]: "myKey1",
    age: 19,
    location: "kolkata",
    email: "soumikd112@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

// Object.freeze(JsUser)

JsUser.email = "soumikd113@gmail.com"
// console.log(JsUser["email"]);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
