// primitive

//7 types :String,Number,Boolean,null,undefined,bigint,symbol.

const score=100
const scoreValue=100.3

const isLoggedIn=false
const OutsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

constbigNumber=3456543576654356754n

// Refrence (non primitive)

//Array,Objects,Functions

const heros=["saktiman","naagraj","doga"]
let myObj={
    name:"pratish",
    age:20,
}

const myFunction=function(){
    console.log("hello world");
    
}

console.log(typeof heros);

//link to learn-https:262.ecma-international.org/5.1/#sec-11.4.3//




////// memory////

//Stack (primitive) ,Heap(non primitive)

let myYoutubename="pratish"

let anothername=myYoutubename
anothername="pratish123"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"bhonglepratish@gmail.com",
    upi:"pratishbhongle@okaxis",
}

let userTwo=userOne

userTwo.email="pratish.bhongle@universal.edu.in"

console.log(userOne.email);
console.log(userTwo.email);

