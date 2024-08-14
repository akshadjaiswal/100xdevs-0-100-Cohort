function populateDiv() {
  const a = document.getElementById("firstNumber").value;
  const b = document.getElementById("secondNumber").value;
  const element = document.getElementById("finalSum");
  element.innerHTML =  parseInt(a) + parseInt(b);
}
