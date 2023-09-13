const name  = "soumik"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('soumik-d-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const newString1 = "   soumik    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://soumik.com/soumik%20das"

console.log(url.replace('%20', '-'))


console.log(url.includes('hitesh'))

console.log(gameName.split('-'));






