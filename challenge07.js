//coding challenge 7
console.log("-----coding challenge 7-----");

let markInfor = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

let johnInfor = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

markInfor.calcBMI();
johnInfor.calcBMI();

if(markInfor.bmi > johnInfor.bmi) {
    console.log(`Mark's BMI (${markInfor.bmi.toFixed(1)}) is higher than John's (${johnInfor.bmi.toFixed(1)})!`);
    }else if(john.bmi > mark.bmi) {
    console.log(`John's BMI (${johnInfor.bmi.toFixed(1)}) is higher than Mark's (${markInfor.bmi.toFixed(1)})!`);
    }else {
    console.log("They have the same BMI!");
}
//coding challenge 7