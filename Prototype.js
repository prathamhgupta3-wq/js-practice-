// let myname = "hitesh "
// let myname1 = "hitesh     "
// let mychannel= "chai     "

// console.log(myName.length);
// console.log(myName1.trim().length);
// console.log(myName.truelength);

let myheros = ["thor " , "ironman "]

let heroPower = {
    thor : "hammer ",
    ironman : "repulsers",

    getthorpower : function() {
           console.log(` thor power is  : ${thor}`) 
    }

}

Object.prototype.hitesh = function() {
    console.log("hitesh is present in all object ")
}                  

heroPower.hitesh()
// myHeros.hitesh()

Array.prototype.heyHitesh = function() {
    console.log("hitesh says hello ")
}

// myHeros.heyHitesh();
// heroPower.heyHitesh();


// inheritance
const User = {
  name : "chai",
  email : "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeacherSupport = {
    isAvailable : false 
}

const TASupport = {
    makeAssistant : 'JS assignment',
    fullTime : true,
    ___proto__ : TeacherSupport 

}

Teacher.___proto__ = User

// morders syntax 
Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUsername = "ChaiAurCode      "
String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()



