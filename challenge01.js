//coding challenge 1
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
    console.log(`Is Mark's BMI higher than John's?: ${markHigherBMI}`);
}
//coding challenge 1








