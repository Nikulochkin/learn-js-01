var arr = [];
arr[0] = 0;
arr[1] = 1;
function doit (titel = ' ', n = process.argv[2]) {
  for (var i = 1; i < n - 1; i++) {
    arr[i + 1] = arr[i - 1] + arr[i];
  }
  console.log(arr);
}
doit(' ');
