// Started at 7:06 2-5-2022

// Coding Challenge #3

// My code
const Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    BMI: 78 / 1.69 ** 2
};

const John = {
    firstName: 'John',
    lastName: 'Smith',
    BMI: 92 / 1.95 ** 2
};

if (Mark.BMI > John.BMI) {
    console.log(`${Mark.firstName} ${Mark.lastName}'s BMI (${Mark.BMI}) is higher than ${John.firstName} ${John.lastName}'s (${John.BMI})!`)
} else if (Mark.BMI = John.BMI) {
    console.log(`${Mark.firstName} ${Mark.lastName}'s BMI (${Mark.BMI}) is the same as ${John.firstName} ${John.lastName}'s (${John.BMI})!`)
} else if (John.BMI > Mark.BMI) {
    console.log(`${John.firstName} ${John.lastName}'s BMI (${John.BMI}) is higher than ${Mark.firstName} ${Mark.lastName}'s (${Mark.BMI})!`)
};

// His code
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi)

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
};



// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
};

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < 5; i++) {
    console.log(jonas[i]);
}
// ended at 8:48 2-5-2022
// On video 47 @ 4:38
