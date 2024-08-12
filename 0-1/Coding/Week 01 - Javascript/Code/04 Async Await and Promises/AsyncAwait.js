function AkshadAsyncFunction() {
  let a = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi there");
    }, 1000);
  });
  return a;
}

async function main() {
  const value = await AkshadAsyncFunction();
  console.log(value);
}

main();
