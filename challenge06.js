//coding challenge 6
console.log("-----coding challenge 6-----");

let calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
let testBill = 100;
let tip = calcTip(testBill);
console.log(`The tip for a bill of ${testBill} is ${tip}`);

//test case 1
let bills = [125];

let tips = bills.map(bill => calcTip(bill));
let total = bills.map((bill, index) => bill + tips[index]);

console.log("Bill values:", bills);
console.log("Tip values:", tips);
console.log("Total values:", total);
//coding challenge 6