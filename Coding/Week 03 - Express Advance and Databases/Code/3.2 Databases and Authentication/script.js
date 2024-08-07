async function getData() {
  const response = await fetch("https://fakerapi.it/api/v1/persons");
  const data =await response.json()
  console.log(data.data);
}
