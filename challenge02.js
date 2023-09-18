//coding challenge 2
console.log("-----coding challenge 1 & 2-----");

//test case 1
// let markMassKg = 78;
// let markHeightM = 1.69;
// let johnMassKg = 92;
// let johnHeightM = 1.95;

//test case 2
let markMassKg = 95;
let markHeightM = 1.88;
let johnMassKg = 85;
let johnHeightM = 1.76;

if (isNaN(markMassKg) || isNaN(markHeightM) || isNaN(johnMassKg) || isNaN(johnHeightM)) {
    console.log("Invalid input. Please enter valid numbers for mass and height.");
} else {
    let calculateBMI = (mass, height) => mass / (height ** 2);
    let markBMI = calculateBMI(markMassKg, markHeightM);
    let johnBMI = calculateBMI(johnMassKg, johnHeightM);

    console.log(`BMI's Mark: ${markBMI}`);
    console.log(`BMI's John: ${johnBMI}`);
    let markHigherBMI = markBMI > johnBMI;
    console.log(markHigherBMI);

    let message;
    if (markBMI > johnBMI) {
        message = `Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`;
    } else if (johnBMI > markBMI) {
        message = `John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`;
    } else {
        message = "Mark and John have the same BMI!";
    }
    console.log(message);
}
//coding challenge 2