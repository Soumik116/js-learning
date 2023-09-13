//There are mainly two types of datatype on the basis of how we store the data and how we acess the data which are primitive and Non-primitive (or,reference type) data

// Primitive

// 7 type : String, Number, Boolean, null, undefined, symbol, BigInt

//Javascript is a dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Reference (Non-primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


