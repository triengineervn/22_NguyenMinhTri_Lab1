//coding challenge 5
console.log("-----coding challenge 5-----");
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//test case 1
// let dolphinsAvg = calcAverage(44, 23, 71);
// let koalasAvg = calcAverage(65, 54, 49);

//test case 2
let dolphinsAvg = calcAverage(85, 54, 41);
let koalasAvg = calcAverage(23, 34, 27);

let checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
};
checkWinner(dolphinsAvg, koalasAvg);
//coding challenge 5