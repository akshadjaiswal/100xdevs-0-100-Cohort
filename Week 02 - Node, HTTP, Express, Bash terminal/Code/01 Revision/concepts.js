setTimeout(function () {
  console.log("hi there");
  setTimeout(function () {
    console.log("hi there 2");
  }, 2000);
}, 1000);
