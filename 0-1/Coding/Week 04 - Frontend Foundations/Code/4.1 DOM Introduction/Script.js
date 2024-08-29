//debouncing and throtling
let timer;
function debouncePopulateDiv() {
  clearTimeout(timer);
  timer = setTimeout(function () {
    populateDiv();
  }, 1000);
}

async function populateDiv() {
  const a = document.getElementById("firstNumber").value;
  const b = document.getElementById("secondNumber").value;
  //   const element = document.getElementById(/"finalSum");
  const response = await fetch(
    "https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b
  );
  const ans = await response.text();
  document.getElementById("finalSum").innerHTML = ans;
  console.log(ans);
}
