const accountId = 1234
let accountEmail = "krina123@gmail.com"
var accountPassword = "43568"
accontCity = "jaipur"
let accountState;

// prefer not to use var because of issue in block scop and functional scope 
// accountId=644  (not allowed.  consol variable can not change)
accountEmail = "kothiyakrina@gmail.com"
accountPassword = "16102003"
accontCity = "ahemdabad"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accontCity, accountState])