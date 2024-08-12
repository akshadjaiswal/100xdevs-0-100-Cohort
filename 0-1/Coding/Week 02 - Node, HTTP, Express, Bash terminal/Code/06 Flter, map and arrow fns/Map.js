const array = [1, 2, 3, 4, 5];

function transform(i) {
  return i * 2;
}
const ans = array.map(transform);
console.log(ans);
