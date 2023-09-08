const accountId = 144553
let accountEmail = "soumikd112@gmail.com"
var accountPassword = "12345"
accountCity = "Haripal"
let accountState;


// accountId = 2  // not allowed

accountEmail = "soumikd111@gmail.com"
accountPassword = "21212121"
accountCity = "Kolkata"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope & functinonal scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])