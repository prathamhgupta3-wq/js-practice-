function setUsername(username) {

    this.username = username ;
    console.log("called");

}

function user( username, email, password) {

    setUsername.call(this,username)
    this.email = email;
    this.password = password;

}

const chai = new user("chai", "chai@google.com" , "123");

console.log(chai)




// pratham@pratham-Swift-SFG14-71:~/all/java_script$ node Call.js
// called
// user { email: 'chai@google.com', password: '123' }
// pratham@pratham-Swift-SFG14-71:~/all/java_script$ node Call.js
// called
// user { email: 'chai@google.com', password: '123' }
// pratham@pratham-Swift-SFG14-71:~/all/java_script$ node Call.js
// called
// user { username: 'chai', email: 'chai@google.com', password: '123' }
// pratham@pratham-Swift-SFG14-71:~/all/java_script$ 