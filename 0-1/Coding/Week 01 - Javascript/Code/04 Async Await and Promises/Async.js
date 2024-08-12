function findSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  console.log(ans);
}

function finSumTill100() {
  findSum(100);
}

setTimeout(finSumTill100, 1000);
console.log("Hello world");
