//coding challenge 3
console.log("-----coding challenge 3-----");
//test case 1
let dolphinsScores = [96, 108, 89];
let koalasScores = [88, 91, 110];

//test case 2
//let dolphinsScores = [97, 112, 101];
//let koalasScores = [109, 95, 123];

//test case 3
//let dolphinsScores = [97, 112, 101];
//let koalasScores = [109, 95, 106];

let calculateAverage = (scores) => {
    let total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
};

let dolphinsAverage = calculateAverage(dolphinsScores);
let koalasAverage = calculateAverage(koalasScores);

let minimumScore = 100;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= minimumScore) {
    console.log(`Dolphins win with an average score of ${dolphinsAverage}`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= minimumScore) {
    console.log(`Koalas win with an average score of ${koalasAverage}`);
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= minimumScore && koalasAverage >= minimumScore) {
    console.log("It's a draw!");
} else {
    console.log("No one wins the trophy.");
}
//coding challenge 3