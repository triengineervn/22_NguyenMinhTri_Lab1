//coding challenge 4
console.log("-----coding challenge 4-----");
//test case
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

let totalValue = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);
//coding challenge 4