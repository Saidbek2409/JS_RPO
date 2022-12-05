// 1 \\
var i;
var fib = [0, 1];
for (i = 2; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}

// 2 \\
let name = prompt('what is your name?')
let surname = prompt('what is your surname?')
if (name || surname.trim().toLowerCase()) {
  console.log(name + surname + Math.round(Math.random() * name.length) + '@gmail.com ')
} else { console.log('я не сог определить действие'); }

// 3 \\
function randomId(yourId) {
  let text = "";
  let generator = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < yourId; i++)
    text += generator.charAt(Math.floor(Math.random() * generator.length));
  return text;
}
console.log(randomId(10));