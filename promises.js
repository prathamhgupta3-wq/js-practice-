const promiseOne = new Promise(function(resolve , reject ) {
    // Do an async task 
    // DB calls , crypto graphy , network 

    setTimeout(function() {
        console.log(' Async task is complete ');
        resolve()

    },1000)
})


promiseOne.then(function() {
    console.log(" promise consumed ")
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log(" Async task 2 ")
         resolve()
    },1000)
} ).then(function() {
    console.log(" Asyn 2 resolved ")
})

const promiseThree = new Promise(function(resolve, reject  ) {
 setTimeout(function(){
         resolve({username : " chai " , email : " chai@example.com"})

 },1000)    
})

promiseThree().then(function(user) {
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject  ) {
 setTimeout(function(){
    let error = true 
    error = false  
    if(!error) {
         resolve({username : " hitesh " , email : " 1234 "})
}else {
    reject('ERROR : somthing is wrong ')
}

 },1000)    
})

// let username = promiseFour.then((user) => {                  // cant do like this 

promiseFour
.then((user) => {                  // cant do like this 
    console.log(user)
    return user.username 
})
.then((username) => {
    console.log(username)
})
.catch(function(error) {
    console.log(error)
})
.finally(function() {
    console.log(" the promise is either resolved or rejected ")
}) 

console.log(username)








let promiseFive = new Promise(function(resolve , response ) {
 setTimeout(function(){
    let error = true 
    error = false  
    if(!error) {
         resolve({username : " javascript " , email : " 1234 "})
}else {
    reject('ERROR : somthing is wrong ')
}

 },1000)    
})



// async await                  cannot resolve reject or errors implicitly 

                                          // where ever i dont wanna use catch 

 async function  consumepromiseFive () {
    try{ 
    const response = await promiseFive
        console.log(response)

    }catch(error) {
    console.log(error)
}

 }


consumepromiseFive()










async function getAllusers() {
    try{
    const response = await fetch('')
    // const data = response.json()         require time
    console.log(response) 
    const data = await response.json()
    console.log(data)
    }catch(error) {
        console.log("E: " , error )
    }
}

getAllusers()


fetch('')
.then((response) => {
    return respnse.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log("E: " , error )
})



