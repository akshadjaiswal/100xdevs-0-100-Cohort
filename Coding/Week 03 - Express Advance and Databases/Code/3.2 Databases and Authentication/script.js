var Header = document.getElementById("heading");
async function getData() {
  const response = await fetch("https://fakerapi.it/api/v1/persons");
  const data = await response.json();
  Header.innerHTML = "Given Data";
  document.getElementById("container").innerHTML = JSON.stringify(data.data);
  console.log(data.data);
}
