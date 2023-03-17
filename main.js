//let a = [];
//let b;
//for (let i = 1; i <= 10; i++) {
//b = +prompt("enter number");
//a.push(b);
//}
//console.log(a);

//for (let x of a) {
//if (a >= 5) {
//console.log(a);
//}
//}

//let a;

//let b = [];

//do {
//a = prompt("enter number");
//let c = Number(a);
//b.push(c);
//} while (a != null);

//b.pop();

//console.log(b);

//let k = 0;

//for (let i of b) {
//k = k + i;
//}
//alert(k);

//alert(k / b.length);

let a = [];

let b;

for (let i = 1; i <= 10; i++) {
  b = Number(prompt("enter number"));
  if (b < 10) {
    a.push(b);
  }
}
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

let c = prompt("enter name");
let z = Number(prompt("enter number"));
let k = [c, z];
console.log(a);

if (k[1] >= 15) {
  alert("привіт" + " " + k[0]);
} else {
  alert("я тебе не знаю " + " " + k[0]);
}
