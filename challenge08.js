//coding challenge 8
console.log("-----coding challenge 8-----");

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

let calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log("Bill values:", bills);
console.log("Tip values:", tips);
console.log("Total values:", totals);

let calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

let averageTotal = calcAverage(totals);
console.log("Average of totals:", averageTotal);
//coding challenge 8