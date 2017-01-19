var f0 = 0;
var f1 = 1;
var f2 = 0;
console.log(f1);
console.log(f0);
var n = process.argv[2];
for (var i = 0; i < n - 2; i++) {
  f2 = f1 + f0;
  f0 = f1;
  f1 = f2;
  console.log(f2);