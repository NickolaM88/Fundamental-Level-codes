function proccessOdd(arr) {

let filtered = arr.filter((x, i) => i % 2 == 1);
let doubled = filtered.map(x => x * 2);
let reversed = doubled.reverse();
console.log(reversed.join(` `));
}

proccessOdd([10,15,20,25])