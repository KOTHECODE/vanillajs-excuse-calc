
document.getElementsByClassName("Qbtn").onclick = function () {

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
let excuse = Math.floor(Math.random()*4);
return who[excuse] + ' ' + action[excuse] + ' ' + what[excuse] + ' ' + when[excuse] + ' ' +;
}
console.log("return")