const name="Pratish"
const repoCount=50

console.log(name+repoCount+"value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('pratish-pb-com')

console.log(gameName[0]);
console.log(gameName._proto__);

console.log(gameName.length);
console.log(gameName.toupperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString=gameName.substring(0,4);
console.log(newString);

const anotherString =gameName.slice(-8,4);
console.log(anotherString);

const newStringOne="   Pratish   "
console.log(newStringOne.trim());


const url="https://pratish.com/pratish%20choudary"

console.log(url.replace('%20','-'));

console.log(url.includes('pratish'));

console.log(gameName.split('-'));
