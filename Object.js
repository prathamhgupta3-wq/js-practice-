function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

function createUser(username , score ) {
    this.username = username 
    this.score = score 

    // function getUsername() {
    //     return this.username
    // }
}

createUser.prototype.increament = function() {
    this.score++
}

const chai = new createUser("chai" , 25)
const tea = new createUser("tea" , 250)

// console.log(createUser.increament())
// console.log(createUser.getUsername())

// chai.getUsername()
chai.increament()

// pratham@pratham-Swift-SFG14-71:~/all/java_script$ node Object.js
// /home/pratham/all/java_script/Object.js:30
// chai.getUsername()
//      ^

// TypeError: Cannot read properties of undefined (reading 'getUsername')
//     at Object.<anonymous> (/home/pratham/all/java_script/Object.js:30:6)
//     at Module._compile (node:internal/modules/cjs/loader:1705:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1838:10)
//     at Module.load (node:internal/modules/cjs/loader:1441:32)
//     at Module._load (node:internal/modules/cjs/loader:1263:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.22.1
// pratham@pratham-Swift-SFG14-71:~/all/java_script$ node Object.js
// /home/pratham/all/java_script/Object.js:31
// chai.increament()
//      ^

// TypeError: Cannot read properties of undefined (reading 'increament')
//     at Object.<anonymous> (/home/pratham/all/java_script/Object.js:31:6)
//     at Module._compile (node:internal/modules/cjs/loader:1705:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1838:10)
//     at Module.load (node:internal/modules/cjs/loader:1441:32)
//     at Module._load (node:internal/modules/cjs/loader:1263:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.22.1
// pratham@pratham-Swift-SFG14-71:~/all/java_script$ node Object.js
// /home/pratham/all/java_script/Object.js:31
// chai.increament()
//      ^

// TypeError: Cannot read properties of undefined (reading 'increament')
//     at Object.<anonymous> (/home/pratham/all/java_script/Object.js:31:6)
//     at Module._compile (node:internal/modules/cjs/loader:1705:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1838:10)
//     at Module.load (node:internal/modules/cjs/loader:1441:32)
//     at Module._load (node:internal/modules/cjs/loader:1263:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.22.1
// pratham@pratham-Swift-SFG14-71:~/all/java_script$ node Object.js
// /home/pratham/all/java_script/Object.js:31
// chai.increament()
//      ^

// TypeError: Cannot read properties of undefined (reading 'increament')
//     at Object.<anonymous> (/home/pratham/all/java_script/Object.js:31:6)
//     at Module._compile (node:internal/modules/cjs/loader:1705:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1838:10)
//     at Module.load (node:internal/modules/cjs/loader:1441:32)
//     at Module._load (node:internal/modules/cjs/loader:1263:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.22.1

// all this for understanding new key word 


// chai.getUsername()
chai.increament()

createUser.prototype.details = function() {
console.table([this.username,this.score])
}
// 
chai.details()
tea.details()

