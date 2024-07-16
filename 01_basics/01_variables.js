const accountId = 12345
let accountEmail = "yuvi@gmail.com"
var accountPassword = "6969"
accountCity = "Jaipur"
let accountState;

//accountId = 7777777
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

accountEmail = "yuvraj@google.com"
accountPassword = "1234"
accountCity = "Pune"

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
console.log(accountId);