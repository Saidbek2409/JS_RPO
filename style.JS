// 1 \\
var i = +prompt('напишите число')
var fib = [0, 1];
for (i; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
} 
// 2 \\
let name = prompt('what is your name?')
let surname =  prompt('what is your surname?')
if(name || surname.trim().toLowerCase()){
  console.log(name + surname + Math.round(Math.random()) + '@gmail.com '   )
} else{console.log('я не сог определить действие');}
// 3 \\
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

console.log(uuidv4());